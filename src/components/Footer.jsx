import { Link } from "react-router-dom";
import footerBackground from "../assets/images/footer.webp";

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const ContactIcon = ({ type }) => {
  const paths = {
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l2.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-5 w-5 shrink-0 text-white"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
};

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Business", to: "/business" },
  { label: "Career", to: "/career" },
  { label: "Contact Us", to: "/contactus" },
];

const socialLinks = [
  {
    name: "X",
    label: "X / Twitter",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 17.8h1.7L7.3 4.1H5.5l12.3 15.7Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    label: "Facebook",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8h1.9V2.4c-.9-.1-1.8-.2-2.7-.2-2.7 0-4.6 1.7-4.6 4.8v2.5H7V13h2.9v9h3.6Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    label: "YouTube",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7a31 31 0 0 0-.5 5 31 31 0 0 0 .5 5 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17a31 31 0 0 0 .5-5 31 31 0 0 0-.5-5ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    label: "LinkedIn",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1A4 4 0 0 1 16.8 8c4 0 4.7 2.6 4.7 6V21h-3.8v-6.2c0-1.5 0-3.5-2.2-3.5s-2.5 1.7-2.5 3.4V21H9.5V9Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="Footer"
      className="relative isolate overflow-hidden bg-[#17130F] text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBackground})` }}
      />

      <div className="absolute inset-0 -z-10 bg-[#17130F]/50" />

      <div className="mx-auto max-w-7xl px-6 pt-4 sm:px-8 md:pt-8 lg:px-12">
        {/* Footer information */}
        <div className="grid gap-10 py-6 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr] lg:gap-15 lg:py-8">
          <div>
            <div className="mb-5">
              <Link
                to="/"
                className="inline-block text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Arkadia
                <span className="text-[#F05825]">Digital</span>
                <span className="text-[18px]">Media</span>
              </Link>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/85 sm:text-base">
                Connecting stories, empowering communities, and creating
                meaningful impact through media and digital innovation.
              </p>
            </div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Office Address
            </h3>

            <div className="flex items-start gap-4">
              <ContactIcon type="location" />

              <p className="max-w-sm text-sm leading-7 text-white">
                Gedung P46 Lt. 1, Jl. Palmerah Utara No. 46, RT.2/RW.6, Jakarta
                Barat, Indonesia 11480
              </p>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <ContactIcon type="phone" />

              <a
                href="tel:+622150101239"
                className="text-sm text-white transition-colors duration-300 hover:text-[#F05825]"
              >
                +62 21 5010 1239
              </a>
            </div>

            <div className="mt-5 flex items-end gap-4">
              <ContactIcon type="mail" />

              <a
                href="mailto:investor@arkadiacorp.com"
                className="text-sm text-white transition-colors duration-300 hover:text-[#F05825]"
              >
                investor@arkadiacorp.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Explore
            </h3>

            <ul className="space-y-4">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group flex items-center gap-1 text-sm text-white/85 transition-colors duration-300 hover:text-[#F05825]"
                  >
                    <span className="h-px w-0 bg-[#F05825] transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Follow Us
            </h3>

            <p className="mb-5 max-w-xs text-sm leading-6 text-white">
              Stay connected with the latest stories and updates from Arkadia.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href || undefined}
                  aria-label={social.label}
                  aria-disabled={!social.href}
                  title={
                    social.href
                      ? social.label
                      : `${social.label}, tautan belum diatur`
                  }
                  onClick={
                    social.href ? undefined : (event) => event.preventDefault()
                  }
                  className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/75 transition-all duration-300 ${
                    social.href
                      ? "hover:-translate-y-1 hover:border-[#F05825] hover:bg-[#F05825] hover:text-white"
                      : "cursor-default opacity-60"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex border-t border-white/50 py-5 text-xs text-white/80 sm:flex-row items-center justify-center">
          <p>
            © {new Date().getFullYear()} 2026 All Rights Reserved by PT Arkadia
            Digital Media Tbk.
          </p>
        </div>
      </div>
    </footer>
  );
}
