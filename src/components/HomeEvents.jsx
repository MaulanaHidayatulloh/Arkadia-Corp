import { useCallback, useEffect, useRef, useState } from "react";
import eventsBackground from "../assets/images/bg-events_1.webp";
import event1 from "../assets/images/event1.webp";
import event2 from "../assets/images/event2.webp";
import event3 from "../assets/images/event3.webp";
import event4 from "../assets/images/event4.webp";
import event5 from "../assets/images/event5.webp";
import event6 from "../assets/images/event6.webp";
import event7 from "../assets/images/event7.webp";

const events = [
  {
    number: "01",
    title: "Local Media Summit",
    image: event1,
    description:
      "Program tahunan Local Media Community yang diinisiasi bersama IMS. Menghadirkan ratusan pengelola media lokal untuk berdiskusi dan bertukar wawasan dengan berbagai pemangku kepentingan.",
  },
  {
    number: "02",
    title: "Youth Economic Summit",
    image: event2,
    description:
      "Kolaborasi bersama Core Indonesia yang menjadi signature event sejak 2024. Menghadirkan ratusan peserta dalam rangkaian diskusi ekonomi, pertukaran gagasan, dan hiburan.",
  },
  {
    number: "03",
    title: "Pasar Lokal Suara UMKM",
    image: event3,
    description:
      "Program pemberdayaan UMKM melalui workshop di berbagai kota di Pulau Jawa, sekaligus membuka kesempatan pendanaan melalui kompetisi ide bisnis.",
  },
  {
    number: "04",
    title: "Pesta Rakyat Simpedes",
    image: event4,
    description:
      "Program BRI yang diselenggarakan di puluhan lokasi di berbagai kota, menghadirkan pengalaman acara rakyat dengan jumlah pengunjung mencapai ribuan orang di setiap lokasi.",
  },
  {
    number: "05",
    title: "Jazz Gunung",
    image: event5,
    description:
      "Perhelatan musik jazz dengan latar alam pegunungan yang diselenggarakan di tiga lokasi. Menghadirkan pengalaman musik yang unik bagi ribuan pengunjung.",
  },
  {
    number: "06",
    title: "Hari Jalan",
    image: event6,
    description:
      "Program bersama PUPR untuk memperingati Hari Jalan dengan menampilkan pencapaian pembangunan infrastruktur jalan serta berbagai kegiatan yang melibatkan masyarakat.",
  },
  {
    number: "07",
    title: "Water Adventure",
    image: event7,
    description:
      "Kompetisi jelajah alam berkelompok yang mengajak peserta menikmati petualangan di pedesaan sekaligus meningkatkan kepedulian terhadap pelestarian sumber daya air.",
  },
];

function EventCard({ event }) {
  return (
    <article className="group relative h-[390px] w-full overflow-hidden rounded-2xl bg-[#34271E] shadow-xl sm:h-[420px] lg:h-[450px]">
      {/* Event image */}
      <img
        src={event.image}
        alt={event.title}
        loading="lazy"
        draggable="false"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Image overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/95" />
      <div className="absolute inset-0 bg-[#21160F]/10 transition-colors duration-300 group-hover:bg-[#21160F]/0" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-5 sm:p-6">
        <span className="flex h-10 min-w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 px-3 text-sm font-semibold text-white backdrop-blur-md">
          {event.number}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
        <div className="mb-3 h-1 w-25 rounded-full bg-white transition-all duration-300 group-hover:w-40" />

        <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-[27px]">
          {event.title}
        </h3>

        <p className="mt-3 line-clamp-4 text-sm leading-6 text-white/80">
          {event.description}
        </p>
      </div>
    </article>
  );
}

