import { useState } from "react";

export default function StatBlockForm({
  weeklySummaryId,
  onSubmit
}: {
  weeklySummaryId: number;
  onSubmit: (payload: Record<string, unknown>) => Promise<void>;
}): JSX.Element {
  const [form, setForm] = useState({
    labelEn: "",
    labelAr: "",
    value: 0,
    icon: "",
    displayOrder: 0,
    groupName: ""
  });

  return (
    <form
      className="grid gap-2 md:grid-cols-2"
      onSubmit={async (event) => {
        event.preventDefault();
        if (!form.labelEn || !form.labelAr) return;
        await onSubmit({ ...form, weeklySummaryId });
        setForm({ labelEn: "", labelAr: "", value: 0, icon: "", displayOrder: 0, groupName: "" });
      }}
    >
      <input required className="rounded-lg border border-slate-300 p-2" placeholder="English label" value={form.labelEn} onChange={(e) => setForm((p) => ({ ...p, labelEn: e.target.value }))} />
      <input required className="rtl-font rounded-lg border border-slate-300 p-2" placeholder="التسمية العربية" value={form.labelAr} onChange={(e) => setForm((p) => ({ ...p, labelAr: e.target.value }))} />
      <input type="number" min={0} className="rounded-lg border border-slate-300 p-2" placeholder="Count" value={form.value} onChange={(e) => setForm((p) => ({ ...p, value: Number(e.target.value) }))} />
      <input className="rounded-lg border border-slate-300 p-2" placeholder="Icon (optional)" value={form.icon} onChange={(e) => setForm((p) => ({ ...p, icon: e.target.value }))} />
      <input type="number" min={0} className="rounded-lg border border-slate-300 p-2" placeholder="Display order" value={form.displayOrder} onChange={(e) => setForm((p) => ({ ...p, displayOrder: Number(e.target.value) }))} />
      <input className="rounded-lg border border-slate-300 p-2" placeholder="Group/category" value={form.groupName} onChange={(e) => setForm((p) => ({ ...p, groupName: e.target.value }))} />
      <button className="md:col-span-2 rounded-lg bg-[var(--brand-red)] px-4 py-2 font-semibold text-white">Add Stat Row</button>
    </form>
  );
}
