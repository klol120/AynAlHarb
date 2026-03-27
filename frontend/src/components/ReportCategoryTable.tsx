import { useLanguage } from "../context/LanguageContext";
import type { ReportCategoryItem } from "../data/consolidatedReport";

export default function ReportCategoryTable({
  titleEn,
  titleAr,
  rows
}: {
  titleEn: string;
  titleAr: string;
  rows: ReportCategoryItem[];
}): JSX.Element {
  const { t, language } = useLanguage();

  return (
    <section className="rounded-xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <h2 className="mb-4 text-lg font-black text-[var(--brand-red)]">{t(titleEn, titleAr)}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-600 bg-slate-900/70">
              <th className="px-3 py-3 text-left font-semibold text-slate-300">{t("Category", "الفئة")}</th>
              <th className="px-3 py-3 text-right font-semibold text-slate-300">{t("Count", "العدد")}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row.labelEn}-${row.value}`} className={`border-b border-slate-700 ${index % 2 === 0 ? "bg-slate-900/80" : "bg-slate-800/70"} hover:bg-slate-700/70 transition-colors`}>
                <td className={`px-3 py-3 text-slate-200 ${language === "ar" ? "rtl-font" : ""}`}>{language === "ar" ? row.labelAr : row.labelEn}</td>
                <td className="px-3 py-3 text-right font-bold text-[var(--brand-red)] text-base">{row.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
