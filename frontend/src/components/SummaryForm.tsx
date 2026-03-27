import { useState } from "react";
import type { WeeklySummary } from "../types";

const initialState = {
  titleEn: "",
  titleAr: "",
  subtitleEn: "",
  subtitleAr: "",
  weekStart: "",
  weekEnd: "",
  totalIncidents: 0,
  dailyAverage: 0,
  maxRangeKm: 0,
  notesEn: "",
  notesAr: "",
  coverImageUrl: "",
  status: "DRAFT"
};

export default function SummaryForm({
  initial,
  onSubmit
}: {
  initial?: Partial<WeeklySummary>;
  onSubmit: (payload: Record<string, unknown>) => Promise<void>;
}): JSX.Element {
  const [form, setForm] = useState({
    ...initialState,
    ...initial,
    subtitleEn: initial?.subtitleEn ?? "",
    subtitleAr: initial?.subtitleAr ?? "",
    notesEn: initial?.notesEn ?? "",
    notesAr: initial?.notesAr ?? "",
    coverImageUrl: initial?.coverImageUrl ?? "",
    maxRangeKm: initial?.maxRangeKm ?? 0
  });

  const update = (key: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form
      className="grid gap-3 md:grid-cols-2"
      onSubmit={async (event) => {
        event.preventDefault();
        await onSubmit(form);
      }}
    >
      <input required className="rounded-lg border border-slate-300 p-2" placeholder="Title EN" value={form.titleEn} onChange={(e) => update("titleEn", e.target.value)} />
      <input required className="rtl-font rounded-lg border border-slate-300 p-2" placeholder="العنوان العربي" value={form.titleAr} onChange={(e) => update("titleAr", e.target.value)} />
      <input className="rounded-lg border border-slate-300 p-2" placeholder="Subtitle EN" value={form.subtitleEn} onChange={(e) => update("subtitleEn", e.target.value)} />
      <input className="rtl-font rounded-lg border border-slate-300 p-2" placeholder="العنوان الفرعي العربي" value={form.subtitleAr} onChange={(e) => update("subtitleAr", e.target.value)} />
      <input type="date" required className="rounded-lg border border-slate-300 p-2" value={form.weekStart} onChange={(e) => update("weekStart", e.target.value)} />
      <input type="date" required className="rounded-lg border border-slate-300 p-2" value={form.weekEnd} onChange={(e) => update("weekEnd", e.target.value)} />
      <input type="number" min={0} className="rounded-lg border border-slate-300 p-2" placeholder="Total Incidents" value={form.totalIncidents} onChange={(e) => update("totalIncidents", Number(e.target.value))} />
      <input type="number" min={0} step="0.1" className="rounded-lg border border-slate-300 p-2" placeholder="Daily Average" value={form.dailyAverage} onChange={(e) => update("dailyAverage", Number(e.target.value))} />
      <input type="number" min={0} step="0.1" className="rounded-lg border border-slate-300 p-2" placeholder="Max Range KM" value={form.maxRangeKm} onChange={(e) => update("maxRangeKm", Number(e.target.value))} />
      <select className="rounded-lg border border-slate-300 p-2" value={form.status} onChange={(e) => update("status", e.target.value)}>
        <option value="DRAFT">DRAFT</option>
        <option value="PUBLISHED">PUBLISHED</option>
      </select>
      <input className="md:col-span-2 rounded-lg border border-slate-300 p-2" placeholder="Cover image URL" value={form.coverImageUrl} onChange={(e) => update("coverImageUrl", e.target.value)} />
      <textarea className="rounded-lg border border-slate-300 p-2" placeholder="Notes EN" value={form.notesEn} onChange={(e) => update("notesEn", e.target.value)} />
      <textarea className="rtl-font rounded-lg border border-slate-300 p-2" placeholder="ملاحظات عربية" value={form.notesAr} onChange={(e) => update("notesAr", e.target.value)} />
      <button className="md:col-span-2 rounded-lg bg-[var(--brand-navy)] px-4 py-2 font-semibold text-white">Save Weekly Summary</button>
    </form>
  );
}
