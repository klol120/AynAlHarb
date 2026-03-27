import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../lib/api";
import type { WeeklySummary } from "../../types";

export default function AdminOverviewPage(): JSX.Element {
  const [summaries, setSummaries] = useState<WeeklySummary[]>([]);
  const [summaryId, setSummaryId] = useState<number | null>(null);
  const [dailyAverage, setDailyAverage] = useState<string>("0");
  const [totalIncidents, setTotalIncidents] = useState<string>("0");
  const [saving, setSaving] = useState(false);

  const load = async (targetSummaryId?: number | null) => {
    const rows = await api.getSummaries(true);
    setSummaries(rows);

    const nextId = targetSummaryId ?? summaryId ?? rows[0]?.id ?? null;
    if (nextId != null && nextId !== summaryId) {
      setSummaryId(nextId);
    }

    const current = rows.find((row) => row.id === nextId) || rows[0];
    if (current) {
      setDailyAverage(String(current.dailyAverage));
      setTotalIncidents(String(current.totalIncidents));
    }
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (summaryId != null) {
      const selected = summaries.find((row) => row.id === summaryId);
      if (selected) {
        setDailyAverage(String(selected.dailyAverage));
        setTotalIncidents(String(selected.totalIncidents));
      }
    }
  }, [summaryId, summaries]);

  const current = useMemo(() => summaries.find((row) => row.id === summaryId) || null, [summaries, summaryId]);

  const saveCoreStats = async () => {
    if (!current) return;

    const nextDaily = Number(dailyAverage);
    const nextTotal = Number(totalIncidents);

    if (Number.isNaN(nextDaily) || nextDaily < 0) {
      toast.error("Daily value must be 0 or higher");
      return;
    }

    if (!Number.isInteger(nextTotal) || nextTotal < 0) {
      toast.error("Operations value must be a whole number");
      return;
    }

    setSaving(true);
    try {
      await api.updateSummary(current.id, {
        dailyAverage: nextDaily,
        totalIncidents: nextTotal
      });
      toast.success("✓ Daily values updated");
      await load(current.id);
    } finally {
      setSaving(false);
    }
  };

  const toggleReportPosted = async () => {
    if (!current) return;
    const nextStatus = current.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";
    await api.updateSummary(current.id, { status: nextStatus });
    toast.success(nextStatus === "PUBLISHED" ? "✓ Report posted" : "✓ Report unposted");
    await load(current.id);
  };

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-[var(--brand-red)]">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-400">Manage core report statistics</p>
      </div>

      {/* Report Selector */}
      <div className="rounded-lg border border-gray-700 bg-gray-900 p-6">
        <label className="block text-xs font-bold uppercase text-gray-400 mb-3">Select Report</label>
        <select
          className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
          value={summaryId ?? ""}
          onChange={(event) => setSummaryId(Number(event.target.value))}
        >
          {summaries.map((summary) => (
            <option key={summary.id} value={summary.id}>
              {summary.titleEn}
            </option>
          ))}
        </select>
      </div>

      {current && (
        <>
          {/* Stats Editor */}
          <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">Report Statistics</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Daily Average</label>
                <input
                  type="number"
                  min={0}
                  step={0.1}
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
                  value={dailyAverage}
                  onChange={(event) => setDailyAverage(event.target.value)}
                />
                <p className="mt-1 text-xs text-gray-500">Current: {current.dailyAverage}</p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Total Operations</label>
                <input
                  type="number"
                  min={0}
                  step={1}
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
                  value={totalIncidents}
                  onChange={(event) => setTotalIncidents(event.target.value)}
                />
                <p className="mt-1 text-xs text-gray-500">Current: {current.totalIncidents}</p>
              </div>
            </div>

            <button
              onClick={saveCoreStats}
              disabled={!current || saving}
              className="w-full rounded-lg bg-[var(--brand-red)] px-4 py-3 font-bold text-white hover:brightness-110 disabled:opacity-50 transition-all"
            >
              {saving ? "Saving..." : "Save Statistics"}
            </button>
          </div>

          {/* Report Status */}
          <div className="rounded-lg border border-gray-700 bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">Publication Status</p>
                <p className={`text-sm font-bold mt-1 ${current.status === "PUBLISHED" ? "text-green-400" : "text-yellow-400"}`}>
                  {current.status === "PUBLISHED" ? "✓ Published" : "⊘ Draft"}
                </p>
              </div>
              <button
                onClick={toggleReportPosted}
                disabled={!current}
                className="rounded-lg bg-[var(--brand-navy)] px-6 py-3 font-bold text-white hover:brightness-110 disabled:opacity-50 transition-all"
              >
                {current.status === "PUBLISHED" ? "Mark as Draft" : "Publish Report"}
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
