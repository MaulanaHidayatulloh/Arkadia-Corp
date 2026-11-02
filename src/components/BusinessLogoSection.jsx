import React from "react";

// Mengambil seluruh gambar business*.webp dari folder assets
const businessImages = import.meta.glob("../assets/images/business*.webp", {
  eager: true,
  import: "default",
});

const BusinessLogoSection = ({ title, start, end }) => {
  const logos = Array.from({ length: end - start + 1 }, (_, index) => {
    const number = start + index;
    const imagePath = `../assets/images/business${number}.webp`;

    return {
      id: number,
      image: businessImages[imagePath],
    };
  });

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-18">
      <div className="mx-auto max-w-[1500px]">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <span className="mb-3 block text-sm font-semibold tracking-[0.2em] text-orange-500">
              OUR NETWORK
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-[#412001] sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>

          <span className="text-sm font-medium tracking-wide text-[#8A8178]">
            {String(logos.length).padStart(2, "0")} Partners
          </span>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="group flex rounded-2xl aspect-[4/3] items-center justify-center overflow-hidden border border-black/15 transition-all duration-300 hover:border-orange-500 hover:shadow-lg"
            >
              {logo.image ? (
                <img
                  src={logo.image}
                  alt={`${title} ${logo.id}`}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <span className="text-xs text-gray-400">
                  Image {logo.id} not found
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLogoSection;
