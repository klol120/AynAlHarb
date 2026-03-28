export type Language = "en" | "ar";

export type SummaryStatus = "DRAFT" | "PUBLISHED";

export interface SummaryStatBlock {
  id: number;
  weeklySummaryId: number;
  labelEn: string;
  labelAr: string;
  value: number;
  icon?: string | null;
  displayOrder: number;
  groupName?: string | null;
}

export interface Source {
  id: number;
  name: string;
  url?: string | null;
  note?: string | null;
}

export interface IncidentRecord {
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
  source?: Source | null;
}

export interface TelegramFeedItem {
  source?: string;
  chat_id?: number | string;
  message_id?: number;
  date_utc?: string;
  text?: string;
  sender_id?: number | string | null;
  views?: number | null;
  forwards?: number | null;
  has_media?: boolean;
  collected_at_utc?: string;
  mode?: string;
  post_kind?: string;
  event_type?: string;
  weapon?: string | null;
  target?: string | null;
  location?: string | null;
  confidence?: number | null;
  raw_text?: string;
}

export interface WeeklySummary {
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
  statBlocks: SummaryStatBlock[];
  incidents?: IncidentRecord[];
}
