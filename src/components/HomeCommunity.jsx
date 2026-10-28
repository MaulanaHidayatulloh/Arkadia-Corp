import localMediaLogo from "../assets/images/community1.webp";
import yourSayLogo from "../assets/images/community2.webp";
import suaraUmkmLogo from "../assets/images/commmunity3.webp";
import youthEconomicLogo from "../assets/images/community4.webp";
import gedorKampusLogo from "../assets/images/community5.webp";
import melipirLogo from "../assets/images/community6.webp";

const communityPrograms = [
  {
    name: "Local Media Community",
    image: localMediaLogo,
    url: "https://localmediacommunity.com/id",
    description:
      "A network of local media supported by International Media Support (IMS), with more than 700 participants in its fourth year and over 10 programs delivered.",
    featured: true,
    accent: "dark",
  },
  {
    name: "Yoursay Community",
    image: yourSayLogo,
    url: "https://yoursay.suara.com/",
    description:
      "A user-generated content platform with more than 142,000 registered members, alongside webinars, workshops, and community activities.",
    accent: "sand",
  },
  {
    name: "Suara UMKM",
    image: suaraUmkmLogo,
    url: "https://www.youtube.com/playlist?list=PLIMKSrm9oeucIO_FdEww1sfgO96FBLw4B",
    description:
      "A program supporting digitally enabled micro, small, and medium enterprises, involving more than 2,500 enterprises across seven cities.",
    accent: "clay",
  },
  {
    name: "Youth Economic Summit",
    image: youthEconomicLogo,
    url: "https://youtheconomicsummit.org/",
    description:
      "A youth-focused platform for economic discussions and events, developed in partnership with Suara and Core Indonesia.",
    accent: "sand",
  },
  {
    name: "Gedor Kampus",
    image: gedorKampusLogo,
    url: "https://www.youtube.com/playlist?list=PLIMKSrm9oeudw1g-eZYZHrhXSuASF0ue2",
    description:
      "A campus program introducing students to the media industry through practical skills, brand activations, and other activities.",
    accent: "clay",
  },
  {
    name: "Melipir Goes to School",
    image: melipirLogo,
    url: "https://www.youtube.com/watch?v=w4h_C9Y1AGE",
    description:
      "A program for high school students combining early-stage skill development, knowledge sharing, and creative activities.",
    accent: "sand",
  },
];

function CommunityCard({ program }) {
  return (
    <a
      href={program.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Kunjungi ${program.name}`}
      className="group block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#9A7048] focus-visible:ring-offset-4"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-orange-500 bg-orange-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-600 hover:shadow-[0_16px_35px_rgba(65,32,1,0.08)]">
        {/* Logo */}
        <div className="relative flex min-h-[150px] items-center justify-center overflow-hidden bg-white sm:min-h-[165px]">
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-10 h-32 w-32 rounded-full border border-[#412001]/[0.07]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -left-8 h-32 w-32 rounded-full border border-[#412001]/[0.07]"
          />

          <img
            src={program.image}
            alt={program.name}
            loading="lazy"
            decoding="async"
            className="relative z-10 h-auto max-h-[100px] w-auto max-w-[75%] object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-lg text-white font-bold leading-snug tracking-tight sm:text-xl">
            {program.name}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-6 text-white">
            {program.description}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-white pt-4">
            <span className="text-xs text-white font-semibold ">
              Explore program
            </span>

            <span
              aria-hidden="true"
              className="flex h-8 w-8 text-orange-500 items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-orange-600 group-hover:text-[#FFF8EF]"
            >
              ↗
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}

export default function HomeCommunity() {
  return (
    <section
      id="community"
      className="slide-in relative overflow-hidden px-6 pt-22 sm:px-10 sm:pt-24 lg:pt-26 lg:px-18"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-500 sm:w-12" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
              Growing Together
            </span>

            <span className="h-px w-8 bg-orange-500 sm:w-12" />
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.045em] text-[#412001] sm:text-5xl lg:text-6xl">
            Community
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {communityPrograms.map((program) => (
            <CommunityCard key={program.name} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
