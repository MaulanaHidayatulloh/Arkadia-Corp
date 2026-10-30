import teamImage from "../assets/images/about6.webp";

export default function AboutOurTeam() {
  return (
    <section
      id="our-team"
      className="relative isolate min-h-[520px] h-[70vh] max-h-[760px] w-full overflow-hidden bg-[#24180F] sm:min-h-[600px] md:h-[78vh]"
    >
      {/* Background Image */}
      <img
        src={teamImage}
        alt="Arkadia team"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D120A]/70 via-[#1D120A]/15 to-[#1D120A]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1D120A]/75 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-12 sm:px-10 sm:pb-16 md:px-14 md:pb-20 lg:px-20">
        <div className="max-w-3xl">
          <h2 className="font-serif text-5xl font-normal leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our Team
          </h2>

          <div className="mt-2 flex items-start gap-4 sm:gap-6">
            <span className="mt-1 hidden h-20 w-[2px] shrink-0 bg-[#F05825] sm:block" />

            <p className="max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8 md:text-lg">
              We have a young and dynamic spirit within our team. Supported by
              solid and hardworking personnel, we have confidence to compete,
              and always ready to give our best to achieve our ultimate goal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
