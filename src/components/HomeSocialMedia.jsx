import facebookLogo from "../assets/images/facebook.webp";
import tiktokLogo from "../assets/images/tiktok.webp";
import instagramLogo from "../assets/images/instagram.webp";
import youtubeLogo from "../assets/images/youtube.webp";
import xLogo from "../assets/images/x.webp";
import threadsLogo from "../assets/images/thread.webp";
import whatsappLogo from "../assets/images/whatsapp.webp";
import linkedinLogo from "../assets/images/linkedin.webp";
import arkadiaLogo from "../assets/images/arkadia-logo.webp";

const platforms = [
  {
    image: facebookLogo,
    accounts: "34 Accounts",
    followers: "+20,4 Mio",
    metric: "Total Followers",
    position: "facebook",
  },
  {
    image: tiktokLogo,
    accounts: "12 Accounts",
    followers: "+3,4 Mio",
    metric: "Total Followers",
    position: "tiktok",
  },
  {
    image: instagramLogo,
    accounts: "36 Accounts",
    followers: "700K",
    metric: "Total Followers",
    position: "instagram",
  },
  {
    image: youtubeLogo,
    accounts: "4 Channels",
    followers: "+1,1 Mio",
    metric: "Total Subscribers",
    position: "youtube",
  },
  {
    image: xLogo,
    accounts: "1 Account",
    followers: "+32,9K",
    metric: "Total Followers",
    position: "x",
  },
  {
    image: threadsLogo,
    accounts: "1 Account",
    followers: "+36K",
    metric: "Total Followers",
    position: "threads",
  },
  {
    image: whatsappLogo,
    accounts: "1 Account",
    followers: "+191K",
    metric: "Total Followers",
    position: "whatsapp",
  },
  {
    image: linkedinLogo,
    accounts: "2 Accounts",
    followers: "3K",
    metric: "Total Followers",
    position: "linkedin",
  },
];

function PlatformNode({ platform, index, mobile = false }) {
  return (
    <div
      className={`social-node group ${
        mobile
          ? "flex items-center gap-3 py-5"
          : `social-node-${platform.position} absolute`
      }`}
      style={!mobile ? { "--node-index": index } : undefined}
    >
      <div
        className={`social-logo relative flex shrink-0 items-center justify-center rounded-full border border-orange-500 bg-orange-200 shadow-[0_0_30px_rgba(240,88,37,0.06)] transition-all duration-500 group-hover:border-orange-600 group-hover:shadow-[0_0_35px_rgba(240,88,37,0.2)] ${
          mobile ? "h-14 w-14" : "h-[66px] w-[66px] lg:h-[76px] lg:w-[76px]"
        }`}
      >
        <img
          src={platform.image}
          alt={`Arkadia Corp`}
          loading="lazy"
          className="h-[58%] w-[58%] object-contain transition-all duration-500 md:grayscale md:opacity-70 md:group-hover:grayscale-0 md:group-hover:opacity-100"
        />
      </div>

      <div className={`min-w-0 ${mobile ? "" : "social-node-copy"}`}>
        <p className="mt-3 text-[10px] text-black/50 sm:text-xs">
          {platform.accounts}
        </p>

        <p className="mt-1 whitespace-nowrap text-xl font-bold tracking-tight text-[#F05825] sm:text-2xl">
          {platform.followers}
        </p>

        <p className="text-[9px] uppercase tracking-[0.12em] text-black/40 sm:text-[10px]">
          {platform.metric}
        </p>
      </div>
    </div>
  );
}

