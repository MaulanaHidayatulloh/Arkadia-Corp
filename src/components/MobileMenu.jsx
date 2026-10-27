import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Business", to: "/business" },
  { label: "Career", to: "/career" },
  { label: "Contact Us", to: "/contact" },
];

const investorLinks = [
  {
    label: "Company Presentation",
    to: "/investor-relations/company-presentation",
  },
  {
    label: "General Meetings",
    to: "/investor-relations/general-meetings",
  },
  {
    label: "The Disclosure of Information",
    to: "/investor-relations/disclosure-of-information",
  },
  {
    label: "Annual Report",
    to: "/investor-relations/annual-report",
  },
  {
    label: "Financial Report",
    to: "/investor-relations/financial-report",
  },
  {
    label: "Prospectus",
    to: "/investor-relations/prospectus",
  },
  {
    label: "Press Release",
    to: "/investor-relations/press-release",
  },
];

function MobileLink({ item, onNavigate }) {
  return (
    <NavLink
      to={item.to}
      end={item.to === "/"}
      onClick={onNavigate}
      className={({ isActive }) =>
        `flex items-center justify-between border-b border-slate-100 py-4 text-sm font-semibold transition-colors ${
          isActive ? "text-orange-600" : "text-slate-700 hover:text-orange-600"
        }`
      }
    >
      {item.label}
      <ArrowUpRight size={16} className="text-slate-400" />
    </NavLink>
  );
}

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [investorOpen, setInvestorOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setInvestorOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:border-orange-300 hover:text-orange-600"
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-slate-100 bg-white shadow-xl">
          <nav className="mx-auto max-h-[calc(100dvh-82px)] max-w-7xl overflow-y-auto px-5 py-4">
            {mainLinks.slice(0, 3).map((item) => (
              <MobileLink key={item.to} item={item} onNavigate={closeMenu} />
            ))}

            <button
              type="button"
              aria-expanded={investorOpen}
              onClick={() => setInvestorOpen((current) => !current)}
              className="flex w-full items-center justify-between border-b border-slate-100 py-4 text-left text-sm font-semibold text-slate-700 transition-colors hover:text-orange-600"
            >
              Investor Relations
              <ChevronDown
                size={17}
                className={`transition-transform duration-200 ${
                  investorOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {investorOpen && (
              <div className="my-2 rounded-xl bg-slate-50 p-2">
                {investorLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-sm transition-colors ${
                        isActive
                          ? "bg-orange-50 font-semibold text-orange-700"
                          : "text-slate-600 hover:bg-orange-50 hover:text-orange-700"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}

            {mainLinks.slice(3).map((item) => (
              <MobileLink key={item.to} item={item} onNavigate={closeMenu} />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
