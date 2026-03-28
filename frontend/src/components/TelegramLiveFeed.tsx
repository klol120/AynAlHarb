import { useEffect, useMemo, useState } from "react";
import { api } from "../lib/api";
import type { TelegramFeedItem } from "../types";
import { useLanguage } from "../context/LanguageContext";

function badgeClasses(kind?: string) {
  switch (kind) {
    case "formal_statement":
      return "bg-red-500/15 text-red-300 border-red-500/30";
    case "video_report":
      return "bg-amber-500/15 text-amber-300 border-amber-500/30";
    case "media_only":
      return "bg-slate-500/15 text-slate-300 border-slate-500/30";
    default:
      return "bg-cyan-500/15 text-cyan-300 border-cyan-500/30";
  }
}

function kindLabel(kind?: string) {
  switch (kind) {
    case "formal_statement":
      return "Formal Statement";
    case "video_report":
      return "Video Report";
    case "media_only":
      return "Media Only";
    default:
      return kind || "Raw Feed";
  }
}

export default function TelegramLiveFeed(): JSX.Element {
  const { t, language } = useLanguage();
  const [items, setItems] = useState<TelegramFeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  async function loadFeed(silent = false) {
    try {
      if (!silent) setLoading(true);
      const rows = await api.getTelegramFeed(20);
      setItems(rows);
      setError(null);
      setLastRefresh(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load feed");
    } finally {
      if (!silent) setLoading(false);
    }
  }

  useEffect(() => {
    loadFeed();

    const interval = window.setInterval(() => {
      loadFeed(true);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  const visibleItems = useMemo(() => {
    return items.filter((item) => item.text?.trim() || item.has_media);
  }, [items]);

  return (
    <section className="card mt-6 p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-black text-[var(--brand-navy)]">
            {t("Live Telegram Feed", "البث الحي من تيليغرام")}
          </h2>
          <p className="text-sm text-slate-500">
            {t(
              "Latest monitored front-line source posts",
              "أحدث المنشورات من المصادر الميدانية المراقبة"
            )}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t("Auto-refresh 10s", "تحديث تلقائي كل 10 ثوانٍ")}
          </span>
        </div>
      </div>

      {lastRefresh ? (
        <p className="mb-3 text-xs text-slate-500">
          {t("Last refresh", "آخر تحديث")}:{" "}
          {lastRefresh.toLocaleString(language === "ar" ? "ar-SA" : "en-US")}
        </p>
      ) : null}

      {loading ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
          {t("Loading live feed...", "جارٍ تحميل البث الحي...")}
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      ) : visibleItems.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
          {t("No feed items yet.", "لا توجد عناصر بعد.")}
        </div>
      ) : (
        <div className="grid gap-3">
          {visibleItems.map((item) => (
            <article
              key={`${item.source}-${item.message_id}-${item.date_utc}`}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[var(--brand-navy)] px-2.5 py-1 text-xs font-bold text-white">
                    {item.source || "telegram"}
                  </span>

                  <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${badgeClasses(item.post_kind)}`}>
                    {kindLabel(item.post_kind)}
                  </span>

                  {item.event_type ? (
                    <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700">
                      {item.event_type}
                    </span>
                  ) : null}
                </div>

                <span className="text-xs text-slate-500">
                  {item.date_utc
                    ? new Date(item.date_utc).toLocaleString(language === "ar" ? "ar-SA" : "en-US")
                    : "—"}
                </span>
              </div>

              <p className={`whitespace-pre-wrap text-sm leading-6 text-slate-700 ${language === "ar" ? "rtl-font text-right" : ""}`}>
                {item.text?.trim() || t("[Media post without text]", "[منشور وسائط بدون نص]")}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                {item.location ? <span>📍 {item.location}</span> : null}
                {item.weapon ? <span>🛰 {item.weapon}</span> : null}
                {item.target ? <span>🎯 {item.target}</span> : null}
                {typeof item.views === "number" ? <span>👁 {item.views}</span> : null}
                {typeof item.forwards === "number" ? <span>↗ {item.forwards}</span> : null}
                {typeof item.confidence === "number" ? <span>Confidence {item.confidence}</span> : null}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}