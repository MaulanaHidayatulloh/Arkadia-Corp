import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ArrowUpRight } from "lucide-react";

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

export default function InvestorDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((current) => !current)}
        className={`flex items-center gap-2 py-3 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
          open ? "text-orange=-600" : "text-slate-700 hover:text-orange-600"
        }`}
      >
        Investor Relations
        <ChevronDown
          size={15}
          strokeWidth={1.8}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute right-0 top-full z-50 w-[310px] pt-3 transition-all duration-200 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_18px_50px_-15px_rgba(15,23,42,0.18)]">
          {investorLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `group flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-medium leading-5 transition-colors ${
                  isActive
                    ? "bg-orange-50 text-orange-700"
                    : "text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                }`
              }
            >
              <span>{item.label}</span>
              <ArrowUpRight
                size={15}
                className="shrink-0 text-slate-300 transition-colors group-hover:text-orange-500"
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
