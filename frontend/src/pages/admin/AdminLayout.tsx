import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout(): JSX.Element {
  const navigate = useNavigate();

  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      {/* Header */}
      <div className="mb-6 rounded-lg border border-gray-700 bg-gray-900 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Administration Panel</p>
          <h1 className="text-2xl font-black text-[var(--brand-red)] mt-1">Operations Management</h1>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("aah_token");
            navigate("/admin/login");
          }}
          className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-bold text-gray-300 hover:text-white hover:border-gray-500 transition-all"
        >
          Logout
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6 flex flex-wrap gap-2 border-b border-gray-700">
        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            `px-4 py-3 text-sm font-bold transition-all ${
              isActive
                ? "border-b-2 border-[var(--brand-red)] text-[var(--brand-red)]"
                : "text-gray-400 hover:text-gray-300"
            }`
          }
        >
          Categories
        </NavLink>
      </div>

      {/* Content */}
      <section>
        <Outlet />
      </section>
    </main>
  );
}