export default function HomeSocialMedia() {
  return (
    <section
      id="social-media"
      className="relative isolate overflow-hidden px-6 py-22 sm:px-10 sm:py-24 lg:px-18 lg:py-26"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* heading */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-500 sm:w-12" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
              Reach Every Audience
            </span>

            <span className="h-px w-8 bg-orange-500 sm:w-12" />
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
            Social Media
          </h2>
        </div>

        {/* Desktop constellation */}
        <div className="social-constellation relative mx-auto mt-10 hidden h-[650px] max-w-[1120px] md:block lg:mt-12">
          {/* Orbit rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[530px] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-[50%] border border-orange-500 lg:h-[370px] lg:w-[690px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[720px] -translate-x-1/2 -translate-y-1/2 rotate-[16deg] rounded-[50%] border border-dashed border-orange-500 lg:h-[510px] lg:w-[900px]" />

          {/* Connecting lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 1000 650"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <g
              stroke="#F05825"
              strokeOpacity="0.75"
              strokeWidth="1"
              strokeDasharray="3 6"
            >
              <path d="M500 325 L160 105" />
              <path d="M500 325 L415 65" />
              <path d="M500 325 L805 110" />
              <path d="M500 325 L900 300" />
              <path d="M500 325 L835 525" />
              <path d="M500 325 L570 590" />
              <path d="M500 325 L210 525" />
              <path d="M500 325 L100 315" />
            </g>

            <g fill="#F05825">
              <circle cx="160" cy="105" r="3" />
              <circle cx="415" cy="65" r="3" />
              <circle cx="805" cy="110" r="3" />
              <circle cx="900" cy="300" r="3" />
              <circle cx="835" cy="525" r="3" />
              <circle cx="570" cy="590" r="3" />
              <circle cx="210" cy="525" r="3" />
              <circle cx="100" cy="315" r="3" />
            </g>
          </svg>

          {/* Center hub */}
          <div className="social-hub absolute left-1/2 top-1/2 z-10 flex h-[178px] w-[178px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orange-500 bg-orange-200 shadow-[0_0_70px_rgba(240,88,37,0.10)] lg:h-[205px] lg:w-[205px]">
            <div className="absolute inset-2 rounded-full border border-dashed border-orange-500" />

            <img
              src={arkadiaLogo}
              alt="Arkadia Corp"
              className="relative z-10 h-auto max-h-[90px] w-[72%] object-contain lg:max-h-[110px]"
            />
          </div>

          {/* Orbiting platform */}
          {platforms.map((platform, index) => (
            <PlatformNode
              key={platform.position}
              platform={platform}
              index={index}
            />
          ))}
        </div>

        {/* Mobile constellation */}
        <div className="mt-10 md:hidden">
          <div className="grid grid-cols-2 gap-x-4">
            {platforms.map((platform, index) => (
              <PlatformNode
                key={platform.position}
                platform={platform}
                index={index}
                mobile
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .social-node {
          z-index: 5;
          animation: constellationFloat 5s ease-in-out infinite;
          animation-delay: calc(var(--node-index, 0) * -0.45s);
        }

        .social-node-facebook {
          left: 10%;
          top: 5%;
        }

        .social-node-tiktok {
          left: 34%;
          top: -2%;
        }

        .social-node-instagram {
          right: 12%;
          top: 5%;
        }

        .social-node-youtube {
          right: 0%;
          top: 43%;
        }

        .social-node-x {
          right: 9%;
          bottom: 5%;
        }

        .social-node-threads {
          left: 48%;
          bottom: 0%;
        }

        .social-node-whatsapp {
          left: 15%;
          bottom: 5%;
        }

        .social-node-linkedin {
          left: 0%;
          top: 43%;
        }

        .social-node-copy {
          position: absolute;
          top: 74px;
          left: 0;
          min-width: 145px;
          transition: transform 300ms ease;
        }

        .social-node-facebook .social-node-copy,
        .social-node-whatsapp .social-node-copy {
          left: 0;
        }

        .social-node-tiktok .social-node-copy,
        .social-node-threads .social-node-copy {
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        .social-node-instagram .social-node-copy,
        .social-node-youtube .social-node-copy,
        .social-node-x .social-node-copy {
          right: 0;
          left: auto;
          text-align: right;
        }

        .social-node-linkedin .social-node-copy {
          left: 74px;
          top: 0;
          padding-left: 12px;
        }

        .social-node-youtube .social-node-copy {
          right: 74px;
          top: 0;
          padding-right: 12px;
        }

        .social-node:hover {
          z-index: 15;
        }

        .social-node:hover .social-logo {
          transform: scale(1.08);
        }

        @keyframes constellationFloat {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -7px;
          }
        }

        @media (min-width: 768px) and (max-width: 950px) {
          .social-node-facebook {
            top: 12%;
            left: 3%;
          }

          .social-node-instagram {
            top: 12%;
            right: 5%;
          }

          .social-node-linkedin {
            left: -2%;
          }

          .social-node-youtube {
            right: -2%;
          }

          .social-node-x {
          right: 4%;
          bottom: 15%;
        }

        .social-node-threads {
          left: 55%;
          bottom: 6%;
        }

        .social-node-whatsapp {
          left: 10%;
          bottom: 15%;
        }

          .social-node-copy {
            min-width: 125px;
          }
            
        }

        @media (prefers-reduced-motion: reduce) {
          .social-node {
            animation: none;
          }

          .social-logo {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
