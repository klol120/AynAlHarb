import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { operationSegments } from "../../data/consolidatedReport";

export default function WeeklySummaryPage(): JSX.Element {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const summary = operationSegments.find((segment) => segment.id === Number(id));

  if (!summary) return <div className="p-6">Summary not found.</div>;

  return (
    <main className="mx-auto grid max-w-5xl gap-5 px-4 py-5">
      <section className="hero-shell overflow-hidden p-6 text-white shadow-xl">
        <p className="soft-pill inline-flex px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--brand-cream)]/85">
          {summary.type === "DAILY" ? t("Daily Summary", "الحصاد اليومي") : t("Weekly Summary", "الحصاد الأسبوعي")}
        </p>
        <h1 className={`mt-2 text-3xl font-black ${language === "ar" ? "rtl-font" : ""}`}>
          {language === "ar" ? `${summary.titleAr} - ${summary.periodAr}` : `${summary.titleEn} - ${summary.periodEn}`}
        </h1>
      </section>

      <section className="card p-4">
        <h2 className="mb-3 text-lg font-black text-[var(--brand-navy)]">{t("Operational Snapshot", "اللقطة العملياتية")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-xs text-slate-500">{t("Total Operations", "مجموع العمليات")}</p>
            <p className="text-2xl font-black text-[var(--brand-navy)]">{summary.totalOperations}</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-xs text-slate-500">{t("Inside Lebanon", "داخل الأراضي اللبنانية")}</p>
            <p className="text-2xl font-black text-[var(--brand-navy)]">{summary.insideLebanon}</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-xs text-slate-500">{t("Inside Occupied Palestine", "داخل الأراضي الفلسطينية المحتلة")}</p>
            <p className="text-2xl font-black text-[var(--brand-navy)]">{summary.insideOccupiedPalestine}</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-xs text-slate-500">{t("Targeting Depth", "عمق الاستهداف")}</p>
            <p className="text-2xl font-black text-[var(--brand-navy)]">{summary.targetingDepthKm} km</p>
          </article>
        </div>

        {summary.dailyAverage ? (
          <p className="mt-3 text-sm text-slate-600">
            {t("Daily average", "المعدل اليومي")}: <span className="font-semibold">{summary.dailyAverage}</span>
          </p>
        ) : null}
      </section>
    </main>
  );
}
