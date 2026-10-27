import suaraLogo from "../assets/images/home19.webp";
import mataMataLogo from "../assets/images/home7.webp";
import bolaTimesLogo from "../assets/images/home9.webp";
import hiTeknoLogo from "../assets/images/home11.webp";
import mobiMotoLogo from "../assets/images/home12.webp";
import dewiKuLogo from "../assets/images/home13.webp";
import hiMedikLogo from "../assets/images/home8.webp";
import guidekuLogo from "../assets/images/home10.webp";
import theIndonesiaLogo from "../assets/images/home21.webp";
import suaraRegionalLogo from "../assets/images/home20.webp";

const mediaList = [
  {
    name: "Suara.com",
    image: suaraLogo,
    url: "https://www.suara.com/",
    featured: true,
  },
  {
    name: "MataMata.com",
    image: mataMataLogo,
    url: "https://www.matamata.com/",
    size: "small",
  },
  {
    name: "BolaTimes.com",
    image: bolaTimesLogo,
    url: "https://bolatimes.com/",
    size: "small",
  },
  {
    name: "HiTekno.com",
    image: hiTeknoLogo,
    url: "https://www.hitekno.com/",
    size: "small",
  },
  {
    name: "MobiMoto.com",
    image: mobiMotoLogo,
    url: "https://www.mobimoto.com/",
    size: "wide",
  },
  {
    name: "Dewiku.com",
    image: dewiKuLogo,
    url: "https://www.dewiku.com/",
    size: "small",
  },
  {
    name: "HiMedik.com",
    image: hiMedikLogo,
    url: "https://www.himedik.com/",
    size: "small",
  },
  {
    name: "Guideku.com",
    image: guidekuLogo,
    url: "https://www.guideku.com/",
    size: "small",
  },
  {
    name: "The Indonesia",
    image: theIndonesiaLogo,
    url: "https://www.theindonesia.co/",
    size: "small",
  },
  {
    name: "Suara Regional",
    image: suaraRegionalLogo,
    url: null,
    size: "wide",
  },
];

function MediaCard({ media }) {
  const isFeatured = media.featured;

  const card = (
    <div
      className={`group relative flex h-full min-h-[150px] flex-col justify-between overflow-hidden rounded-2xl transition-all duration-300 sm:min-h-[175px] ${
        isFeatured ? "min-h-[280px] sm:min-h-[350px] lg:min-h-[370px]" : ""
      }`}
    >
      <img
        src={media.image}
        alt={media.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-containt transition-transform duration-500 group-hover:scale-105"
      />

      {/* Featured label */}
      {isFeatured && (
        <div className="relative z-10 p-4 sm:p-6">
          <span className="inline-flex rounded-full border border-white/30 bg-orange-500 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-[10px]">
            Featured platform
          </span>
        </div>
      )}

      {/* Media name and link */}
      <div className="relative z-10 mt-auto flex items-center justify-between gap-3 p-4 sm:p-5">
        <span className="text-xs text-white font-semibold drop-shadow-sm sm:text-sm">
          {media.name}
        </span>

        {media.url && (
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-sm text-white backdrop-blur-sm transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#412001]"
          >
            ↗
          </span>
        )}
      </div>
    </div>
  );

  return media.url ? (
    <a
      href={media.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Kunjungi ${media.name}`}
      className="block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#9A7048] focus-visible:ring-offset-4"
    >
      {card}
    </a>
  ) : (
    <div className="h-full">{card}</div>
  );
}

export default function HomeOurMedia() {
  const featured = mediaList.find((media) => media.featured);
  const regional = mediaList.find((media) => media.name === "Suara Regional");

  const otherMedia = mediaList.filter(
    (media) => !media.featured && media.name !== "Suara Regional",
  );

  return (
    <section
      id="our-media"
      className="slide-in relative overflow-hidden px-6 pt-22 sm:px-10 sm:pt-24 lg:px-18 lg:pt-26"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Centered heading */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#A47B51] sm:w-12" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#916C47] sm:text-xs">
              Arkadia Digital Media
            </span>

            <span className="h-px w-8 bg-[#A47B51] sm:w-12" />
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.045em] text-[#412001] sm:text-5xl lg:text-6xl">
            Our Media
          </h2>
        </div>

        {/* Asymmetric media collage */}
        <div className="grid grid-cols-1 items-stretch gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-6">
            <div className="min-h-[280px] flex-1 sm:min-h-[350px]">
              <MediaCard media={featured} />
            </div>

            <div className="min-h-[150px] sm:min-h-[165px]">
              <MediaCard media={regional} />
            </div>
          </div>

          {/* Right column: Other media */}
          <div className="grid grid-cols-2 content-start items-stretch gap-3 sm:gap-4 lg:col-span-6 lg:grid-cols-6 lg:gap-4">
            {otherMedia.map((media, index) => (
              <div
                key={media.name}
                className={
                  media.name === "MobiMoto.com"
                    ? "col-span-2 lg:col-span-4"
                    : "col-span-1 lg:col-span-2"
                }
              >
                <MediaCard media={media} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
