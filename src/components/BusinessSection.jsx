import { useEffect, useState } from "react";
import productionLogo from "../assets/images/business3.webp";
import eventLogo from "../assets/images/business2.webp";
import productionImage from "../assets/images/business4.webp";
import eventImage from "../assets/images/business5.webp";

const businesses = [
  {
    id: "production",
    number: "01",
    name: "Arkadia Production",
    logo: productionLogo,
    image: productionImage,
    description:
      "Arkadia Production is expanding rapidly with a team of young, creative and professional individuals, supported by state-of-the-art equipment. We are producing hundreds of videos monthly catering for multiple platforms under PT Arkadia Digital Media Tbk. We also produce video contents for clients ranging from government institutions to corporations.",
  },
  {
    id: "event",
    number: "02",
    name: "Arkadia Event",
    logo: eventLogo,
    image: eventImage,
    description:
      "Arkadia Event main activity is creating various events to boost the brand awareness of various platforms under PT Arkadia Digital Media Tbk. We also provide an sophisticated event management service for clients marketing campaign in synergy with our ever growing presence in the Indonesian digital media landscape",
  },
];

const BusinessSection = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  // Close modal with Escape and prevent background scrolling
  useEffect(() => {
    if (!selectedBusiness) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedBusiness(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedBusiness]);

  return (
    <>
      <section className="py-10 sm:py-15 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-18">
          {/* heading */}
          <div className="mb-10 text-center sm:mb-14">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-orange-500 sm:w-12" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
                Arkadia Digital Media
              </span>

              <span className="h-px w-8 bg-orange-500 sm:w-12" />
            </div>

            <h2 className="text-4xl font-bold tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
              Our Business
            </h2>
          </div>

          {/* Business Items */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7">
            {businesses.map((business) => (
              <button
                key={business.id}
                type="button"
                onClick={() => setSelectedBusiness(business)}
                aria-label={`View ${business.name}`}
                className="group cursor-pointer rounded-2xl relative flex min-h-[250px] flex-col justify-center overflow-hidden border border-black/20 bg-white py-5 px-7 text-left transition-all duration-500 hover:border-orange-500 hover:shadow-xl sm:min-h-[300px] lg:min-h-[350px]"
              >
                {/* Business Logo */}
                <div className="flex flex-1 items-center justify-center py-7">
                  <img
                    src={business.logo}
                    alt={business.name}
                    className="max-h-[125px] w-full max-w-[280px] object-contain transition-transform duration-500 group-hover:scale-105 sm:max-h-[150px]"
                  />
                </div>

                {/* Bottom Information */}
                <div className="flex items-center justify-between border-t border-black/30 pt-5">
                  <h3 className="text-lg font-semibold text-[#412001] sm:text-xl">
                    {business.name}
                  </h3>

                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F05825] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    Explore
                  </span>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F05825] transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Business Modal */}
      {selectedBusiness && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#1C130D]/60 px-4 py-6 backdrop-blur-md sm:px-6"
          onClick={() => setSelectedBusiness(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="business-modal-title"
            className="relative rounded-3xl my-auto w-full max-w-[650px] overflow-hidden bg-white shadow-2xl animate-[modalFadeIn_0.3s_ease-out]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedBusiness(null)}
              aria-label="Close modal"
              className="absolute cursor-pointer right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#412001] shadow-md transition-all duration-300 hover:bg-orange-500 hover:text-white sm:right-5 sm:top-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="h-[220px] w-full overflow-hidden sm:h-[300px]">
              <img
                src={selectedBusiness.image}
                alt={selectedBusiness.name}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-9 lg:p-10">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                OUR BUSINESS / {selectedBusiness.number}
              </span>

              <h3
                id="business-modal-title"
                className="mb-5 text-2xl font-semibold text-black sm:text-3xl"
              >
                {selectedBusiness.name}
              </h3>

              <p className="text-justify text-sm leading-[1.9] text-[#655B52] sm:text-base">
                {selectedBusiness.description}
              </p>

              <div className="mt-7 h-[3px] w-20 bg-orange-500" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BusinessSection;
