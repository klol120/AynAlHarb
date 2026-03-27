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
import type { SummaryStatBlock, WeeklySummary } from "../types";
import { useLanguage } from "../context/LanguageContext";

const PIE_COLORS = ["#0f2238", "#bf1e2e", "#2d5b88", "#6385a8", "#9eb7cd", "#f06a6a"];

export default function SummaryChartSection({
  currentRows,
  summaries
}: {
  currentRows: SummaryStatBlock[];
  summaries: WeeklySummary[];
}): JSX.Element {
  const { t, language } = useLanguage();

  const lineData = summaries
    .slice()
    .reverse()
    .map((summary) => ({
      week: new Date(summary.weekStart).toLocaleDateString(),
      total: summary.totalIncidents
    }));

  const barData = currentRows.map((row) => ({
    name: language === "ar" ? row.labelAr : row.labelEn,
    value: row.value
  }));

  return (
    <section className="grid gap-4 lg:grid-cols-3">
      <article className="card p-4 lg:col-span-2">
        <h3 className="mb-3 text-lg font-bold text-[var(--brand-navy)]">{t("Category Totals", "إجماليات الفئات")}</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
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
        <h3 className="mb-3 text-lg font-bold text-[var(--brand-navy)]">{t("Distribution", "التوزيع")}</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={barData} dataKey="value" nameKey="name" outerRadius={90} innerRadius={45} label>
                {barData.map((_, index) => (
                  <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="card p-4 lg:col-span-3">
        <h3 className="mb-3 text-lg font-bold text-[var(--brand-navy)]">{t("Weekly Trend", "الاتجاه الأسبوعي")}</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="total" stroke="#0f2238" strokeWidth={3} dot={{ fill: "#bf1e2e" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </article>
    </section>
  );
}
