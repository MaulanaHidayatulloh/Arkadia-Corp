import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import contact1 from "../assets/images/contact1.webp";
import contact2 from "../assets/images/contact2.webp";

const offices = [
  {
    number: "01",
    city: "Jakarta",
    name: "Head Office",
    image: contact1,
    mapUrl: "https://maps.app.goo.gl/x41WTWDvb12VZXy67",
    address:
      "Gedung P46 Lt 1, Jl. Palmerah Utara No.46, RT.2/RW.6, Jakarta Barat - Indonesia 11480",
    email: "investor@arkadiacorp.com",
    phone: "021 - 50101239",
  },
  {
    number: "02",
    city: "Yogyakarta",
    name: "Operational Office",
    image: contact2,
    mapUrl: "https://maps.app.goo.gl/phQt1F1uzw9gdAjRA",
    address:
      "Jl. Prayan 1 RT03/RW36, Soropadan, Condongcatur, Sleman, Yogyakarta, 55283",
    email: "redaksi@matamata.com",
    phone: "(0274) 501-60-44",
  },
];

export default function ContactLocations() {
  return (
    <section className="px-6 py-22 sm:px-10 sm:py-24 lg:px-18 lg:py-26">
      <div className="mx-auto max-w-[100%]">
        {/* Heading */}
        <div className="mb-14 text-center sm:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-11 bg-orange-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Get in Touch
            </span>
            <span className="h-[2px] w-11 bg-orange-500" />
          </div>

          <h2 className="font-serif text-5xl font-semibold leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl">
            Find Us Here
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
            Whether you're in Jakarta or Yogyakarta, we're always open to
            connecting. Find our office locations below.
          </p>
        </div>

        {/* Office Cards */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-8">
          {offices.map((office) => (
            <article
              key={office.number}
              className="group overflow-hidden rounded-2xl border border-black/20 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={office.image}
                  alt={office.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:right-5 sm:top-5">
                  {office.city}
                </span>
              </div>

              {/* Office Information */}
              <div className="px-2 pb-3 pt-6 sm:px-3 sm:pb-4 sm:pt-7">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                      Arkadia Office
                    </span>

                    <h3 className="mt-2 font-serif text-3xl text-black font-semibold sm:text-4xl">
                      {office.name}
                    </h3>
                  </div>

                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex w-fit items-center gap-3 border-b border-orange-500 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:text-orange-500"
                  >
                    Get Directions
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-300 group-hover/link:rotate-45">
                      <ArrowUpRight size={17} />
                    </span>
                  </a>
                </div>

                {/* Contact Details */}
                <div className="mt-8 grid gap-6 border-t border-black/20 pt-6 sm:grid-cols-2 sm:gap-5">
                  <div className="flex gap-3">
                    <MapPin
                      size={18}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-orange-500"
                    />

                    <div className="min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
                        Address
                      </span>

                      <p className="mt-2 text-sm leading-7 text-black/70">
                        {office.address}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex gap-3">
                      <Mail
                        size={18}
                        strokeWidth={1.5}
                        className="mt-1 shrink-0 text-orange-500"
                      />

                      <div className="min-w-0">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
                          Email
                        </span>

                        <a
                          href={`mailto:${office.email}`}
                          className="mt-2 block break-all text-sm leading-6 text-black/70 transition-colors hover:text-orange-500"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>

                    {office.phone && (
                      <div className="flex gap-3">
                        <Phone
                          size={18}
                          strokeWidth={1.5}
                          className="mt-1 shrink-0 text-orange-500"
                        />

                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
                            Phone
                          </span>

                          <a
                            href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                            className="mt-2 block text-sm leading-6 text-black/70 transition-colors hover:text-orange-500"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
