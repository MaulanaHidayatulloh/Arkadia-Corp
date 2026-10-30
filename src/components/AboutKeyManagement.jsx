import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import stephenImage from "../assets/images/about1.webp";
import iwaImage from "../assets/images/about2.webp";
import ariyoImage from "../assets/images/about3.webp";
import suwarjonoImage from "../assets/images/about4.webp";
import popiImage from "../assets/images/popi.webp";

const leaders = [
  {
    name: "Stephen Sulistyo",
    position: "President Commissioner",
    image: stephenImage,
    description:
      "Mr. Sulistyo currently serves as President Commissioner of PT Arkadia Digital Media Tbk. and President Commissioner of PT ACR Global Investments. Mr. Sulistyo has held key position as Senior Managing Director of Business Development & Investment for PT Rajawali Corpora (2008-2015) and also held other important positions in several companies under Rajawali Group. He also served as Chairman (2014-2015) and Independent Commissioner (2007-2013) in PT BW Plantation Tbk / BWPT.IJ. Previously also served as President Director of PT Global Informasi Bermutu (2004-2008), Director of PT Media Nusantara Citra Tbk / MNCN.IJ (2004-2008), Commissioner of PT MNC Sky Vision Tbk / MSKY.IJ (2004-2008), and Director of MNC Investama Tbk / BHIT.IJ (2003- 2008). He received his Bachelor of Science Degree in Business Administration, with a focus in Accounting and Finance from California State University, USA in 1988.",
  },
  {
    name: "Iwa Karunia",
    position: "Commissioner",
    image: iwaImage,
    description:
      "Mr. Karunia currently serves as Commissioner of PT Arkadia Digital Media Tbk., he is an Indonesian entrepreneur, having various prior business interest ranging from steel wire ropes, marine equipment, avionics and aircraft maintenance. His current main business activity is tin mining and smelting. He received his Bachelor of Economics from Surabaya University in 1988.",
  },
  {
    name: "Ariyo Ali Suprapto",
    position: "Independent Commissioner",
    image: ariyoImage,
    description:
      "Mr. Suprapto currently serves as Independent Commissioner of PT Arkadia Digital Media Tbk. Before that, he has held various key position such as General Manager of Business Development in PT Rajawali Corpora (2008-2015), Director in PT Karyabumi Papua (2010-2012), Corporate Accounting Section Head in PT Media Nusantara Citra Tbk / MNCN.IJ (2006-2008) and many more. He received his Bachelor of Economics, majoring in Accounting from Trisakti University in 2001.",
  },
  {
    name: "Suwarjono",
    position: "President Director / CEO",
    image: suwarjonoImage,
    description:
      "Mr. Suwarjono is currently the Chief Executive Officer of PT Arkadia Digital Media Tbk (since 2018) and Editor in Chief for Suara.com (since 2014) as well as Editor in Chief for other portals within the Group. He has extensive experience in digital media landscape, having previously been involved in the establishment of Viva.co.id in Bakrie Group and Okezone.com in MNC Group. He was the Managing Editor for Viva.co.id (2008-2014), Okezone.com (2006-2008), as Reporter Coordinator at Detik.com (2000-2006) and has served in various positions within multiple print media establishments. Has been a journalist since he was studying at the UGM, he is also active in journalism organization, being the Secretary General (2011-2014), the President (2014-2017) and the Chief of Business and Funding (2017 until now) for The Alliance of Independent Journalists / AJI. AJI has more than 2,000 journalists across 36 cities in Indonesia as its members. He also serves as the Deputy Chairman for Indonesian Cyber Media Association / AMSI (2021-now).",
  },
  {
    name: "Popi Puspitasari",
    position: "Director",
    image: popiImage,
    description:
      "Mrs. Popi Puspitasari is an Indonesian citizen, She earned her Bachelor's degree in Psychology from Universitas Persada Indonesia YAI in 2004. Popi Puspitasari currently serves as Director at PT. Arkadia Media Nusantara (2022 - present). She also currently serves as Business Support Manager overseeing the Human Resources Department, General Affairs, Legal & Compliance Support, and Controller & Budgeting (2017-present). Her professional experience also includes the positions of Human Resource Coordinator at PT. Indomobil Finance Indonesia (2004–2016) and Recruitment & Selection at PT. BCA Finance (2004).",
  },
];

