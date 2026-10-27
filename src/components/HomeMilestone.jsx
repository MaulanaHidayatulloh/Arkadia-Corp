import { useState } from "react";
import { ArrowDownRight, History } from "lucide-react";
import arkadiaLogo from "../assets/images/arkadia-logo.webp";
import mataMataLogo from "../assets/images/matamata-logo.webp";
import hiMedikLogo from "../assets/images/himedik-logo.webp";
import bolaTimesLogo from "../assets/images/bolatimes-logo.webp";
import guidekuLogo from "../assets/images/guideku-logo.webp";
import hiTeknoLogo from "../assets/images/hitekno-logo.webp";
import mobiMotoLogo from "../assets/images/mobimoto-logo.webp";
import dewiKuLogo from "../assets/images/dewiku-logo.webp";
import ipoImage from "../assets/images/ipo-arkadia.webp";
import suaraJogjaLogo from "../assets/images/suarajogja.webp";
import suaraJatimLogo from "../assets/images/suarajatim.webp";
import suaraJatengLogo from "../assets/images/suarajateng.webp";
import suaraJabarLogo from "../assets/images/suarajabar.webp";
import suaraBantenLogo from "../assets/images/suarabanten.webp";
import arkadiaMemberLogo from "../assets/images/arkadiamember.webp";
import serbaAdaLogo from "../assets/images/serbaada.webp";
import suaraLogo from "../assets/images/logo-suara.webp";
import iklanDisiniLogo from "../assets/images/logo-iklandisini.webp";
import suaraJakartaLogo from "../assets/images/logo-jakarta.webp";
import suaraSumutLogo from "../assets/images/logo-sumut.webp";
import suaraSulselLogo from "../assets/images/logo-sulsel.webp";
import suaraKalbarLogo from "../assets/images/logo-kalbar.webp";
import suaraSumselLogo from "../assets/images/logo-sumsel.webp";
import suaraBatamLogo from "../assets/images/logo-batam.webp";
import suaraBaliLogo from "../assets/images/logo-bali.webp";
import suaraRiauLogo from "../assets/images/logo-riau.webp";
import suaraKaltimLogo from "../assets/images/logo-kaltim.webp";
import suaraSumbarLogo from "../assets/images/logo-sumbar.webp";
import suaraLampungLogo from "../assets/images/logo-lampung.webp";
import suaraBogorLogo from "../assets/images/logo-bogor.webp";
import suaraMalangLogo from "../assets/images/logo-malang.webp";
import suaraBekaciLogo from "../assets/images/logo-bekaci.webp";
import suaraSurakartaLogo from "../assets/images/logo-surakarta.webp";
import beritaHitsLogo from "../assets/images/logo-beritahits.webp";
import yourSayLogo from "../assets/images/logo-yoursayid.webp";
import theIndonesiaLogo from "../assets/images/logo-theindonesiaid.webp";
import mitraSuaraLogo from "../assets/images/logo-mitrasuara.webp";
import clickMovLogo from "../assets/images/logo-clickmov.webp";
import nexusLogo from "../assets/images/logo-nexus.webp";
import localMediaLogo from "../assets/images/logo-localmedia.webp";
import suaraHijauLogo from "../assets/images/logo-suarahijau.webp";

