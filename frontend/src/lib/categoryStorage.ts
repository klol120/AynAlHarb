import type { ReportCategoryItem } from "../data/consolidatedReport";

const CATEGORY_STORAGE_KEY = "aah_category_edits";
const OVERVIEW_STORAGE_KEY = "aah_overview_edits";

interface CategoryEdit {
  type: "targets" | "weapons" | "losses";
  index: number;
  labelEn: string;
  labelAr: string;
  value: number;
}

interface OverviewEdit {
  totalOperations?: number;
  insideLebanon?: number;
  insideOccupiedPalestine?: number;
  overallDailyAverage?: number;
  todaysOperations?: number;
  thisWeeksOperations?: number;
}

export function saveCategoryEdit(edit: CategoryEdit): void {
  const edits = getCategoryEdits();
  const existingIndex = edits.findIndex(
    (e) => e.type === edit.type && e.index === edit.index
  );
  if (existingIndex >= 0) {
    edits[existingIndex] = edit;
  } else {
    edits.push(edit);
  }
  localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(edits));
}

export function getCategoryEdits(): CategoryEdit[] {
  try {
    const stored = localStorage.getItem(CATEGORY_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveOverviewEdit(edits: OverviewEdit): void {
  const existing = getOverviewEdits();
  const merged = { ...existing, ...edits };
  localStorage.setItem(OVERVIEW_STORAGE_KEY, JSON.stringify(merged));
}

export function getOverviewEdits(): OverviewEdit {
  try {
    const stored = localStorage.getItem(OVERVIEW_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function applyCategoryEdits(
  categories: ReportCategoryItem[],
  categoryType: "targets" | "weapons" | "losses"
): ReportCategoryItem[] {
  const edits = getCategoryEdits();
  return categories.map((cat, index) => {
    const edit = edits.find((e) => e.type === categoryType && e.index === index);
    if (edit) {
      return { labelEn: edit.labelEn, labelAr: edit.labelAr, value: edit.value };
    }
    return cat;
  });
}

export function applyOverviewEdits(overview: Record<string, any>): Record<string, any> {
  const edits = getOverviewEdits();
  return {
    ...overview,
    ...edits
  };
}

export function clearAllEdits(): void {
  localStorage.removeItem(CATEGORY_STORAGE_KEY);
  localStorage.removeItem(OVERVIEW_STORAGE_KEY);
}
