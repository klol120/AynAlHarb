import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import ReportCategoryTable from "../../components/ReportCategoryTable";
import { useLanguage } from "../../context/LanguageContext";
import { enemyLossCategories, operationSegments, targetCategories, weaponCategories } from "../../data/consolidatedReport";
import { applyCategoryEdits } from "../../lib/categoryStorage";

export default function AnalyticsPage(): JSX.Element {
  const { t, language } = useLanguage();
  const [editedTargets, setEditedTargets] = useState(targetCategories);
  const [editedWeapons, setEditedWeapons] = useState(weaponCategories);
  const [editedLosses, setEditedLosses] = useState(enemyLossCategories);

  useEffect(() => {
    // Apply any saved edits to all categories
    setEditedTargets(applyCategoryEdits(targetCategories, "targets"));
    setEditedWeapons(applyCategoryEdits(weaponCategories, "weapons"));
    setEditedLosses(applyCategoryEdits(enemyLossCategories, "losses"));
  }, []);

  const trendData = operationSegments.map((segment) => ({
    name: language === "ar" ? segment.periodAr : segment.periodEn,
    total: segment.totalOperations,
    lebanon: segment.insideLebanon,
    occupied: segment.insideOccupiedPalestine
  }));

  const topTargetData = editedTargets.slice(0, 8).map((row) => ({
    name: language === "ar" ? row.labelAr : row.labelEn,
    value: row.value
  }));

  const topWeaponData = editedWeapons.slice(0, 8).map((row) => ({
    name: language === "ar" ? row.labelAr : row.labelEn,
    value: row.value
  }));

  const topLossData = editedLosses.slice(0, 8).map((row) => ({
    name: language === "ar" ? row.labelAr : row.labelEn,
    value: row.value
  }));

  const pieColors = ["#bf1e2e", "#0f2238", "#0e7490", "#ea580c", "#334155", "#15803d", "#4f46e5", "#7c2d12"];

  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <section className="mb-6">
        <h1 className="text-3xl font-black text-[var(--brand-navy)]">{t("Detailed Analytics & Categories", "التحليلات التفصيلية والفئات")}</h1>
        <p className="mt-2 text-sm text-slate-600">{t("Comprehensive breakdown of all operations, weapons, and reported enemy losses", "تفصيل شامل لجميع العمليات والأسلحة وخسائر العدو المعلنة")}</p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="card p-4 lg:col-span-3">
          <h3 className="mb-3 text-lg font-bold text-[var(--brand-navy)]">{t("Operations Trend by Segment", "اتجاه العمليات حسب الفترات")}</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#bf1e2e" strokeWidth={3} dot={{ fill: "#bf1e2e" }} name={t("Total", "المجموع")} />
                <Line type="monotone" dataKey="lebanon" stroke="#0f2238" strokeWidth={2} dot={{ fill: "#0f2238" }} name={t("Lebanon", "لبنان")} />
                <Line type="monotone" dataKey="occupied" stroke="#0e7490" strokeWidth={2} dot={{ fill: "#0e7490" }} name={t("Occupied Palestine", "فلسطين المحتلة")} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="card p-4 lg:col-span-2">
          <h3 className="mb-3 text-lg font-bold text-[var(--brand-navy)]">{t("Top Target Categories", "أبرز فئات الأهداف")}</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topTargetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" hide />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#bf1e2e" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="card p-4">
          <h3 className="mb-3 text-lg font-bold text-[var(--brand-navy)]">{t("Weapons Distribution", "توزيع الأسلحة")}</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={topWeaponData} dataKey="value" nameKey="name" outerRadius={95} innerRadius={42} label>
                  {topWeaponData.map((_, index) => (
                    <Cell key={index} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="card p-4 lg:col-span-3">
          <h3 className="mb-3 text-lg font-bold text-[var(--brand-navy)]">{t("Top Reported Enemy Losses", "أبرز خسائر العدو المعلنة")}</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topLossData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={170} />
                <Tooltip />
                <Bar dataKey="value" fill="#0f2238" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        <ReportCategoryTable titleEn="Target Categories - Total Count" titleAr="فئات الأهداف - المجموع الكلي" rows={editedTargets} />
        <ReportCategoryTable titleEn="Weapons Used - Total Count" titleAr="الأسلحة المستعملة - المجموع الكلي" rows={editedWeapons} />
        <ReportCategoryTable titleEn="Reported Enemy Losses - Total Count" titleAr="خسائر العدو - المجموع الكلي" rows={editedLosses} />
      </section>
    </main>
  );
}