const milestones = [
  {
    year: 2014,
    events: [
      {
        date: "March, 2014",
        title: "Arkadia Digital Media Launched",
        description:
          "Arkadia officially launched its first digital media platform, marking the beginning of its journey in the online publishing landscape and laying the foundation for its growth as a digital-first media company.",
        images: [
          {
            src: arkadiaLogo,
            alt: "Arkadia Digital Media",
          },
        ],
      },
      {
        date: "August, 2014",
        title: "Suara.com Reached 40 Million Monthly Page Views",
        description:
          "Suara.com reached 40 million monthly page views, marking an important milestone in its growth as a digital media platform.",
      },
    ],
  },
  {
    year: 2017,
    events: [
      {
        date: "March, 2017",
        title: "Suara.com Reached 80 Million Monthly Page Views",
        description:
          "Suara.com has officially reached a milestone of 80 million monthly page views, cementing its position as a leading digital news platform.",
      },
    ],
  },
  {
    year: 2018,
    events: [
      {
        date: "March to July, 2018",
        title: "Arkadia Launched 7 New Digital Media Platforms",
        description:
          "Arkadia launched seven new digital media platforms, expanding its digital media portfolio.",
        images: [
          { src: mataMataLogo, alt: "MataMata.com" },
          { src: hiMedikLogo, alt: "HiMedik.com" },
          { src: bolaTimesLogo, alt: "BolaTimes.com" },
          { src: guidekuLogo, alt: "Guideku.com" },
          { src: hiTeknoLogo, alt: "HiTekno.com" },
          { src: mobiMotoLogo, alt: "MobiMoto.com" },
          { src: dewiKuLogo, alt: "Dewiku.com" },
        ],
      },
      {
        date: "September, 2018",
        title: "PT Arkadia Digital Media Tbk IPO",
        description:
          "PT Arkadia Digital Media Tbk conducted its initial public offering (IPO).",
        images: [
          {
            src: ipoImage,
            alt: "Arkadia Digital Media IPO",
          },
        ],
      },
    ],
  },
  {
    year: 2019,
    events: [
      {
        date: "March, 2019",
        title: "Arkadia Launched 5 SUARA Regional",
        description:
          "Arkadia Launches 5 SUARA Regional Channels to Bring Local Stories Closer to Communities.",
        images: [
          { src: suaraJogjaLogo, alt: "suaraJogja" },
          { src: suaraJatimLogo, alt: "suaraJatim" },
          { src: suaraJatengLogo, alt: "suaraJateng" },
          { src: suaraJabarLogo, alt: "suaraJabar" },
          { src: suaraBantenLogo, alt: "suaraBanten" },
        ],
      },
      {
        date: "March, 2019",
        title: "Arkadia Launched Membership System",
        description:
          "Arkadia Launches Membership System to Reward and Connect Its Community.",
        images: [
          { src: arkadiaMemberLogo, alt: "arkadiaMember" },
          { src: serbaAdaLogo, alt: "serbaAda" },
        ],
      },
    ],
  },
  {
    year: 2020,
    events: [
      {
        date: "March, 2020",
        title: "Arkadia Launched New Suara.com Logo and Iklandisini.com",
        description:
          "Arkadia Launches New Suara.com Logo and Iklandisini.com to Elevate Its Brand and Advertising Services.",
        images: [
          { src: suaraLogo, alt: "suaraLogo" },
          { src: iklanDisiniLogo, alt: "iklanDisini" },
        ],
      },
      {
        date: "October, 2020",
        title: "Arkadia Launched More SUARA Regional",
        description:
          "Arkadia Launches More SUARA Regional Channels to Expand Local Coverage Across Indonesia.",
        images: [
          { src: suaraJakartaLogo, alt: "suaraJakarta" },
          { src: suaraSumutLogo, alt: "suaraSumut" },
          { src: suaraSulselLogo, alt: "suaraSulsel" },
          { src: suaraKalbarLogo, alt: "suaraKalbar" },
          { src: suaraSumselLogo, alt: "suaraSumsel" },
          { src: suaraBatamLogo, alt: "suaraBatam" },
          { src: suaraBaliLogo, alt: "suaraBali" },
          { src: suaraRiauLogo, alt: "suaraRiau" },
          { src: suaraKaltimLogo, alt: "suaraKaltim" },
          { src: suaraSumbarLogo, alt: "suaraSumbar" },
          { src: suaraLampungLogo, alt: "suaraLampung" },
          { src: suaraBogorLogo, alt: "suaraBogor" },
          { src: suaraMalangLogo, alt: "suaraMalang" },
          { src: suaraBekaciLogo, alt: "suaraBekaci" },
          { src: suaraSurakartaLogo, alt: "suaraSurakarta" },
        ],
      },
    ],
  },
  {
    year: 2021,
    events: [
      {
        date: "March, 2021",
        title:
          "Launched viral content portal BeritaHits.id & system development of Yoursay.id",
        description:
          "Arkadia Launches Viral Content Portal BeritaHits.id and Develops Yoursay.id System to Strengthen Its Digital Ecosystem.",
        images: [
          { src: beritaHitsLogo, alt: "beritaHits" },
          { src: yourSayLogo, alt: "yourSay" },
        ],
      },
      {
        date: "November, 2021",
        title: "Published English portal TheIndonesia.id",
        description:
          "Arkadia Publishes English Portal TheIndonesia.id to Bring Indonesian Stories to a Global Audience.",
        images: [{ src: theIndonesiaLogo, alt: "theIndonesia" }],
      },
    ],
  },
  {
    year: 2022,
    events: [
      {
        date: "March, 2022",
        title: "Launching of specific video platform Clickmov",
        description:
          "Arkadia Launches Clickmov, a Dedicated Video Platform for Engaging Digital Content.",
        images: [{ src: clickMovLogo, alt: "clickMov" }],
      },
      {
        date: "June, 2022",
        title: "Launching of sub-domain partners program",
        description:
          "Arkadia Publishes English Portal TheIndonesia.id to Bring Indonesian Stories to a Global Audience.",
        images: [{ src: mitraSuaraLogo, alt: "mitraSuara" }],
      },
    ],
  },
  {
    year: 2023,
    events: [
      {
        date: "March, 2023",
        title: "Launching of Nexus Creator Hub platform",
        description:
          "Arkadia Launches Nexus Creator Hub Platform to Empower and Connect Digital Creators.",
        images: [{ src: nexusLogo, alt: "nexus" }],
      },
    ],
  },
  {
    year: 2024,
    events: [
      {
        date: "March, 2024",
        title: "Launching of Local Media Community with the IMS",
        description:
          "Arkadia Launches Local Media Community with IMS to Strengthen Collaboration Among Regional Publishers.",
        images: [{ src: localMediaLogo, alt: "lcoalMedia" }],
      },
    ],
  },
  {
    year: 2025,
    events: [
      {
        date: "March, 2025",
        title: "Launching of Suara Hijau and Launching of Green Media Network",
        description:
          "Arkadia Launches Suara Hijau and Green Media Network to Promote Environmental Awareness.",
        images: [{ src: suaraHijauLogo, alt: "suaraHijau" }],
      },
    ],
  },
];

