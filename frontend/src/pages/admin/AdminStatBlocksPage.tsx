import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import DeleteConfirmModal from "../../components/DeleteConfirmModal";
import StatBlockForm from "../../components/StatBlockForm";
import { api } from "../../lib/api";
import type { SummaryStatBlock, WeeklySummary } from "../../types";

export default function AdminStatBlocksPage(): JSX.Element {
  const [summaries, setSummaries] = useState<WeeklySummary[]>([]);
  const [summaryId, setSummaryId] = useState<number | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = () =>
    api.getSummaries(true).then((rows) => {
      setSummaries(rows);
      if (!summaryId && rows[0]) setSummaryId(rows[0].id);
    });

  useEffect(() => {
    load();
  }, []);

  const current = useMemo(() => summaries.find((s) => s.id === summaryId), [summaries, summaryId]);

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-black text-[var(--brand-navy)]">Category Counts Management</h1>
      <select
        className="rounded-lg border border-slate-300 p-2"
        value={summaryId ?? ""}
        onChange={(e) => setSummaryId(Number(e.target.value))}
      >
        {summaries.map((summary) => (
          <option key={summary.id} value={summary.id}>{summary.titleEn}</option>
        ))}
      </select>

      {summaryId ? (
        <div className="card p-4">
          <StatBlockForm
            weeklySummaryId={summaryId}
            onSubmit={async (payload) => {
              await api.createStatBlock(payload);
              toast.success("Stat row added");
              load();
            }}
          />
        </div>
      ) : null}

      <div className="card p-4">
        <h2 className="mb-3 text-lg font-bold">Rows</h2>
        <div className="space-y-2">
          {(current?.statBlocks || []).map((row: SummaryStatBlock) => (
            <article key={row.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
              <div>
                <p className="font-semibold">{row.labelEn} | {row.labelAr}</p>
                <p className="text-xs text-slate-500">Count: {row.value} | Order: {row.displayOrder}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="rounded-lg border border-slate-300 px-2 py-1 text-sm"
                  onClick={async () => {
                    await api.updateStatBlock(row.id, { value: row.value + 1 });
                    toast.success("Count updated");
                    load();
                  }}
                >
                  +Count
                </button>
                <button
                  className="rounded-lg border border-slate-300 px-2 py-1 text-sm"
                  onClick={async () => {
                    await api.updateStatBlock(row.id, { displayOrder: row.displayOrder + 1 });
                    toast.success("Display order updated");
                    load();
                  }}
                >
                  +Order
                </button>
                <button
                  className="rounded-lg border border-slate-300 px-2 py-1 text-sm"
                  onClick={async () => {
                    const labelEn = window.prompt("English label", row.labelEn) || row.labelEn;
                    const labelAr = window.prompt("Arabic label", row.labelAr) || row.labelAr;
                    await api.updateStatBlock(row.id, { labelEn, labelAr });
                    toast.success("Labels updated");
                    load();
                  }}
                >
                  Edit
                </button>
                <button className="rounded-lg bg-[var(--brand-red)] px-2 py-1 text-sm text-white" onClick={() => setDeleting(row.id)}>
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <DeleteConfirmModal
        open={deleting !== null}
        title="Delete stat row?"
        onCancel={() => setDeleting(null)}
        onConfirm={async () => {
          if (deleting == null) return;
          await api.deleteStatBlock(deleting);
          setDeleting(null);
          toast.success("Row deleted");
          load();
        }}
      />
    </section>
  );
}
