import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  consolidatedOverview,
  enemyLossCategories,
  weaponCategories
} from "../../data/consolidatedReport";
import { applyCategoryEdits, applyOverviewEdits, saveOverviewEdit } from "../../lib/categoryStorage";

interface EditableMetric {
  key: string;
  labelEn: string;
  labelAr: string;
  value: number;
}

export default function HomePage(): JSX.Element {
  const { t, language } = useLanguage();
  const [editedLosses, setEditedLosses] = useState(enemyLossCategories);
  const [editedWeapons, setEditedWeapons] = useState(weaponCategories);
  const [overview, setOverview] = useState(consolidatedOverview);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [editingMetric, setEditingMetric] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState<string>("");

  useEffect(() => {
    // Apply any saved edits
    const editedL = applyCategoryEdits(enemyLossCategories, "losses");
    setEditedLosses(editedL);
    const editedW = applyCategoryEdits(weaponCategories, "weapons");
    setEditedWeapons(editedW);
    const editedO = applyOverviewEdits(consolidatedOverview);
    setOverview(editedO as any);
    setLastUpdated(new Date());
  }, []);

  // Get metrics from weapons
  const missilesUsed = editedWeapons.find(w => w.labelEn === "Missiles / missile weapons")?.value || 0;
  const dronesUsed = editedWeapons.find(w => w.labelEn === "Suicide drones")?.value || 0;
  const airDefenseUsed = editedWeapons.find(w => w.labelEn === "Air defense weapons")?.value || 0;
  const dronesDestroyed = editedLosses.find(l => l.labelEn === "Drone aircraft destroyed/damaged")?.value || 0;

  // Get top 5 enemy losses
  const topEnemyLosses = editedLosses.slice(0, 5);

  // Calculate war duration
  const warStart = new Date("2026-03-02T00:45:00");
  const today = new Date();
  const daysElapsed = Math.floor((today.getTime() - warStart.getTime()) / (1000 * 60 * 60 * 24));

  // Metrics for editing
  const editableMetrics: EditableMetric[] = [
    { key: "totalOperations", labelEn: "Total Operations", labelAr: "إجمالي العمليات", value: overview.totalOperations },
    { key: "insideLebanon", labelEn: "Inside Lebanon", labelAr: "داخل الأراضي اللبنانية", value: overview.insideLebanon },
    { key: "insideOccupiedPalestine", labelEn: "Inside Occupied Palestine", labelAr: "داخل الأراضي الفلسطينية المحتلة", value: overview.insideOccupiedPalestine },
    { key: "todaysOperations", labelEn: "Today's Operations", labelAr: "عمليات اليوم", value: overview.todaysOperations || 0 },
    { key: "thisWeeksOperations", labelEn: "This Week's Operations", labelAr: "عمليات هذا الأسبوع", value: overview.thisWeeksOperations || 0 }
  ];

  const handleMetricEdit = (key: string, value: number) => {
    setEditingMetric(key);
    setEditingValue(String(value));
  };

  const handleMetricSave = (key: string) => {
    const newValue = Number(editingValue);
    if (!Number.isNaN(newValue) && newValue >= 0) {
      setOverview(prev => ({ ...prev, [key]: newValue }));
      const updates = { [key]: newValue };
      saveOverviewEdit(updates as any);
      setEditingMetric(null);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <section className="hero-shell overflow-hidden p-6 md:p-8">
        <div className="grid items-start gap-8 md:grid-cols-[1fr_280px]">
          <div>
            <p className="soft-pill inline-flex px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-cream)]/90">
              {t("Consolidated Military Operations Report", "التقرير الموحد للعمليات العسكرية")}
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              {t("Overall + Daily War Overview", "نظرة شاملة ويومية على الحرب")}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-[var(--brand-cream)]/85 md:text-base">
              {t("Period covered", "الفترة المشمولة")}: {t(consolidatedOverview.periodLabelEn, consolidatedOverview.periodLabelAr)}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/analytics" className="rounded-xl bg-[var(--brand-red)] px-4 py-2 text-sm font-bold text-[var(--brand-cream)] hover:brightness-105">
                {t("Full Analytics & Categories", "التحليلات الكاملة والفئات")}
              </Link>
              <Link to="/admin/categories" className="rounded-xl border border-[rgba(255,107,53,0.35)] px-4 py-2 text-sm font-bold text-[var(--brand-cream)] hover:bg-white/10">
                {t("Edit All Data", "تحرير جميع البيانات")}
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[rgba(239,232,217,0.22)] bg-black/20 p-4 backdrop-blur-sm">
            <img
              src="/official-logo.png"
              alt="Ayn Al Harb official logo"
              className="mx-auto h-32 w-32 rounded-full border border-[rgba(239,232,217,0.4)] bg-white object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <p className="mt-3 text-center text-xs text-[var(--brand-cream)]/80">
              {t("Official identity mark", "الهوية الرسمية")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Metrics Grid - Editable */}
      <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {editableMetrics.map((metric) => (
          <div key={metric.key} className="mega-metric-card cursor-pointer group relative hover:opacity-90 transition-opacity" onClick={() => handleMetricEdit(metric.key, metric.value)}>
            <p className="mega-metric-label">{t(metric.labelEn, metric.labelAr)}</p>
            <p className="mega-metric-value">{metric.value.toLocaleString()}</p>
            <p className="mega-metric-foot text-xs text-[var(--brand-cream)]/60">{t("Click to edit", "انقر للتحرير")}</p>
          </div>
        ))}
      </section>

      {/* Weapons & Equipment Section */}
      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        <article className="rounded-lg border border-[var(--brand-red)]/30 bg-gradient-to-br from-[var(--brand-red)]/10 to-transparent p-6">
          <p className="text-xs font-bold uppercase text-[var(--brand-red)] tracking-wider">{t("Weapons Used", "الأسلحة المستخدمة")}</p>
          <p className="mt-3 text-4xl font-black text-[var(--brand-red)]">{missilesUsed.toLocaleString()}</p>
          <p className="mt-1 text-sm text-slate-400">{t("Missiles", "الصواريخ")}</p>
        </article>

        <article className="rounded-lg border border-[var(--brand-red)]/30 bg-gradient-to-br from-[var(--brand-red)]/10 to-transparent p-6">
          <p className="text-xs font-bold uppercase text-[var(--brand-red)] tracking-wider">{t("Drones Deployed", "المسيرات المنتشرة")}</p>
          <p className="mt-3 text-4xl font-black text-[var(--brand-red)]">{dronesUsed.toLocaleString()}</p>
          <p className="mt-1 text-sm text-slate-400">{t("Suicide Drones", "المسيرات الانقضاضية")}</p>
        </article>

        <article className="rounded-lg border border-[var(--brand-red)]/30 bg-gradient-to-br from-[var(--brand-red)]/10 to-transparent p-6">
          <p className="text-xs font-bold uppercase text-[var(--brand-red)] tracking-wider">{t("Air Defense Used", "الدفاع الجوي المستخدم")}</p>
          <p className="mt-3 text-4xl font-black text-[var(--brand-red)]">{airDefenseUsed.toLocaleString()}</p>
          <p className="mt-1 text-sm text-slate-400">{t("Air Defense Weapons", "أسلحة الدفاع الجوي")}</p>
        </article>
      </section>

      {/* Top Enemy Losses Section */}
      <section className="card mt-6 p-4">
        <h2 className="mb-4 text-lg font-black text-[var(--brand-navy)]">
          {t("Top Reported Enemy Losses", "أبرز خسائر العدو المعلنة")}
        </h2>
        <div className="mb-4 rounded-lg border border-[var(--brand-red)]/35 bg-slate-900 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t("Drones Destroyed", "المسيرات المدمرة")}</p>
          <p className="mt-1 text-2xl font-black text-[var(--brand-red)]">{dronesDestroyed.toLocaleString()}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {topEnemyLosses.map((loss) => (
            <article key={`${loss.labelEn}-${loss.value}`} className="rounded-lg border border-slate-600/40 bg-gradient-to-br from-slate-900 to-slate-800 p-4 hover:border-[var(--brand-red)]/60 transition-colors">
              <p className={`text-xs font-semibold text-slate-300 ${language === "ar" ? "rtl-font" : ""}`}>
                {language === "ar" ? loss.labelAr : loss.labelEn}
              </p>
              <p className="mt-2 text-3xl font-black text-[var(--brand-red)]">{loss.value.toLocaleString()}</p>
            </article>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          {t("View all categories in", "اعرض جميع الفئات في")} <Link to="/analytics" className="font-semibold text-[var(--brand-red)] hover:underline">{t("Full Analytics", "التحليلات الكاملة")}</Link>
        </p>
      </section>

      {/* War Duration Section */}
      <section className="card mt-6 p-4">
        <h2 className="mb-3 text-lg font-black text-[var(--brand-navy)]">
          {t("War Duration", "مدة الحرب")}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold text-slate-600 uppercase">{t("War Started", "بدء الحرب")}</p>
            <p className="mt-1 text-lg font-bold text-[var(--brand-red)]">
              {t("March 2, 2026 • 12:45 AM", "2 آذار 2026 • 12:45 ص")}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-600 uppercase">{t("Days Elapsed", "الأيام المنقضية")}</p>
            <p className="mt-1 text-lg font-bold text-[var(--brand-red)]">
              {daysElapsed} {t("days", "أيام")}
            </p>
          </div>
        </div>
      </section>

      <section className="card mt-6 p-4 text-center">
        <p className="text-xs text-slate-500">
          {t("Last Updated", "آخر تحديث")}: {lastUpdated?.toLocaleString(language === "ar" ? "ar-SA" : "en-US")}
        </p>
      </section>

      {/* Inline Edit Modal */}
      {editingMetric && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-sm rounded-lg bg-gray-900 border border-gray-700 p-6 shadow-2xl">
            <h2 className="mb-4 text-lg font-black text-[var(--brand-red)]">
              {t("Edit Metric", "تحرير المقياس")}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  {editableMetrics.find(m => m.key === editingMetric)?.labelEn}
                </label>
                <input
                  type="number"
                  min="0"
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                  className="w-full rounded-lg bg-gray-800 px-3 py-2 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
                  autoFocus
                />
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => handleMetricSave(editingMetric)}
                className="flex-1 rounded-lg bg-[var(--brand-red)] px-4 py-2 font-bold text-white hover:brightness-110 transition-all"
              >
                {t("Save", "حفظ")}
              </button>
              <button
                onClick={() => setEditingMetric(null)}
                className="flex-1 rounded-lg border border-gray-600 px-4 py-2 font-bold text-gray-300 hover:text-white transition-all"
              >
                {t("Cancel", "إلغاء")}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