function MilestoneImages({ images, title }) {
  if (!images?.length) return null;

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-5">
      {images.map((image) => (
        <div
          key={image.alt}
          className="flex h-[80px] w-[110px] shrink-0 items-center justify-center p-2 sm:h-[85px] sm:w-[125px]"
        >
          <img
            src={image.src}
            alt={image.alt || title}
            loading="lazy"
            className="block h-auto max-h-[65px] w-auto max-w-[85px] object-contain sm:max-h-[70px] sm:max-w-[95px]"
          />
        </div>
      ))}
    </div>
  );
}

export default function HomeMilestone() {
  const [activeYear, setActiveYear] = useState(2014);

  const selectedMilestone = milestones.find(
    (milestone) => milestone.year === activeYear,
  );

  return (
    <section
      id="our-milestone"
      className="scroll-mt-24 overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section heading */}
        <div className="mb-10 sm:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
              Our Journey
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Milestone
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Discover the milestones that have shaped Arkadia&apos;s journey
            through the years.
          </p>
        </div>

        {/* Timeline year navigation */}
        <div className="relative mb-9">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-slate-200 sm:block" />

          <div
            className="relative flex gap-3 overflow-x-auto pb-4 pt-1 sm:justify-between sm:gap-2"
            aria-label="Choose milestone year"
          >
            {milestones.map((milestone) => {
              const isActive = activeYear === milestone.year;

              return (
                <button
                  key={milestone.year}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveYear(milestone.year)}
                  className="group flex min-w-[66px] shrink-0 flex-col items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-4"
                >
                  <span
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "scale-110 border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                        : "border-slate-200 bg-white text-slate-500 group-hover:border-orange-300 group-hover:text-orange-600"
                    }`}
                  >
                    {String(milestone.year).slice(-2)}
                  </span>

                  <span
                    className={`text-xs font-semibold transition-colors ${
                      isActive
                        ? "text-orange-600"
                        : "text-slate-500 group-hover:text-slate-900"
                    }`}
                  >
                    {milestone.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Events for the selected year */}
        {selectedMilestone.events.length > 0 ? (
          <div className="space-y-5">
            {selectedMilestone.events.map((event, index) => (
              <article
                key={`${event.date}-${event.title}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-orange-200 hover:shadow-[0_12px_35px_-20px_rgba(15,23,42,0.25)] sm:p-7 lg:p-8"
              >
                {/* Event date and title */}
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    <ArrowDownRight size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-600">
                      {event.date}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold leading-snug text-slate-900 sm:text-xl lg:text-2xl">
                      {event.title}
                    </h3>

                    {event.description && (
                      <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500 sm:text-base">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* One image or multiple logos */}
                <MilestoneImages images={event.images} title={event.title} />
              </article>
            ))}
          </div>
        ) : (
          /* Empty state for years without event data */
          <div className="flex min-h-[250px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50/70 px-6 py-12 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
              <History size={25} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-800">
              {activeYear} at Arkadia
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Milestone details for this year have not been added yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
