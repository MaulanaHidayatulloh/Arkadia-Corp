import { ChevronRight, House } from "lucide-react";
import { Link } from "react-router-dom";

export default function InvestorHero({ title }) {
  return (
    <section className="relative overflow-hidden  bg-[#F5F0E8]">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -right-20 -top-32 h-[380px] w-[380px] rounded-full border border-black/15 md:border-black/30 sm:h-[500px] sm:w-[500px]" />

      <div className="pointer-events-none absolute -right-10 -top-20 h-[280px] w-[280px] rounded-full border border-black/15 md:border-black/30 sm:h-[400px] sm:w-[400px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 py-16 sm:py-20 lg:px-18 lg:py-24">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-[#8A7C6E] sm:text-sm">
          <Link
            to="/"
            className="flex items-center gap-1.5 transition-colors hover:text-[#F05825]"
          >
            <House size={14} />
            Home
          </Link>

          <ChevronRight size={14} />

          <span>Investor Relations</span>

          <ChevronRight size={14} />

          <span className="font-semibold text-black">{title}</span>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-[850px]">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-[#F05825] sm:text-sm">
            INVESTOR RELATIONS
          </span>

          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-[#412001] sm:text-5xl lg:text-7xl">
            {title}
          </h1>

          <div className="mt-7 h-[5px] w-55 rounded-full bg-gradient-to-r from-[#FBA502] to-[#F05825]" />
        </div>
      </div>
    </section>
  );
}
