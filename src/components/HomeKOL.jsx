import kolBackground from "../assets/images/bg-kol_1.webp";
import kolIllustration from "../assets/images/kol-man.png";

const kolStats = [
  {
    number: "+8.600",
    title: "Community Level KOL",
    range: "1–5K followers",
  },
  {
    number: "+750",
    title: "Micro Level KOL",
    range: "10–100K followers",
  },
  {
    number: "+1.000",
    title: "Nano Level KOL",
    range: "5–10K followers",
  },
  {
    number: "+650",
    title: "Makro & Mega Level KOL",
    range: "100K–1M+ followers",
  },
];

export default function HomeKOL() {
  return (
    <section
      id="kol-management"
      className="relative lg:mt-20 isolate overflow-hidden"
      style={{
        backgroundImage: `url(${kolBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-22 lg:px-18 lg:pt-24">
        {/* heading */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-500 sm:w-12" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
              CREATOR ECOSYSTEM
            </span>

            <span className="h-px w-8 bg-orange-500 sm:w-12" />
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
            KOL Management
          </h2>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-64 w-64 rounded-full bg-black/70 blur-2xl sm:h-80 sm:w-80" />

            <img
              src={kolIllustration}
              alt="Ilustrasi KOL Management"
              loading="lazy"
              className="relative z-10 max-h-[520px] w-full max-w-[480px] object-contain drop-shadow-xl lg:max-w-[520px]"
            />

            <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/80 bg-white/85 px-5 py-3 shadow-lg backdrop-blur-md sm:bottom-8">
              <p className="text-xs font-semibold text-black sm:text-sm">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#F05825]" />
                10.000+ KOL & Influencers
              </p>
            </div>
          </div>

          {/* Information & statistics */}
          <div>
            <div className="mb-9">
              <h3 className="max-w-xl text-2xl font-semibold leading-tight tracking-tight text-orange-500 sm:text-3xl md:text-4xl">
                Nexus Creator Hub
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#5E554D] sm:text-base">
                Connecting local key opinion leaders (KOL) and influencers with
                partners or clients. Nexus has a network of more than 10,000
                KOLs and influencers actively engaging across Instagram, TikTok,
                YouTube, and other platforms.
              </p>

              <a
                href="https://nexuscreatorhub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors duration-300 hover:text-[#F05825] motion-safe:animate-[nexusFloat_2s_ease-in-out_infinite]"
              >
                Explore Nexus Creator Hub
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {kolStats.map((stat, index) => (
                <div
                  key={stat.title}
                  className={`border-[#412001]/15 py-4 ${
                    index < 2 ? "border-b" : ""
                  } ${index % 2 === 0 ? "sm:pr-5" : "sm:pl-5"} ${
                    index >= 2 ? "sm:border-t-0" : ""
                  }`}
                >
                  <p className="text-3xl font-bold tracking-tight text-[#F05825] sm:text-4xl">
                    {stat.number}
                  </p>

                  <h4 className="mt-2 text-sm font-semibold text-black sm:text-base">
                    {stat.title}
                  </h4>

                  <p className="mt-1 text-xs text-[#786D62] sm:text-sm">
                    {stat.range}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
