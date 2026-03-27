import type { SummaryStatBlock } from "../types";
import { useLanguage } from "../context/LanguageContext";

export default function BilingualStatBlock({ rows, total }: { rows: SummaryStatBlock[]; total: number }): JSX.Element {
  const { t } = useLanguage();

  return (
    <section className="card border-none bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-2xl font-black text-[var(--brand-navy)]">{t("Items Recorded This Week", "العناصر المسجلة هذا الأسبوع")}</h2>
          <p className="mt-1 text-sm text-slate-500">{t("Editable bilingual stat rows from admin dashboard", "صفوف إحصائية ثنائية اللغة قابلة للتعديل من لوحة الإدارة")}</p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {rows.map((row) => {
          const percent = total > 0 ? ((row.value / total) * 100).toFixed(1) : "0.0";
          return (
            <article key={row.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-slate-900">{row.labelEn}</p>
                  <p className="rtl-font text-sm text-slate-700">{row.labelAr}</p>
                  {row.groupName ? <p className="mt-1 text-xs text-slate-500">{row.groupName}</p> : null}
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-[var(--brand-red)]">{row.value}</p>
                  <p className="text-xs text-slate-500">{percent}%</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
