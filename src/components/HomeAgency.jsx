import { useEffect, useState } from "react";
import mediaPlacementIcon from "../assets/images/home-icon-1.webp";
import socialMediaIcon from "../assets/images/home-icon-2.webp";
import coMarketingIcon from "../assets/images/home-icon-3.webp";
import prConsultantIcon from "../assets/images/home-icon-4.webp";
import mediaPlacementImage from "../assets/images/home15.webp";
import socialMediaImage from "../assets/images/home16.webp";
import coMarketingImage from "../assets/images/home17.webp";
import prConsultantImage from "../assets/images/home18.webp";

const agencyServices = [
  {
    number: "01",
    title: "Media Placement",
    image: mediaPlacementIcon,
    detailImage: mediaPlacementImage,
    description:
      "We manage advertising and advertorial placements across our network's media inventory, helping your brand reach the right audience.",
    detail:
      "Our media placement for ads, advertorials, or any campaigns from clients can be distributed within the 720+ national and local media in our network of partners. These are just some of them, spread from Aceh to Papua.",
  },
  {
    number: "02",
    title: "Social Media Handling",
    image: socialMediaIcon,
    detailImage: socialMediaImage,
    description:
      "From content strategy and creative planning to production and amplification, we help your brand build a stronger social media presence.",
    detail:
      "A solution from us to handle social media accounts, starting from concept and ideas planning, to content production and amplification. We help bring your brand's communication to life through a more structured and creative social media strategy.",
  },
  {
    number: "03",
    title: "Co-Marketing",
    image: coMarketingIcon,
    detailImage: coMarketingImage,
    description:
      "We partner with you to market events, products, services, and campaigns through collaborative and creative marketing initiatives.",
    detail:
      "We are ready to partner with you in marketing events, products, or other services and campaigns. Together, we can develop collaborative initiatives that connect your brand with relevant audiences.",
  },
  {
    number: "04",
    title: "PR Consultant",
    image: prConsultantIcon,
    detailImage: prConsultantImage,
    description:
      "We provide public relations consultancy and tailored communication strategies for organizations, businesses, and personal brands.",
    detail:
      "We can provide consultancy and offer public relations solutions for any institution or personal branding needs, helping shape communication strategies that strengthen reputation and audience relationships.",
  },
];

function AgencyCard({ service, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Learn more about ${service.title}`}
      className="group relative flex cursor-pointer h-full w-full flex-col overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_18px_45px_rgba(65,32,1,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F05825] sm:p-8 lg:p-9"
    >
      <div className="flex w-full items-center justify-between">
        <span className="text-sm font-semibold tracking-[0.2em] text-[#A18A72]">
          {service.number}
        </span>

        <span className="h-px w-50 bg-slate-500 transition-all duration-300 lg:w-105 group-hover:bg-[#F05825]" />
      </div>

      <div className="mt-7 flex h-[76px] w-[76px] items-center justify-center rounded-2xl border transition-colors duration-300 group-hover:bg-orange-500 group-hover:border-0">
        <img
          src={service.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-11 w-11 object-contain brightness-0 transition-all duration-300 group-hover:invert"
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="text-xl font-bold tracking-tight text-[#412001] transition-colors duration-300 group-hover:text-orange-500 sm:text-2xl">
          {service.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-[#756657] sm:text-base">
          {service.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F05825] transition-all duration-500 group-hover:w-full" />
    </button>
  );
}

function AgencyModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape" || event.key === "Esc") {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1D130B]/60 p-4 backdrop-blur-md"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="agency-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-orange-500 bg-orange-500 shadow-[0_30px_100px_rgba(0,0,0,0.25)] animate-[modalIn_250ms_ease-out]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute cursor-pointer right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-2xl leading-none text-white shadow-sm hover:bg-black hover:text-white sm:right-4 sm:top-4"
        >
          ×
        </button>

        <div className="h-44 w-full overflow-hidden bg-[#EFE3D5] sm:h-56">
          <img
            src={service.detailImage}
            alt={service.title}
            className="block h-full w-full"
          />
        </div>

        <div className="p-5 sm:p-7">
          <h2
            id="agency-modal-title"
            className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl"
          >
            {service.title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/90 sm:leading-7">
            {service.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomeAgency() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="agency"
      className="slide-in relative overflow-hidden px-6 pt-22 sm:px-10 sm:pt-24 lg:pt-26 lg:px-18"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-64 w-64 rounded-full border border-[#D7C4AE]/40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#E4D4C1]/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* heading */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-500 sm:w-12" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
              Creative Solutions
            </span>

            <span className="h-px w-8 bg-orange-500 sm:w-12" />
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
            Agency
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {agencyServices.map((service) => (
            <AgencyCard
              key={service.number}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <AgencyModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
