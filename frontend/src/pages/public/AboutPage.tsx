import { useLanguage } from "../../context/LanguageContext";

export default function AboutPage(): JSX.Element {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-4xl px-4 py-6">
      <section className="card p-6">
        <h1 className="text-2xl font-black text-[var(--brand-navy)]">{t("About / Methodology", "حول / المنهجية")}</h1>
        <p className="mt-4 text-slate-700">
          {t(
            "This website now presents a consolidated military operations report for 02/03/2026 through 26/03/2026. Categories are preserved exactly as reported in the source infographics, including separate and combined labels where the source used different naming.",
            "يعرض هذا الموقع الآن التقرير الموحد للعمليات العسكرية للفترة من 02/03/2026 حتى 26/03/2026. تم الحفاظ على الفئات كما وردت حرفيًا في الإنفوغرافات، بما فيها الفئات المنفصلة والمدمجة عندما اختلفت التسمية بين البطاقات."
          )}
        </p>
        <ul className="mt-4 list-disc pl-5 text-sm text-slate-700">
          <li>{t("Scope includes overall totals, period-by-period totals, and daily snapshots", "يشمل النطاق الحصيلة العامة والتفصيل بحسب الفترات إضافة إلى الحصاد اليومي")}</li>
          <li>{t("No guessed aggregation: differently reported labels remain separate", "لا يوجد دمج تقديري: أي تسمية مختلفة بقيت كفئة مستقلة")}</li>
          <li>{t("Bilingual publication in Arabic and English", "نشر ثنائي اللغة بالعربية والإنجليزية")}</li>
        </ul>
      </section>
    </main>
  );
}
