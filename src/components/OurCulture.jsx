import careerImage from "../assets/images/career1.webp";

export default function OurCulture() {
  return (
    <section className="group relative isolate flex min-h-[480px] h-[85vh] max-h-[900px] w-full items-end overflow-hidden">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${careerImage})` }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/40 via-black/20 to-black/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

      {/* Main Content */}
      <div className="mx-auto w-full max-w-[100%] px-6 pb-6 sm:px-10 lg:px-18">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-orange-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white sm:text-sm">
              Life at Arkadia
            </span>
          </div>

          <h1 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our Culture
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8 lg:text-lg">
            At PT Arkadia Digital Media Tbk., we foster a professional yet
            enjoyable workplace built on hard work, integrity, discipline,
            creativity, and innovation.
          </p>
        </div>
      </div>

      {/* Bottom Right Label */}
      <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:flex lg:right-16">
        <span>People</span>
        <span className="h-px w-8 bg-white/40" />
        <span>Culture</span>
        <span className="h-px w-8 bg-white/40" />
        <span>Growth</span>
      </div>
    </section>
  );
}
