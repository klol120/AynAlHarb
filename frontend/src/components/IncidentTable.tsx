import type { IncidentRecord } from "../types";
import { useLanguage } from "../context/LanguageContext";

export default function IncidentTable({ incidents }: { incidents: IncidentRecord[] }): JSX.Element {
  const { language, t } = useLanguage();

  return (
    <section className="card overflow-x-auto p-4">
      <h3 className="mb-3 text-lg font-bold text-[var(--brand-navy)]">{t("Incident Records", "سجلات الحوادث")}</h3>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left text-xs uppercase text-slate-500">
            <th className="py-2">{t("Date", "التاريخ")}</th>
            <th className="py-2">{t("Title", "العنوان")}</th>
            <th className="py-2">{t("Category", "الفئة")}</th>
            <th className="py-2">{t("Count", "العدد")}</th>
            <th className="py-2">{t("Location", "الموقع")}</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id} className="border-b border-slate-100">
              <td className="py-2">{new Date(incident.recordDate).toLocaleDateString()}</td>
              <td className="py-2">{language === "ar" ? incident.titleAr : incident.titleEn}</td>
              <td className="py-2">{incident.category}</td>
              <td className="py-2 font-semibold">{incident.count}</td>
              <td className="py-2">{language === "ar" ? incident.locationNameAr : incident.locationNameEn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