export default function HomeEvents() {
  const trackRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const isResettingRef = useRef(false);

  // Tiga set kartu membuat perpindahan ke dua arah tetap tersedia.
  const infiniteEvents = [...events, ...events, ...events];

  const [activeIndex, setActiveIndex] = useState(0);

  const getCardStep = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return 0;

    const first = track.children[0];
    const second = track.children[1];

    return second.offsetLeft - first.offsetLeft;
  }, []);

  const scrollToPhysicalIndex = useCallback((index, behavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.children[index];
    if (!card) return;

    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior,
    });
  }, []);

  // Mulai dari set tengah agar pengguna bisa langsung ke dua arah.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const frame = requestAnimationFrame(() => {
      scrollToPhysicalIndex(events.length, "instant");
    });

    return () => {
      cancelAnimationFrame(frame);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollToPhysicalIndex]);

  const goTo = useCallback(
    (direction) => {
      const track = trackRef.current;
      if (!track) return;

      const step = getCardStep();
      if (!step) return;

      const currentPhysicalIndex = Math.round(
        (track.scrollLeft + track.offsetLeft - track.children[0].offsetLeft) /
          step,
      );

      scrollToPhysicalIndex(currentPhysicalIndex + direction, "smooth");
    },
    [getCardStep, scrollToPhysicalIndex],
  );

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || isResettingRef.current) return;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const currentTrack = trackRef.current;
      if (!currentTrack) return;

      const cards = Array.from(currentTrack.children);
      if (!cards.length) return;

      const trackCenter =
        currentTrack.scrollLeft + currentTrack.clientWidth / 2;

      let nearestIndex = 0;
      let nearestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - trackCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      const total = events.length;
      let normalizedIndex = nearestIndex;

      if (nearestIndex < total) {
        normalizedIndex = nearestIndex + total;
      }

      if (nearestIndex >= total * 2) {
        normalizedIndex = nearestIndex - total;
      }

      setActiveIndex(((nearestIndex % total) + total) % total);

      if (normalizedIndex !== nearestIndex) {
        isResettingRef.current = true;

        scrollToPhysicalIndex(normalizedIndex, "instant");

        requestAnimationFrame(() => {
          isResettingRef.current = false;
        });
      }
    }, 100);
  }, [scrollToPhysicalIndex]);

  return (
    <section
      id="events"
      className="relative isolate overflow-hidden mt-10 py-10 sm:py-14 sm:mt-14 lg:py-18 lg:mt-18"
    >
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={eventsBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* heading */}
        <div className="mx-auto mb-10 max-w-3xl px-6 text-center sm:mb-14">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white">
            <span className="h-px w-12 bg-white " />
            Ideas Into Experiences
            <span className="h-px w-12 bg-white" />
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Events &amp; Production
          </h2>
        </div>

        {/* Infinite carousel */}
        <div className="relative">
          {/* Panah kiri */}
          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Event sebelumnya"
            className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-orange-500 text-white shadow-lg backdrop-blur-md transition duration-300 hover:scale-110 hover:border-[#F05825] hover:bg-orange-600 sm:left-5 sm:h-12 sm:w-12 lg:left-8"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="events-carousel-track flex snap-x snap-mandatory gap-5 overflow-x-auto px-[9vw] pb-3 sm:gap-7 sm:px-[calc((100%-390px)/2)] lg:px-[calc((100%-390px)/2)]"
          >
            {infiniteEvents.map((event, index) => (
              <div
                key={`${event.number}-${index}`}
                className="w-[82vw] max-w-[390px] shrink-0 snap-center"
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>

          {/* Panah kanan */}
          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Event berikutnya"
            className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-orange-500 text-white shadow-lg backdrop-blur-md transition duration-300 hover:scale-110 hover:border-[#F05825] hover:bg-orange-600 sm:right-5 sm:h-12 sm:w-12 lg:right-8"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Progress indicator */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {events.map((event, index) => (
            <button
              key={event.number}
              type="button"
              aria-label={`Lihat event ${event.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => {
                const track = trackRef.current;
                if (!track) return;

                // Pilih kartu pada set tengah.
                scrollToPhysicalIndex(events.length + index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .events-carousel-track {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-padding-inline: 9vw;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
        }

        .events-carousel-track::-webkit-scrollbar {
          display: none;
        }

        @media (min-width: 640px) {
          .events-carousel-track {
            scroll-padding-inline: calc((100% - 390px) / 2);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .events-carousel-track {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}