export default function AboutKeyManagement() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Update active indicator
  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-leader-card]");
    if (!cards.length) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScrollLeft - 2) {
      closestIndex = cards.length - 1;
    }

    setActiveIndex(closestIndex);
  };

  // Scroll to a selected card
  const scrollToCard = (index) => {
    const container = carouselRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-leader-card]");
    const target = cards[index];

    if (!target) return;

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const left =
      container.scrollLeft +
      targetRect.left -
      containerRect.left -
      (container.clientWidth - target.clientWidth) / 2;

    container.scrollTo({
      left,
      behavior: "smooth",
    });
  };

  // Close modal
  useEffect(() => {
    if (!selectedLeader) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedLeader(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedLeader]);

  return (
    <section id="key-management" className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-[1600px] py-16">
        {/* Heading */}
        <div className="mb-10 flex items-end justify-between gap-5 px-5 sm:px-8 lg:px-14">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-orange-400" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-500 sm:text-sm">
                The People Behind Arkadia
              </p>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#412001] sm:text-4xl md:text-5xl">
              Key Management
            </h2>
          </div>
        </div>

        {/* carousel */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="overflow-x-auto pb-6 pl-6 pt-2 sm:pl-10 lg:pl-12 xl:pl-16"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex w-max snap-x snap-mandatory gap-6 pr-6 sm:pr-10 lg:pr-16 xl:pr-20">
            {leaders.map((leader) => (
              <button
                key={leader.name}
                type="button"
                data-leader-card
                onClick={() => setSelectedLeader(leader)}
                aria-label={`View details for ${leader.name}`}
                className="group w-[76vw] max-w-[300px] shrink-0 snap-start cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F05825] sm:w-[300px] md:w-[320px] lg:w-[340px]"
              >
                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#E8DFD2]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    draggable="false"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 flex items-end justify-end bg-[#412001]/0 p-4 transition-colors duration-300 group-hover:bg-[#412001]/10">
                    <span className="translate-y-2 rounded-2xl bg-[#F5F0E8] px-4 py-2 text-xs font-semibold text-[#412001] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Profile ↗
                    </span>
                  </div>
                </div>

                {/* Name and role */}
                <div className="border-b border-[#412001]/20 py-5">
                  <h3 className="text-xl font-semibold tracking-tight text-[#412001] sm:text-2xl">
                    {leader.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-orange-600">
                    {leader.position}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Carousel progress */}
        <div className="mt-2 flex items-center justify-between px-5 sm:px-8 lg:px-14">
          <div className="flex items-center gap-2">
            {leaders.map((leader, index) => (
              <button
                key={leader.name}
                type="button"
                aria-label={`Go to ${leader.name}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => scrollToCard(index)}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#F05825]"
                    : "w-3 bg-[#412001]/20 hover:bg-[#F05825]/50"
                }`}
              />
            ))}
          </div>

          <p className="text-xs font-medium tracking-wider text-[#786D62]">
            {String(activeIndex + 1).padStart(2, "0")}{" "}
            <span className="mx-1 text-black/50">/</span>{" "}
            {String(leaders.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* scrollbar styling */}
      <style>{`
        #key-management [data-leader-card] {
          -webkit-tap-highlight-color: transparent;
        }

        #key-management .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }

        .management-modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: gray transparent;
          -webkit-overflow-scrolling: touch;
        }

        .management-modal-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .management-modal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .management-modal-scroll::-webkit-scrollbar-thumb {
          background: gray;
          border-radius: 999px;
          border: 1px solid #F5F0E8;
        }

        .management-modal-scroll::-webkit-scrollbar-thumb:hover {
          background: #A99A87;
        }
      `}</style>

      {/* Management profile modal */}
      {selectedLeader &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain bg-[#1D120A]/75 backdrop-blur-sm"
            onClick={() => setSelectedLeader(null)}
            role="presentation"
          >
            <div className="flex min-h-full items-center justify-center p-3 sm:p-6">
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="management-modal-name"
                className="management-modal-scroll relative my-auto grid w-full max-w-4xl grid-cols-1 overflow-y-auto overscroll-contain bg-white shadow-2xl sm:grid-cols-2"
                style={{
                  maxHeight: "calc(100dvh - 3rem)",
                }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative min-h-[240px] sm:min-h-[480px]">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D120A]/40 via-transparent to-transparent sm:bg-gradient-to-r" />
                </div>

                {/* Modal information */}
                <div className="relative flex flex-col p-6 sm:p-8 lg:p-10">
                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    aria-label="Close profile"
                    className="hidden md:flex absolute rounded-xl right-4 top-4 z-10 h-10 w-10 items-center justify-center border border-black bg-white text-2xl text-black text-bold transition-colors hover:bg-[#F05825] hover:text-white hover:border-0"
                  >
                    ×
                  </button>

                  <h3
                    id="management-modal-name"
                    className="pr-8 text-2xl font-bold leading-tight tracking-tight text-[#412001] sm:text-3xl lg:text-4xl"
                  >
                    {selectedLeader.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-6 text-[#B65A2A] sm:text-base">
                    {selectedLeader.position}
                  </p>

                  <div className="mt-4 h-px w-[100%] shrink-0 bg-black/20" />

                  <p className="mt-6 whitespace-pre-line text-sm leading-7 text-[#6F655B]">
                    {selectedLeader.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    className="mt-6 self-start bg-white border border-black rounded-lg px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-[#F05825] hover:text-white hover:border-[#F05825]"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
