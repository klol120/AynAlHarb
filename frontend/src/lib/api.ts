import type { IncidentRecord, Source, SummaryStatBlock, WeeklySummary, TelegramFeedItem } from "../types";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

function getToken(): string | null {
  return localStorage.getItem("aah_token");
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers || {});
  headers.set("Content-Type", "application/json");

  const token = getToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "Request failed");
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export const api = {
  login: (email: string, password: string) =>
    request<{ token: string; user: { id: number; email: string } }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    }),

  getSummaries: (includeDraft = false) =>
    request<WeeklySummary[]>(`/weekly-summaries?includeDraft=${includeDraft}`),

  getSummary: (id: number) => request<WeeklySummary>(`/weekly-summaries/${id}`),

  createSummary: (payload: Partial<WeeklySummary>) =>
    request<WeeklySummary>("/weekly-summaries", { method: "POST", body: JSON.stringify(payload) }),

  updateSummary: (id: number, payload: Partial<WeeklySummary>) =>
    request<WeeklySummary>(`/weekly-summaries/${id}`, { method: "PUT", body: JSON.stringify(payload) }),

  deleteSummary: (id: number) => request<void>(`/weekly-summaries/${id}`, { method: "DELETE" }),

  createStatBlock: (payload: Partial<SummaryStatBlock>) =>
    request<SummaryStatBlock>("/stat-blocks", { method: "POST", body: JSON.stringify(payload) }),

  updateStatBlock: (id: number, payload: Partial<SummaryStatBlock>) =>
    request<SummaryStatBlock>(`/stat-blocks/${id}`, { method: "PUT", body: JSON.stringify(payload) }),

  deleteStatBlock: (id: number) => request<void>(`/stat-blocks/${id}`, { method: "DELETE" }),

  createIncident: (payload: Partial<IncidentRecord>) =>
    request<IncidentRecord>("/incidents", { method: "POST", body: JSON.stringify(payload) }),

  updateIncident: (id: number, payload: Partial<IncidentRecord>) =>
    request<IncidentRecord>(`/incidents/${id}`, { method: "PUT", body: JSON.stringify(payload) }),

  deleteIncident: (id: number) => request<void>(`/incidents/${id}`, { method: "DELETE" }),

  getSources: () => request<Source[]>("/sources"),

  createSource: (payload: Partial<Source>) => request<Source>("/sources", { method: "POST", body: JSON.stringify(payload) }),

  updateSource: (id: number, payload: Partial<Source>) =>
    request<Source>(`/sources/${id}`, { method: "PUT", body: JSON.stringify(payload) }),

  deleteSource: (id: number) => request<void>(`/sources/${id}`, { method: "DELETE" }),

  getTelegramFeed: (limit = 20) =>
    request<TelegramFeedItem[]>(`/telegram-feed?limit=${limit}`)
};