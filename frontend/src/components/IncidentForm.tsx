import { useState } from "react";
import type { Source } from "../types";

export default function IncidentForm({
  weeklySummaryId,
  sources,
  onSubmit
}: {
  weeklySummaryId: number;
  sources: Source[];
  onSubmit: (payload: Record<string, unknown>) => Promise<void>;
}): JSX.Element {
  const [form, setForm] = useState({
    titleEn: "",
    titleAr: "",
    descriptionEn: "",
    descriptionAr: "",
    recordDate: "",
    count: 1,
    category: "",
    locationNameEn: "",
    locationNameAr: "",
    latitude: "",
    longitude: "",
    sourceId: ""
  });

  return (
    <form
      className="grid gap-2 md:grid-cols-2"
      onSubmit={async (event) => {
        event.preventDefault();
        if (!form.titleEn || !form.titleAr || !form.recordDate || !form.category) return;
        await onSubmit({
          weeklySummaryId,
          ...form,
          count: Number(form.count),
          latitude: form.latitude ? Number(form.latitude) : null,
          longitude: form.longitude ? Number(form.longitude) : null,
          sourceId: form.sourceId ? Number(form.sourceId) : null
        });
      }}
    >
      <input required className="rounded-lg border border-slate-300 p-2" placeholder="Title EN" value={form.titleEn} onChange={(e) => setForm((p) => ({ ...p, titleEn: e.target.value }))} />
      <input required className="rtl-font rounded-lg border border-slate-300 p-2" placeholder="العنوان العربي" value={form.titleAr} onChange={(e) => setForm((p) => ({ ...p, titleAr: e.target.value }))} />
      <input type="date" required className="rounded-lg border border-slate-300 p-2" value={form.recordDate} onChange={(e) => setForm((p) => ({ ...p, recordDate: e.target.value }))} />
      <input required className="rounded-lg border border-slate-300 p-2" placeholder="Category" value={form.category} onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))} />
      <input type="number" min={1} className="rounded-lg border border-slate-300 p-2" placeholder="Count" value={form.count} onChange={(e) => setForm((p) => ({ ...p, count: Number(e.target.value) }))} />
      <select className="rounded-lg border border-slate-300 p-2" value={form.sourceId} onChange={(e) => setForm((p) => ({ ...p, sourceId: e.target.value }))}>
        <option value="">No source</option>
        {sources.map((source) => (
          <option value={source.id} key={source.id}>{source.name}</option>
        ))}
      </select>
      <input className="rounded-lg border border-slate-300 p-2" placeholder="Location EN" value={form.locationNameEn} onChange={(e) => setForm((p) => ({ ...p, locationNameEn: e.target.value }))} />
      <input className="rtl-font rounded-lg border border-slate-300 p-2" placeholder="الموقع العربي" value={form.locationNameAr} onChange={(e) => setForm((p) => ({ ...p, locationNameAr: e.target.value }))} />
      <input className="rounded-lg border border-slate-300 p-2" placeholder="Latitude" value={form.latitude} onChange={(e) => setForm((p) => ({ ...p, latitude: e.target.value }))} />
      <input className="rounded-lg border border-slate-300 p-2" placeholder="Longitude" value={form.longitude} onChange={(e) => setForm((p) => ({ ...p, longitude: e.target.value }))} />
      <textarea className="rounded-lg border border-slate-300 p-2" placeholder="Description EN" value={form.descriptionEn} onChange={(e) => setForm((p) => ({ ...p, descriptionEn: e.target.value }))} />
      <textarea className="rtl-font rounded-lg border border-slate-300 p-2" placeholder="الوصف العربي" value={form.descriptionAr} onChange={(e) => setForm((p) => ({ ...p, descriptionAr: e.target.value }))} />
      <button className="md:col-span-2 rounded-lg bg-[var(--brand-red)] px-4 py-2 font-semibold text-white">Add Incident</button>
    </form>
  );
}
