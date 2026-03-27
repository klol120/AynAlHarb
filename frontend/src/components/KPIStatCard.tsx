export default function KPIStatCard({
  title,
  value,
  subtitle
}: {
  title: string;
  value: string | number;
  subtitle?: string;
}): JSX.Element {
  return (
    <article className="card p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9bc7df]">{title}</p>
      <p className="kpi-number mt-2">{value}</p>
      {subtitle ? <p className="mt-1 text-xs text-slate-300">{subtitle}</p> : null}
    </article>
  );
}
