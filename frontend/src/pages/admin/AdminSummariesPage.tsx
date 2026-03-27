import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DeleteConfirmModal from "../../components/DeleteConfirmModal";
import SummaryForm from "../../components/SummaryForm";
import { api } from "../../lib/api";
import type { WeeklySummary } from "../../types";

export default function AdminSummariesPage(): JSX.Element {
  const [summaries, setSummaries] = useState<WeeklySummary[]>([]);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = () => api.getSummaries(true).then(setSummaries);

  useEffect(() => {
    load();
  }, []);

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-black text-[var(--brand-navy)]">Weekly Summaries Management</h1>
      <div className="card p-4">
        <SummaryForm
          onSubmit={async (payload) => {
            await api.createSummary(payload);
            toast.success("Summary created");
            load();
          }}
        />
      </div>

      <div className="card p-4">
        <h2 className="mb-3 text-lg font-bold">Existing Summaries</h2>
        <div className="space-y-2">
          {summaries.map((summary) => (
            <article key={summary.id} className="rounded-lg border border-slate-200 p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-semibold">{summary.titleEn}</p>
                  <p className="text-xs text-slate-500">Status: {summary.status}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="rounded-lg border border-slate-300 px-3 py-1 text-sm"
                    onClick={async () => {
                      const totalIncidents = Number(window.prompt("Total incidents", String(summary.totalIncidents)));
                      const dailyAverage = Number(window.prompt("Daily average", String(summary.dailyAverage)));
                      const maxRangeKm = Number(window.prompt("Max range KM", String(summary.maxRangeKm ?? 0)));
                      if (Number.isNaN(totalIncidents) || Number.isNaN(dailyAverage) || Number.isNaN(maxRangeKm)) {
                        toast.error("Invalid numeric values");
                        return;
                      }
                      await api.updateSummary(summary.id, { totalIncidents, dailyAverage, maxRangeKm });
                      toast.success("Summary totals updated");
                      load();
                    }}
                  >
                    Edit Totals
                  </button>
                  <button
                    className="rounded-lg border border-slate-300 px-3 py-1 text-sm"
                    onClick={async () => {
                      const status = summary.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";
                      await api.updateSummary(summary.id, { status });
                      toast.success(status === "PUBLISHED" ? "Published" : "Unpublished");
                      load();
                    }}
                  >
                    {summary.status === "PUBLISHED" ? "Unpublish" : "Publish"}
                  </button>
                  <button className="rounded-lg bg-[var(--brand-red)] px-3 py-1 text-sm font-semibold text-white" onClick={() => setDeleting(summary.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <DeleteConfirmModal
        open={deleting !== null}
        title="Delete summary?"
        onCancel={() => setDeleting(null)}
        onConfirm={async () => {
          if (deleting == null) return;
          await api.deleteSummary(deleting);
          setDeleting(null);
          toast.success("Summary deleted");
          load();
        }}
      />
    </section>
  );
}
