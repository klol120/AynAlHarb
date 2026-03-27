import type { WeeklySummary } from "../types";
import { useLanguage } from "../context/LanguageContext";

export default function WeeklyHeroCard({ summary }: { summary: WeeklySummary }): JSX.Element {
  const { language, t } = useLanguage();

  const start = new Date(summary.weekStart).toLocaleDateString();
  const end = new Date(summary.weekEnd).toLocaleDateString();

  return (
    <section className="hero-shell overflow-hidden p-6 text-white shadow-xl">
      <p className="soft-pill inline-flex px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--brand-cream)]/85">
        {t("Weekly Monitoring Brief", "إحاطة الرصد الأسبوعية")}
      </p>
      <h1 className={`mt-2 text-3xl font-black ${language === "ar" ? "rtl-font" : ""}`}>
        {language === "ar" ? summary.titleAr : summary.titleEn}
      </h1>
      <p className="mt-3 text-sm text-[var(--brand-cream)]/80">{start} - {end}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[rgba(239,232,217,0.22)] bg-black/20 p-3">
          <p className="text-xs text-[var(--brand-cream)]/75">{t("Total Recorded Incidents", "إجمالي الحوادث المسجلة")}</p>
          <p className="text-3xl font-black">{summary.totalIncidents}</p>
        </div>
        <div className="rounded-xl border border-[rgba(239,232,217,0.22)] bg-black/20 p-3">
          <p className="text-xs text-[var(--brand-cream)]/75">{t("Daily Average", "المعدل اليومي")}</p>
          <p className="text-3xl font-black">{summary.dailyAverage.toFixed(1)}</p>
        </div>
        <div className="rounded-xl border border-[rgba(239,232,217,0.22)] bg-black/20 p-3">
          <p className="text-xs text-[var(--brand-cream)]/75">{t("Maximum Range / Depth", "المدى / العمق الأقصى")}</p>
          <p className="text-3xl font-black">{summary.maxRangeKm ?? 0} km</p>
        </div>
      </div>

      {(summary.notesEn || summary.notesAr) && (
        <div className="mt-5 rounded-xl border border-[rgba(239,232,217,0.25)] bg-black/15 p-3 text-sm text-[var(--brand-cream)]/90">
          {language === "ar" ? summary.notesAr : summary.notesEn}
        </div>
      )}
    </section>
  );
}
