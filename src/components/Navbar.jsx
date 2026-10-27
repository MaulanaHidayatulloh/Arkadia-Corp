import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import InvestorDropdown from "./InvestorDropdown";
import MobileMenu from "./MobileMenu";
import arkadiaLogo from "../assets/images/arkadia-logo.webp";

const links = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Business", to: "/business" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_4px_16px_-6px_rgba(15,23,42,0.16)] backdrop-blur-xl">
      <nav className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <NavLink
          to="/"
          aria-label="Arkadia Digital Media - Home"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <img
            src={arkadiaLogo}
            alt="Arkadia Digital Media"
            width="300"
            height="300"
            className="h-[49px] w-auto object-contain"
          />
        </NavLink>

        <div className="hidden items-center gap-6 lg:flex xl:gap-9">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `relative py-3 text-[13px] font-semibold uppercase tracking-wide transition-colors after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:transition-transform after:duration-200 ${
                  isActive
                    ? "text-orange-600 after:scale-x-100 after:bg-orange-500"
                    : "text-slate-700 after:scale-x-0 after:bg-orange-500 hover:text-orange-600 hover:after:scale-x-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <InvestorDropdown />

          <NavLink
            to="/career"
            className={({ isActive }) =>
              `relative py-3 text-[13px] font-semibold uppercase tracking-wide transition-colors after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:transition-transform after:duration-200 ${
                isActive
                  ? "text-orange-600 after:scale-x-100 after:bg-orange-500"
                  : "text-slate-700 after:scale-x-0 after:bg-orange-500 hover:text-orange-600 hover:after:scale-x-100"
              }`
            }
          >
            Career
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `inline-flex items-center gap-2 rounded-full px-5 py-3 text-[12px] font-bold uppercase tracking-wide transition-colors ${
                isActive
                  ? "bg-orange-600 text-white"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`
            }
          >
            Contact Us
            <ArrowUpRight size={15} />
          </NavLink>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
