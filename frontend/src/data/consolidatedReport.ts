export type SegmentType = "WEEKLY" | "DAILY";

export interface ReportSegment {
  id: number;
  type: SegmentType;
  titleEn: string;
  titleAr: string;
  periodEn: string;
  periodAr: string;
  startDate: string;
  endDate: string;
  totalOperations: number;
  insideLebanon: number;
  insideOccupiedPalestine: number;
  targetingDepthKm: number;
  dailyAverage?: number;
}

export interface ReportCategoryItem {
  labelEn: string;
  labelAr: string;
  value: number;
}

export const consolidatedOverview = {
  periodStart: "2026-03-02",
  periodEnd: "2026-03-26",
  periodLabelEn: "02 March 2026 - 26 March 2026",
  periodLabelAr: "02 آذار 2026 - 26 آذار 2026",
  periodDays: 25,
  totalOperations: 948,
  insideLebanon: 442,
  insideOccupiedPalestine: 506,
  overallDailyAverage: 37.9,
  todaysOperations: 0,
  thisWeeksOperations: 178
} as const;

export const operationSegments: ReportSegment[] = [
  {
    id: 1,
    type: "WEEKLY",
    titleEn: "Weekly Summary 1",
    titleAr: "الحصاد الأسبوعي الأول",
    periodEn: "02/03/2026 - 09/03/2026",
    periodAr: "02/03/2026 - 09/03/2026",
    startDate: "2026-03-02",
    endDate: "2026-03-09",
    totalOperations: 153,
    insideLebanon: 57,
    insideOccupiedPalestine: 96,
    targetingDepthKm: 160,
    dailyAverage: 22
  },
  {
    id: 2,
    type: "WEEKLY",
    titleEn: "Weekly Summary 2",
    titleAr: "الحصاد الأسبوعي الثاني",
    periodEn: "10/03/2026 - 16/03/2026",
    periodAr: "10/03/2026 - 16/03/2026",
    startDate: "2026-03-10",
    endDate: "2026-03-16",
    totalOperations: 222,
    insideLebanon: 90,
    insideOccupiedPalestine: 132,
    targetingDepthKm: 140,
    dailyAverage: 32
  },
  {
    id: 3,
    type: "WEEKLY",
    titleEn: "Weekly Summary 3",
    titleAr: "الحصاد الأسبوعي الثالث",
    periodEn: "17/03/2026 - 23/03/2026",
    periodAr: "17/03/2026 - 23/03/2026",
    startDate: "2026-03-17",
    endDate: "2026-03-23",
    totalOperations: 329,
    insideLebanon: 156,
    insideOccupiedPalestine: 173,
    targetingDepthKm: 47,
    dailyAverage: 47
  },
  {
    id: 4,
    type: "DAILY",
    titleEn: "Daily Summary",
    titleAr: "الحصاد اليومي",
    periodEn: "24/03/2026",
    periodAr: "24/03/2026",
    startDate: "2026-03-24",
    endDate: "2026-03-24",
    totalOperations: 53,
    insideLebanon: 30,
    insideOccupiedPalestine: 23,
    targetingDepthKm: 25
  },
  {
    id: 5,
    type: "DAILY",
    titleEn: "Daily Summary",
    titleAr: "الحصاد اليومي",
    periodEn: "25/03/2026",
    periodAr: "25/03/2026",
    startDate: "2026-03-25",
    endDate: "2026-03-25",
    totalOperations: 95,
    insideLebanon: 61,
    insideOccupiedPalestine: 34,
    targetingDepthKm: 30
  },
  {
    id: 6,
    type: "DAILY",
    titleEn: "Daily Summary",
    titleAr: "الحصاد اليومي",
    periodEn: "26/03/2026",
    periodAr: "26/03/2026",
    startDate: "2026-03-26",
    endDate: "2026-03-26",
    totalOperations: 96,
    insideLebanon: 48,
    insideOccupiedPalestine: 48,
    targetingDepthKm: 120
  }
];

export const targetCategories: ReportCategoryItem[] = [
  { labelEn: "Repelled ground advance attempts", labelAr: "التصدي لعمليات التقدم", value: 381 },
  { labelEn: "Cities and settlements", labelAr: "مدن ومستوطنات", value: 218 },
  { labelEn: "Border sites", labelAr: "مواقع حدودية", value: 101 },
  { labelEn: "Updated border sites", labelAr: "مواقع حدودية مستحدثة", value: 69 },
  { labelEn: "Military bases", labelAr: "قواعد عسكرية", value: 90 },
  { labelEn: "Military barracks", labelAr: "ثكنات عسكرية", value: 28 },
  { labelEn: "Military bases and barracks (combined)", labelAr: "قواعد وثكنات عسكرية (فئة مدمجة)", value: 42 },
  { labelEn: "Military vehicles (target category)", labelAr: "آليات عسكرية كفئة استهداف", value: 22 },
  { labelEn: "Military infrastructure", labelAr: "بنى تحتية عسكرية", value: 6 },
  { labelEn: "Repelled landing/infiltration attempts", labelAr: "التصدي لعملية إنزال/تسلل", value: 2 },
  { labelEn: "Air force targets", labelAr: "سلاح الجو", value: 2 },
  { labelEn: "Aircraft / drones", labelAr: "طائرات ومسيّرات", value: 2 },
  { labelEn: "Drones", labelAr: "مسيّرات", value: 3 },
  { labelEn: "Gliders / aerial craft", labelAr: "محلّقات / وسائط جوية", value: 2 }
];

