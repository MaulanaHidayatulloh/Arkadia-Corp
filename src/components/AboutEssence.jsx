import { useRef, useState } from "react";
import visionImage from "../assets/images/award1.webp";
import missionImage from "../assets/images/award.webp";
import whatWeDoImage from "../assets/images/our-media.webp";

const essenceSlides = [
  {
    title: "Our Vision",
    image: visionImage,
    number: "01",
    description:
      "Our vision is to be a well-respected independent and integrated digital media group in Indonesia that provides neutral, unbiased as well as balanced news and information to our readers. We dare to dream big and work diligently to achieve this vision.",
  },
  {
    title: "Our Mission",
    image: missionImage,
    number: "02",
    description:
      "We have several missions, including creating and managing various digital media platforms that can become the sources of reliable and interactive information; producing and distributing creative and rich contents; and becoming a workplace destination where creative and talented young people can grow their professionalism.",
  },
  {
    title: "What We Do",
    image: whatWeDoImage,
    number: "03",
    description:
      "We manage several digital media platforms; creating contents in various format for internal and external usage; providing valuable contents for telecommunication companies; as well as building synergy and cooperation with various local digital media player in regions across Indonesia.",
  },
];

export default function AboutEssence() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.querySelectorAll("[data-essence-slide]");
    const target = slides[index];

    if (!target) return;

    slider.scrollTo({
      left: target.offsetLeft - slides[0].offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.querySelectorAll("[data-essence-slide]");
    if (!slides.length) return;

    const sliderCenter =
      slider.getBoundingClientRect().left + slider.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const distance = Math.abs(slideCenter - sliderCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((previousIndex) =>
      previousIndex === closestIndex ? previousIndex : closestIndex,
    );
  };

  const nextSlide = () => {
    scrollToSlide((activeIndex + 1) % essenceSlides.length);
  };

  const previousSlide = () => {
    scrollToSlide(
      (activeIndex - 1 + essenceSlides.length) % essenceSlides.length,
    );
  };

  return (
    <section
      id="our-essence"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 px-5 sm:px-8 md:mb-14 lg:flex-row lg:items-end lg:px-14">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-500 sm:text-sm">
                Who We Are
              </p>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl">
              Our Essence
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-black/70 md:text-base">
            Discover the vision, mission, and values that shape our journey in
            building an independent and integrated digital media group.
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:gap-5 sm:px-8 lg:gap-6 lg:px-14"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
              scrollPaddingInline: "inherit",
            }}
          >
            {essenceSlides.map((slide, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={slide.number}
                  data-essence-slide
                  className="group relative w-[82vw] max-w-[900px] shrink-0 snap-center overflow-hidden sm:w-[76vw] lg:w-[68vw]"
                >
                  <div className="relative aspect-[16/16] overflow-hidden sm:aspect-[16/12] lg:aspect-[16/8]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      draggable="false"
                      className={`h-full w-full object-cover transition-all duration-700 ${
                        isActive ? "brightness-100" : "brightness-[0.65]"
                      }`}
                    />

                    {/* Image Overlay */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-t from-[#1D120A]/90 via-[#1D120A]/20 to-transparent"
                          : "bg-gradient-to-t from-[#1D120A]/70 via-transparent to-transparent"
                      }`}
                    />

                    {/* Slide Content */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 lg:p-9">
                      <div className="flex items-end justify-between gap-3 sm:gap-5">
                        <div className="min-w-0 max-w-2xl">
                          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                            {slide.title}
                          </h3>

                          {/* Active Slide Description */}
                          <div
                            className={`grid transition-all duration-500 ${
                              isActive
                                ? "mt-3 grid-rows-[1fr] opacity-100 sm:mt-4"
                                : "mt-0 grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="max-w-xl text-xs leading-6 text-white/90 sm:text-sm sm:leading-7 md:text-base md:leading-8">
                                {slide.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        <span className="hidden shrink-0 text-4xl font-light text-white/50 sm:block md:text-5xl lg:text-6xl">
                          {slide.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Navigation */}
          <div className="mt-6 flex items-center justify-between px-5 sm:px-8 lg:px-14">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#412001]/20 text-[#412001] transition-all duration-300 hover:border-[#F05825] hover:bg-[#F05825] hover:text-white sm:h-11 sm:w-11"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <path
                    d="m15 18-6-6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#412001]/20 text-[#412001] transition-all duration-300 hover:border-[#F05825] hover:bg-[#F05825] hover:text-white sm:h-11 sm:w-11"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <path
                    d="m9 18 6-6-6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                {essenceSlides.map((slide, index) => (
                  <button
                    key={slide.number}
                    type="button"
                    onClick={() => scrollToSlide(index)}
                    aria-label={`Go to ${slide.title}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-[3px] rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-[#F05825] sm:w-9"
                        : "w-3 bg-[#412001]/20 hover:bg-[#412001]/50 sm:w-4"
                    }`}
                  />
                ))}
              </div>

              <p className="text-[11px] font-semibold tracking-wider text-[#786D62] sm:text-sm">
                {essenceSlides[activeIndex].number} / 03
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
