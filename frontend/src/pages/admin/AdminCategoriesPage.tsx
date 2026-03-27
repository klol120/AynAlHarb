import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLanguage } from "../../context/LanguageContext";
import { consolidatedOverview, enemyLossCategories, targetCategories, weaponCategories } from "../../data/consolidatedReport";
import { saveCategoryEdit, applyCategoryEdits, saveOverviewEdit, applyOverviewEdits } from "../../lib/categoryStorage";

type CategoryType = "targets" | "weapons" | "losses";

interface EditingCategory {
  original: string;
  type: CategoryType;
  index: number;
  labelEn: string;
  labelAr: string;
  value: string;
}

interface EditingMetric {
  key: string;
  value: string;
}

export default function AdminCategoriesPage(): JSX.Element {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<CategoryType>("targets");
  const [editingCategory, setEditingCategory] = useState<EditingCategory | null>(null);
  const [editingMetric, setEditingMetric] = useState<EditingMetric | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [overview, setOverview] = useState(consolidatedOverview);
  const [editedTargets, setEditedTargets] = useState(targetCategories);
  const [editedWeapons, setEditedWeapons] = useState(weaponCategories);
  const [editedLosses, setEditedLosses] = useState(enemyLossCategories);

  useEffect(() => {
    // Apply any saved edits to overview and categories
    const editedO = applyOverviewEdits(consolidatedOverview);
    setOverview(editedO as any);
    setEditedTargets(applyCategoryEdits(targetCategories, "targets"));
    setEditedWeapons(applyCategoryEdits(weaponCategories, "weapons"));
    setEditedLosses(applyCategoryEdits(enemyLossCategories, "losses"));
  }, []);

  const categories = {
    targets: editedTargets,
    weapons: editedWeapons,
    losses: editedLosses
  };

  const overviewMetrics = [
    { key: "totalOperations", labelEn: "Total Operations", labelAr: "إجمالي العمليات", value: overview.totalOperations },
    { key: "insideLebanon", labelEn: "Inside Lebanon", labelAr: "داخل الأراضي اللبنانية", value: overview.insideLebanon },
    { key: "insideOccupiedPalestine", labelEn: "Inside Occupied Palestine", labelAr: "داخل الأراضي الفلسطينية المحتلة", value: overview.insideOccupiedPalestine },
    { key: "overallDailyAverage", labelEn: "Overall Daily Average", labelAr: "المعدل اليومي العام", value: overview.overallDailyAverage },
    { key: "todaysOperations", labelEn: "Today's Operations", labelAr: "عمليات اليوم", value: overview.todaysOperations || 0 },
    { key: "thisWeeksOperations", labelEn: "This Week's Operations", labelAr: "عمليات هذا الأسبوع", value: overview.thisWeeksOperations || 0 }
  ];

  const tabLabels = {
    targets: { en: "Target Categories", ar: "فئات الأهداف" },
    weapons: { en: "Weapons Used", ar: "الأسلحة المستعملة" },
    losses: { en: "Enemy Losses", ar: "خسائر العدو" }
  };

  const handleEditMetric = (key: string, value: number) => {
    setEditingMetric({ key, value: String(value) });
  };

  const handleSaveMetric = () => {
    if (!editingMetric) return;
    const newValue = Number(editingMetric.value);
    if (Number.isNaN(newValue) || newValue < 0) {
      toast.error("Value must be a number ≥ 0");
      return;
    }
    setOverview(prev => ({ ...prev, [editingMetric.key]: newValue }));
    const updates = { [editingMetric.key]: newValue };
    saveOverviewEdit(updates as any);
    toast.success(`✓ Updated`);
    setEditingMetric(null);
  };

  const handleEditClick = (type: CategoryType, index: number) => {
    const category = categories[type][index];
    if (category) {
      setEditingCategory({
        original: category.labelEn,
        type,
        index,
        labelEn: category.labelEn,
        labelAr: category.labelAr,
        value: String(category.value)
      });
    }
  };

  const handleSaveCategory = () => {
    if (!editingCategory) return;

    const newValue = Number(editingCategory.value);
    if (Number.isNaN(newValue) || newValue < 0) {
      toast.error("Value must be a number ≥ 0");
      return;
    }

    if (!editingCategory.labelEn.trim() || !editingCategory.labelAr.trim()) {
      toast.error("Labels cannot be empty");
      return;
    }

    // Save to localStorage
    saveCategoryEdit({
      type: editingCategory.type,
      index: editingCategory.index,
      labelEn: editingCategory.labelEn,
      labelAr: editingCategory.labelAr,
      value: newValue
    });

    // Update local state
    const newCategories = [...categories[editingCategory.type]];
    newCategories[editingCategory.index] = {
      labelEn: editingCategory.labelEn,
      labelAr: editingCategory.labelAr,
      value: newValue
    };

    if (editingCategory.type === "targets") {
      setEditedTargets(newCategories);
    } else if (editingCategory.type === "weapons") {
      setEditedWeapons(newCategories);
    } else {
      setEditedLosses(newCategories);
    }

    toast.success(`✓ Updated: ${editingCategory.labelEn} → ${newValue}`);
    setEditingCategory(null);
  };

  const currentCategories = categories[activeTab];
  const filteredCategories = currentCategories.filter(
    (cat) =>
      cat.labelEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.labelAr.includes(searchTerm)
  );

  return (
    <section className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-black text-[var(--brand-red)]">{t("Unified Data Editor", "محرر البيانات الموحد")}</h1>
        <p className="mt-2 text-sm text-gray-400">{t("Edit all numbers in one place - overview metrics and all categories", "عدّل جميع الأرقام في مكان واحد - المقاييس العامة وجميع الفئات")}</p>
      </div>

      {/* Overview Metrics Section */}
      <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
        <h2 className="mb-4 text-lg font-black text-[var(--brand-red)]">{t("Overview Metrics", "المقاييس العامة")}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {overviewMetrics.map((metric) => (
            <div
              key={metric.key}
              onClick={() => handleEditMetric(metric.key, metric.value)}
              className="rounded-lg border border-gray-600 bg-gray-900 p-4 cursor-pointer hover:border-[var(--brand-red)]/50 hover:bg-gray-900/80 transition-all"
            >
              <p className="text-xs font-bold uppercase text-gray-400">{t(metric.labelEn, metric.labelAr)}</p>
              <p className="mt-2 text-3xl font-black text-[var(--brand-red)]">{metric.value.toLocaleString()}</p>
              <p className="mt-1 text-xs text-gray-500">{t("Click to edit", "انقر للتحرير")}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
        <h2 className="mb-4 text-lg font-black text-[var(--brand-red)]">{t("Category Editor", "محرر الفئات")}</h2>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-gray-600 mb-4">
          {(Object.entries(tabLabels) as [CategoryType, { en: string; ar: string }][]).map(([type, label]) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-4 py-3 font-semibold transition-all ${
                activeTab === type
                  ? "border-b-2 border-[var(--brand-red)] text-[var(--brand-red)]"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {t(label.en, label.ar)}
              <span className="ml-2 text-xs font-bold">({currentCategories.length})</span>
            </button>
          ))}
        </div>

        {/* Search Box */}
        <input
          type="text"
          placeholder={t("Search categories...", "ابحث عن الفئات...")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-4 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
        />

        {/* Categories List */}
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {filteredCategories.length === 0 ? (
            <p className="text-center text-gray-500 py-8">{t("No categories found", "لم يتم العثور على فئات")}</p>
          ) : (
            filteredCategories.map((category, displayIndex) => {
              const actualIndex = currentCategories.indexOf(category);
              return (
                <div
                  key={`${category.labelEn}-${actualIndex}`}
                  className="flex items-center justify-between gap-4 rounded-lg border border-gray-700 bg-gray-900 p-4 hover:border-[var(--brand-red)]/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-white">{category.labelEn}</p>
                    <p className="text-xs text-gray-400 mt-1">{category.labelAr}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-2xl font-black text-[var(--brand-red)]">{category.value.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{t("count", "عدد")}</p>
                    </div>

                    <button
                      onClick={() => handleEditClick(activeTab, actualIndex)}
                      className="rounded-lg bg-[var(--brand-red)] px-4 py-2 text-sm font-bold text-white hover:brightness-110 transition-all"
                    >
                      {t("Edit", "تعديل")}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Metric Edit Modal */}
      {editingMetric && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-sm rounded-lg bg-gray-900 border border-gray-700 p-6 shadow-2xl">
            <h2 className="mb-4 text-lg font-black text-[var(--brand-red)]">{t("Edit Metric", "تحرير المقياس")}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  {overviewMetrics.find(m => m.key === editingMetric.key)?.labelEn}
                </label>
                <input
                  type="number"
                  min="0"
                  value={editingMetric.value}
                  onChange={(e) => setEditingMetric({ ...editingMetric, value: e.target.value })}
                  className="w-full rounded-lg bg-gray-800 px-3 py-2 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
                  autoFocus
                />
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleSaveMetric}
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

      {/* Category Edit Modal */}
      {editingCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-lg bg-gray-900 border border-gray-700 p-6 shadow-2xl">
            <h2 className="mb-4 text-xl font-black text-[var(--brand-red)]">{t("Edit Category", "تعديل الفئة")}</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2">English Label</label>
                <input
                  type="text"
                  value={editingCategory.labelEn}
                  onChange={(e) => setEditingCategory({ ...editingCategory, labelEn: e.target.value })}
                  className="w-full rounded-lg bg-gray-800 px-3 py-2 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Arabic Label</label>
                <input
                  type="text"
                  value={editingCategory.labelAr}
                  onChange={(e) => setEditingCategory({ ...editingCategory, labelAr: e.target.value })}
                  className="w-full rounded-lg bg-gray-800 px-3 py-2 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] text-right"
                  dir="rtl"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Count Value</label>
                <input
                  type="number"
                  min={0}
                  value={editingCategory.value}
                  onChange={(e) => setEditingCategory({ ...editingCategory, value: e.target.value })}
                  className="w-full rounded-lg bg-gray-800 px-3 py-2 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
                  autoFocus
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleSaveCategory}
                className="flex-1 rounded-lg bg-[var(--brand-red)] px-4 py-3 font-bold text-white hover:brightness-110 transition-all"
              >
                {t("Save Changes", "حفظ التغييرات")}
              </button>
              <button
                onClick={() => setEditingCategory(null)}
                className="flex-1 rounded-lg border border-gray-600 px-4 py-3 font-bold text-gray-300 hover:text-white transition-all"
              >
                {t("Cancel", "إلغاء")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
