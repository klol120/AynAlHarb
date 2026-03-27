import { Link } from "react-router-dom";
import type { WeeklySummary } from "../types";
import { useLanguage } from "../context/LanguageContext";

export default function ArchiveList({ summaries }: { summaries: WeeklySummary[] }): JSX.Element {
  const { t, language } = useLanguage();

  return (
    <section className="card p-4">
      <h3 className="mb-3 text-lg font-bold text-[var(--brand-navy)]">{t("Archive", "الأرشيف")}</h3>
      <div className="space-y-2">
        {summaries.map((summary) => (
          <Link
            key={summary.id}
            to={`/weekly/${summary.id}`}
            className="block rounded-xl border border-slate-200 bg-white p-3 hover:border-[var(--brand-red)]"
          >
            <p className="font-semibold">{language === "ar" ? summary.titleAr : summary.titleEn}</p>
            <p className="text-xs text-slate-500">
              {new Date(summary.weekStart).toLocaleDateString()} - {new Date(summary.weekEnd).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
