import { ArrowUpRight } from "lucide-react";
import joinOurTeamImage from "../assets/images/joinourteam.webp";

export default function JoinOurTeam() {
  return (
    <section className="group relative isolate overflow-hidden  py-22 text-[#F5F0E8] sm:py-24 lg:py-26">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${joinOurTeamImage})` }}
      />

      <div className="mx-auto max-w-[100%] px-6 sm:px-10 lg:px-18">
        <div className="max-w-5xl">
          <h2 className="font-serif text-white text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl lg:text-[110px]">
            Let's Create
            <br />
            <span className="italic">What's Next</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-8 text-white sm:text-base lg:text-lg">
            Great ideas begin with great people. Bring your perspective,
            creativity, and ambition to a place where possibilities keep
            growing.
          </p>

          <a
            href="#career-opportunities"
            className="group/link mt-10 inline-flex items-center gap-5 border-b-2 border-white pb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:text-orange-300 hover:border-orange-300"
          >
            Explore Opportunities
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-300 group-hover/link:rotate-45 group-hover:bg-orange-300">
              <ArrowUpRight size={20} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
