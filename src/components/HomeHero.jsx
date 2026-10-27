import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import bgWelcome from "../assets/images/bg-welcome.webp";
import bgOurMedia from "../assets/images/bg-ourmedia.webp";
import bgCommunity from "../assets/images/bg-community.webp";
import bgAgency from "../assets/images/bg-agency.webp";
import bgEvents from "../assets/images/bg-events.webp";
import bgSocialMedia from "../assets/images/bg-sosmed.webp";
import bgKol from "../assets/images/bg-kol.webp";

const slides = [
  {
    eyebrow: "ARKADIA DIGITAL MEDIA",
    title: "Welcome to Arkadia",
    originalTitle: "WELCOME",
    description:
      "This is Arkadia Digital Media. We are an independent and integrated digital media group.",
    detail:
      "Being one of the players in the Indonesian media industry, we strive for sustainable growth and progressively expanding our business to a range of various digital media platforms and other related services.",
    image: bgWelcome,
    alt: "Arkadia Digital Media",
    link: "/about",
    button: "Discover Arkadia",
  },
  {
    eyebrow: "DIGITAL PUBLISHING",
    title: "Our Media",
    originalTitle: "OUR MEDIA",
    description:
      "We manage 9 web portals, including Suara.com, 7 niche portals which are Matamata.com, Bolatimes.com, Hitekno.com, Mobimoto.com, Dewiku.com, Himedik.com, Guideku.com, English website TheIndonesia.co, and some 20 Suara Regional pages.",
    detail:
      "Suara.com is the leading portal that's been on the Top 5 digital media ranks in Indonesia, has 60 million pageviews monthly, with quality journalism products such as LIKS, Cek Fakta, and Suara Hijau.",
    image: bgOurMedia,
    alt: "Arkadia digital media portfolio",
    link: "#our-media",
    button: "Explore Our Media",
  },
  {
    eyebrow: "COMMUNITY & IMPACT",
    title: "Growing Together",
    originalTitle: "COMMUNITY",
    description:
      "Communities as part of the public have been with us for many years. We work with them, involved them in activities such as workshops, seminars, etc, and provide them knowledge and skills to increase their capabilities.",
    detail:
      "The numbers are hundreds of thousands, and expanding. All are managed through programs such as Local Media Community, YourSay Community, Suara UMKM (MSMEs), Youth Economic Society, Gedor Kampus, and Melipir Goes to School program.",
    image: bgCommunity,
    alt: "Arkadia community programs",
    link: "#community",
    button: "Discover More",
  },
  {
    eyebrow: "INTEGRATED SERVICES",
    title: "Creative Solutions",
    originalTitle: "AGENCY",
    description:
      "As a digital ecosystem with extensive networks and partners, Arkadia has also been developing specific service as an agency.",
    detail:
      "Managed by our Archipelago Agency and set up a self-service advertising platform Iklandisini.com, the agency services are not only media (ads) placement, but also offering social media handling, co-marketing, and providing PR consultancy.",
    image: bgAgency,
    alt: "Arkadia agency services",
    link: "#agency",
    button: "Explore Services",
  },
  {
    eyebrow: "EVENT & PRODUCTION",
    title: "Ideas Into Experiences",
    originalTitle: "EVENT & PRODUCTION",
    description:
      "Arkadia has been producing interesting and sophisticated multimedia products as in-house programs or for clients since 2016. We've then have also been managing dozens of big and successful events for many partners and clients.",
    detail:
      "This part of works are professionally managed and executed mainly by our two units: Arkadia Production and Arkadia Event.",
    image: bgEvents,
    alt: "Arkadia event and production",
    link: "#event-production",
    button: "Discover Our Work",
  },
  {
    eyebrow: "SOCIAL MEDIA",
    title: "Reach Every Audience",
    originalTitle: "OUR SOCIAL MEDIA",
    description:
      "The wide range and big numbers of our social media channels and accounts on various platforms, from Youtube to Facebook, Instagram to Tiktok, X (Twitter), Thread and so on, would surely assure to achieve wide reach and good engagement for us and our partners or clients.",
    detail:
      "Our extensive social media presence ensures maximum visibility and engagement across all major digital platforms.",
    image: bgSocialMedia,
    alt: "Arkadia social media channels",
    link: "#social-media",
    button: "Explore Our Reach",
  },
  {
    eyebrow: "CREATOR ECOSYSTEM",
    title: "Connecting Influence",
    originalTitle: "KOL MANAGEMENT",
    description:
      "It's all about key opinion leaders (KOL) and influencers nowadays, to widely reach and engage your products or campaigns to your market or audience. So, we've been engaging with and managing them too.",
    detail:
      "With around 10,000 KOL and micro influencers in our database, we’ve even developed a specific platform for it which is the Nexus Creator Hub.",
    image: bgKol,
    alt: "Arkadia KOL management",
    link: "#kol-management",
    button: "Meet Our Network",
  },
];

export default function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const goToSlide = (index) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      aria-label="Arkadia Digital Media introduction"
      className="relative isolate min-h-[480px] overflow-hidden bg-slate-950 text-white sm:min-h-[500px] lg:min-h-[540px]"
    >
      {/* Background carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.originalTitle}
          aria-hidden={index !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? "z-0 opacity-100" : "z-[-1] opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}

      {/* Contrast overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[480px] max-w-[1440px] items-center px-6 py-16 sm:min-h-[500px] sm:px-10 sm:py-16 lg:min-h-[540px] lg:px-16 lg:py-16 xl:px-20">
        <div
          key={activeSlide.originalTitle}
          className="max-w-3xl animate-[hero-enter_700ms_ease-out_both]"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-orange-400" />
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-300 sm:text-sm">
              {activeSlide.eyebrow}
            </p>
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {activeSlide.title}
            <span className="text-orange-400">.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8 lg:text-xl">
            {activeSlide.description}
          </p>

          <p className="mt-4 hidden max-w-2xl text-sm leading-7 text-white/70 md:block lg:text-base">
            {activeSlide.detail}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a
              href={activeSlide.link}
              className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-7"
            >
              {activeSlide.button}
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-20">
          <div
            className="flex items-center gap-2.5"
            aria-label="Choose hero slide"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.originalTitle}
                type="button"
                aria-label={`Go to slide ${index + 1}: ${slide.originalTitle}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => goToSlide(index)}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
                  index === activeIndex
                    ? "w-9 bg-orange-400"
                    : "w-2.5 bg-white/45 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Tombol navigasi */}
          <div className="flex items-center gap-2">
            <span className="mr-2 hidden text-xs tabular-nums text-white/70 sm:inline">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goToSlide(activeIndex - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 transition-colors hover:border-white/60 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goToSlide(activeIndex + 1)}
              className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 transition-colors hover:border-white/60 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
