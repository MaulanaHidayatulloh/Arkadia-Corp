const values = [
  {
    number: "01",
    title: "Hard Work",
    description:
      "We believe meaningful achievements come from dedication, commitment, and the willingness to give our best.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We build trust through honesty, responsibility, and doing what is right in everything we do.",
  },
  {
    number: "03",
    title: "Discipline",
    description:
      "We value consistency, accountability, and a strong sense of responsibility in our work.",
  },
  {
    number: "04",
    title: "Creativity",
    description:
      "We embrace fresh perspectives and encourage ideas that bring new possibilities to life.",
  },
  {
    number: "05",
    title: "Innovation",
    description:
      "We continuously explore better ways to create, adapt, and move forward in the digital media landscape.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="relative overflow-hidden pt-22 sm:pt-24 lg:pt-26">
      <div className="mx-auto max-w-[100%] px-6 sm:px-10 lg:px-18">
        {/* Heading */}
        <div className="mb-8 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-7xl">
              What Makes Us
              <br />
              <span className="italic text-orange-500">Different</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
            Our values shape the way we think, work, and grow together. They are
            the principles that guide us every day at Arkadia.
          </p>
        </div>

        {/* Values List */}
        <div className="border-t border-black/30">
          {values.map((value) => (
            <div
              key={value.number}
              className="group grid grid-cols-[54px_1fr] gap-3 border-b border-black/30 py-8 transition-colors duration-300 hover:bg-orange-100 sm:grid-cols-[90px_1fr] sm:gap-8 sm:py-10 lg:grid-cols-[120px_1.1fr_1fr] lg:items-center lg:gap-12 px-5"
            >
              <span className="font-serif text-3xl font-normal tracking-tight text-black/60 transition-colors duration-300 group-hover:text-[#F05825] sm:text-5xl lg:text-6xl">
                {value.number}
              </span>

              <h3 className="self-center font-serif text-2xl font-normal text-black transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#F05825] sm:text-4xl lg:text-5xl">
                {value.title}
              </h3>

              <p className="col-start-2 max-w-lg text-sm leading-7 text-black/60 sm:text-base sm:leading-8 lg:col-start-auto lg:justify-self-end">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
            PT Arkadia Digital Media Tbk.
          </span>

          <p className="font-serif text-lg italic text-black/80 sm:text-xl">
            Five values, one shared direction.
          </p>
        </div>
      </div>
    </section>
  );
}
