import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../lib/api";
import type { IncidentRecord, WeeklySummary } from "../../types";

export default function AdminIncidentsPage(): JSX.Element {
  const [summaries, setSummaries] = useState<WeeklySummary[]>([]);
  const [selectedSummary, setSelectedSummary] = useState<WeeklySummary | null>(null);
  const [summaryId, setSummaryId] = useState<number | null>(null);

  const load = async (targetSummaryId?: number | null) => {
    const summaryRows = await api.getSummaries(true);
    setSummaries(summaryRows);
    const effectiveSummaryId = targetSummaryId ?? summaryId ?? summaryRows[0]?.id ?? null;

    if (effectiveSummaryId) {
      if (summaryId !== effectiveSummaryId) {
        setSummaryId(effectiveSummaryId);
      }
      const detailed = await api.getSummary(effectiveSummaryId);
      setSelectedSummary(detailed);
    } else {
      setSelectedSummary(null);
    }
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (summaryId) {
      load(summaryId);
    }
  }, [summaryId]);

  const current = useMemo(() => {
    if (selectedSummary && selectedSummary.id === summaryId) return selectedSummary;
    return summaries.find((s) => s.id === summaryId) || null;
  }, [selectedSummary, summaries, summaryId]);

  const updateCount = async (incident: IncidentRecord, delta: number) => {
    const nextCount = Math.max(0, incident.count + delta);
    await api.updateIncident(incident.id, { count: nextCount });
    toast.success(`✓ Updated to ${nextCount}`);
    await load(summaryId);
  };

  const toggleReportPosted = async () => {
    if (!current) return;
    const nextStatus = current.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";
    await api.updateSummary(current.id, { status: nextStatus });
    toast.success(nextStatus === "PUBLISHED" ? "✓ Report published" : "✓ Report drafted");
    await load(summaryId);
  };

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-[var(--brand-red)]">Incident Counts</h1>
        <p className="mt-2 text-sm text-gray-400">Quick adjust counts for each incident category</p>
      </div>

      {/* Report Selector */}
      <div className="rounded-lg border border-gray-700 bg-gray-900 p-6">
        <label className="block text-xs font-bold uppercase text-gray-400 mb-3">Select Report</label>
        <select
          className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
          value={summaryId ?? ""}
          onChange={(e) => setSummaryId(Number(e.target.value))}
        >
          {summaries.map((summary) => (
            <option key={summary.id} value={summary.id}>
              {summary.titleEn}
            </option>
          ))}
        </select>
      </div>

      {/* Status Bar */}
      {current && (
        <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Report Status</p>
            <p className={`text-lg font-bold mt-1 ${current.status === "PUBLISHED" ? "text-green-400" : "text-yellow-400"}`}>
              {current.status === "PUBLISHED" ? "✓ Published" : "⊘ Draft"}
            </p>
          </div>
          <button
            onClick={toggleReportPosted}
            className="rounded-lg bg-[var(--brand-red)] px-6 py-3 font-bold text-white hover:brightness-110 transition-all"
          >
            {current.status === "PUBLISHED" ? "Unpublish" : "Publish"}
          </button>
        </div>
      )}

      {/* Incidents List */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-white">Incidents & Counts</h2>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {(current?.incidents || []).length === 0 ? (
            <div className="rounded-lg border border-gray-700 bg-gray-900 p-8 text-center text-gray-500">
              No incidents for selected report
            </div>
          ) : (
            (current?.incidents || []).map((incident: IncidentRecord) => (
              <div key={incident.id} className="rounded-lg border border-gray-700 bg-gray-900 p-4 hover:border-[var(--brand-red)]/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-white">{incident.titleEn}</p>
                    <p className="text-sm text-gray-400 mt-1">{incident.titleAr}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(incident.recordDate).toLocaleDateString()} • {incident.category}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-2">
                    <button
                      onClick={() => updateCount(incident, -1)}
                      className="rounded-lg bg-gray-700 hover:bg-[var(--brand-red)]/30 px-3 py-2 text-sm font-bold text-white transition-colors"
                    >
                      −
                    </button>
                    <span className="min-w-12 text-center text-lg font-black text-[var(--brand-red)]">{incident.count}</span>
                    <button
                      onClick={() => updateCount(incident, 1)}
                      className="rounded-lg bg-gray-700 hover:bg-[var(--brand-red)]/30 px-3 py-2 text-sm font-bold text-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
