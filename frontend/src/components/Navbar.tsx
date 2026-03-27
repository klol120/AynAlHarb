import { Link, NavLink } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

const navItems = [
  { to: "/", en: "War Overview", ar: "النظرة الشاملة" },
  { to: "/analytics", en: "Operations Analytics", ar: "تحليلات العمليات" },
  { to: "/about", en: "Methodology", ar: "المنهجية" }
];

export default function Navbar(): JSX.Element {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-20 border-b border-[rgba(255,107,53,0.22)] bg-[rgba(9,17,33,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/official-logo.png"
            alt="Ayn Al Harb official logo"
            className="h-11 w-11 rounded-full border border-[rgba(255,107,53,0.45)] bg-white object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <span className="text-lg font-black text-[#e8f5fb]">Ayn Al Harb | عين الحرب</span>
        </Link>

        <nav className="flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold ${
                  isActive ? "bg-[rgba(255,107,53,0.22)] text-[#ffbe8b]" : "text-slate-200 hover:bg-[rgba(255,107,53,0.12)]"
                }`
              }
            >
              {t(item.en, item.ar)}
            </NavLink>
          ))}
          <LanguageToggle />
          <Link to="/admin/login" className="rounded-lg bg-[var(--brand-red)] px-3 py-2 text-sm font-semibold text-[var(--brand-cream)] shadow-[0_8px_22px_rgba(255,107,53,0.35)]">
            {t("Admin", "الإدارة")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
