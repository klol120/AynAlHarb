export type Language = "en" | "ar";

export type SummaryStatus = "DRAFT" | "PUBLISHED";

export interface SummaryStatBlockDto {
  id: number;
  weeklySummaryId: number;
  labelEn: string;
  labelAr: string;
  value: number;
  icon?: string | null;
  displayOrder: number;
  groupName?: string | null;
}

export interface IncidentRecordDto {
  id: number;
  weeklySummaryId: number;
  titleEn: string;
  titleAr: string;
  descriptionEn?: string | null;
  descriptionAr?: string | null;
  recordDate: string;
  count: number;
  category: string;
  locationNameEn?: string | null;
  locationNameAr?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  sourceId?: number | null;
}

export interface SourceDto {
  id: number;
  name: string;
  url?: string | null;
  note?: string | null;
}

export interface WeeklySummaryDto {
  id: number;
  titleEn: string;
  titleAr: string;
  subtitleEn?: string | null;
  subtitleAr?: string | null;
  weekStart: string;
  weekEnd: string;
  totalIncidents: number;
  dailyAverage: number;
  maxRangeKm?: number | null;
  notesEn?: string | null;
  notesAr?: string | null;
  coverImageUrl?: string | null;
  status: SummaryStatus;
  statBlocks?: SummaryStatBlockDto[];
  incidents?: IncidentRecordDto[];
}
