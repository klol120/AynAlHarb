import { NavLink } from "react-router-dom";

const links = [
  { to: "/admin", label: "Overview" },
  { to: "/admin/summaries", label: "Weekly Summaries" },
  { to: "/admin/stat-blocks", label: "Stat Blocks" },
  { to: "/admin/incidents", label: "Incidents" },
  { to: "/admin/sources", label: "Sources" }
];

export default function AdminSidebar(): JSX.Element {
  return (
    <aside className="card h-fit p-3">
      <h2 className="mb-3 text-sm font-bold uppercase text-slate-500">Admin</h2>
      <nav className="space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/admin"}
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 text-sm font-semibold ${
                isActive ? "bg-[var(--brand-navy)] text-white" : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
