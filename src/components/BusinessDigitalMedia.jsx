import businessImage from "../assets/images/business1.webp";

const BusinessDigitalMedia = () => {
  const linkClass =
    "font-semibold text-orange-500 no-underline transition-colors duration-200 hover:text-orange-700";

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-18">
      <div className="mx-auto max-w-[1500px]">
        {/* heading */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-500 sm:w-12" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-500 sm:text-xs">
              Suara.com
            </span>

            <span className="h-px w-8 bg-orange-500 sm:w-12" />
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
            Digital Media
          </h2>
        </div>

        {/* Image & Description */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Image */}
          <div className="relative min-h-[320px] self-stretch overflow-hidden sm:min-h-[420px] lg:min-h-0">
            <img
              src={businessImage}
              alt="Arkadia Digital Media"
              className="absolute inset-0 h-full w-full object-center"
            />

            {/* Established Ribbon */}
            <div className="absolute bottom-6 left-0 sm:bottom-8">
              <div className="border-l-[7px] border-black">
                <div className="relative bg-orange-500 px-6 py-4 shadow-lg sm:px-7 sm:py-5">
                  <div className="pl-2">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                      Established
                    </span>

                    <span className="mt-1 block text-3xl font-bold leading-none tracking-wide text-white sm:text-4xl">
                      2014
                    </span>
                  </div>
                </div>

                {/* Ribbon Tail */}
                <div className="absolute -right-5 top-0 h-full w-5 bg-orange-500 [clip-path:polygon(0_0,100%_25%,100%_75%,0_100%)]" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center">
            <div className="space-y-3 text-justify text-base leading-[1.9] text-[#51463C] sm:text-[17px]">
              <p>
                Arkadia is a digital media company that manages various digital
                media platforms in Indonesia. We provide reliable information
                and creative content to reach diverse audiences through our
                media network.
              </p>

              <p>
                Our digital media platforms include{" "}
                <a
                  href="https://www.suara.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Suara.com
                </a>
                , launched on March 11, 2014;{" "}
                <a
                  href="https://www.matamata.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Matamata.com
                </a>
                , which focuses on celebrity and entertainment;{" "}
                <a
                  href="https://www.bolatimes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Bolatimes.com
                </a>
                , covering soccer and sports;{" "}
                <a
                  href="https://www.hitekno.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Hitekno.com
                </a>
                , focusing on technology and gadgets;{" "}
                <a
                  href="https://www.dewiku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Dewiku.com
                </a>
                , targeting female audiences; and{" "}
                <a
                  href="https://www.mobimoto.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Mobimoto.com
                </a>
                , covering automotive and motorsports.
              </p>

              <p>
                We also manage{" "}
                <a
                  href="https://www.guideku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Guideku.com
                </a>
                , covering travelling and food & beverage;{" "}
                <a
                  href="https://www.himedik.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Himedik.com
                </a>
                , focusing on health and medical topics; and{" "}
                <a
                  href="https://www.suara.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Suara Regional
                </a>
                , which delivers news from various regions across Indonesia.
              </p>

              <p>
                In addition, we provide{" "}
                <a
                  href="https://yoursay.suara.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  YourSay.id
                </a>
                , a user-generated content (UGC) platform that enables
                contributors to share their stories and perspectives, as well as{" "}
                <a
                  href="https://www.theindonesia.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  TheIndonesia.co
                </a>
                , an English-language news website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDigitalMedia;