export const weaponCategories: ReportCategoryItem[] = [
  { labelEn: "Missiles / missile weapons", labelAr: "الصواريخ / الأسلحة الصاروخية", value: 604 },
  { labelEn: '"Missiles"', labelAr: "الصواريخ", value: 245 },
  { labelEn: '"Missile weapons"', labelAr: "الأسلحة الصاروخية", value: 359 },
  { labelEn: "Precision missiles", labelAr: "الصواريخ النوعية", value: 20 },
  { labelEn: "Guided missiles", labelAr: "الصواريخ الموجهة", value: 54 },
  { labelEn: "Guided and direct missiles (combined)", labelAr: "الصواريخ الموجهة والمباشرة (فئة مدمجة)", value: 16 },
  { labelEn: "Direct rockets", labelAr: "الصواريخ المباشرة", value: 15 },
  { labelEn: "Artillery / artillery shells", labelAr: "المدفعية / القذائف المدفعية", value: 73 },
  { labelEn: '"Artillery"', labelAr: "المدفعية", value: 52 },
  { labelEn: '"Artillery shells"', labelAr: "القذائف المدفعية", value: 21 },
  { labelEn: "Air defense weapons", labelAr: "الدفاع الجوي", value: 9 },
  { labelEn: "Suicide drones", labelAr: "المسيّرات الانقضاضية", value: 148 },
  { labelEn: "Suicide gliders", labelAr: "المحلّقات الانقضاضية", value: 16 },
  { labelEn: "Light and medium weapons", labelAr: "الأسلحة الخفيفة والمتوسطة", value: 19 },
  { labelEn: "Engineering means", labelAr: "الهندسة", value: 2 },
  { labelEn: '"Appropriate weapons"', labelAr: "الأسلحة المناسبة", value: 3 }
];

export const enemyLossCategories: ReportCategoryItem[] = [
  { labelEn: "Fortifications / defensive works", labelAr: "دشم وتحصينات", value: 316 },
  { labelEn: "Reconnaissance units", labelAr: "وحدات استطلاعية", value: 139 },
  { labelEn: "Personnel gatherings", labelAr: "تجمع أفراد", value: 80 },
  { labelEn: "Merkava tanks", labelAr: "دبابات ميركافا", value: 95 },
  { labelEn: "Vehicles / military vehicles", labelAr: "آليات / آليات عسكرية", value: 52 },
  { labelEn: "Vehicles", labelAr: "آليات", value: 33 },
  { labelEn: "Military vehicles", labelAr: "آليات عسكرية", value: 19 },
  { labelEn: "Technical equipment", labelAr: "تجهيزات فنية", value: 18 },
  { labelEn: "Artillery positions", labelAr: "مرابض مدفعية", value: 14 },
  { labelEn: "Command centers", labelAr: "مراكز قيادية", value: 9 },
  { labelEn: "Military factories", labelAr: "مصانع عسكرية", value: 8 },
  { labelEn: "Modern technical platforms", labelAr: "منصات تقنية حديثة", value: 7 },
  { labelEn: "Bulldozers", labelAr: "جرافات", value: 3 },
  { labelEn: "Hummers", labelAr: "هامر", value: 2 },
  { labelEn: "Drone aircraft destroyed/damaged", labelAr: "طائرات مسيرة مدمرة/معطلة", value: 2 },
  { labelEn: "Gliders destroyed/damaged", labelAr: "محلّقات مدمرة/معطّلة", value: 2 },
  { labelEn: "Burned/destroyed unit (Harraqa)", labelAr: "حرّاقة (تدمير/إعطاب)", value: 1 },
  { labelEn: "Military bulldozer", labelAr: "جرافة عسكرية", value: 1 },
  { labelEn: "Hermes 450", labelAr: "هرمز 450", value: 1 },
  { labelEn: "Quadcopter", labelAr: "كواد كابتر", value: 1 },
  { labelEn: "Training base", labelAr: "قاعدة تدريب", value: 1 },
  { labelEn: "Radar", labelAr: "رادار", value: 1 }
];

export const executiveSummary = {
  en: "From 02 March 2026 through 26 March 2026, total reported operations reached 948, with a slightly higher concentration inside occupied Palestinian territory (506) compared with Lebanese territory (442). The largest weekly total was 329 operations during 17/03 - 23/03, while the highest daily total was 96 operations on 26/03/2026. The most frequently reported target category was repelled ground advance attempts (381), followed by cities and settlements (218). The most heavily used weapon categories were missiles / missile weapons (604) and suicide drones (148). Enemy losses were led by fortifications (316) and reconnaissance units (139), with all tank losses consolidated under Merkava tanks (95).",
  ar: "من 02 آذار 2026 حتى 26 آذار 2026، بلغ إجمالي العمليات المعلنة 948 عملية، مع تركّز أكبر قليلًا داخل الأراضي الفلسطينية المحتلة (506) مقارنة بالأراضي اللبنانية (442). وسجل أعلى مجموع أسبوعي خلال 17/03 - 23/03 بواقع 329 عملية، بينما كان أعلى مجموع يومي 96 عملية بتاريخ 26/03/2026. أكثر فئات الأهداف تكرارًا كانت التصدي لعمليات التقدم (381) تليها المدن والمستوطنات (218). وعلى مستوى الأسلحة، تصدرت الصواريخ / الأسلحة الصاروخية (604) والمسيّرات الانقضاضية (148). وفي خسائر العدو، برزت الدشم والتحصينات (316) والوحدات الاستطلاعية (139)، مع اعتماد جميع خسائر الدبابات تحت بند دبابات ميركافا (95)."
} as const;
