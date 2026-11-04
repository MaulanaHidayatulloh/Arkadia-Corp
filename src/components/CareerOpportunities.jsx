import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

// data lowongan Arkadia.
const jobOpenings = [
  //   {
  //     id: 1,
  //     title: "Job Position",
  //     department: "Department",
  //     location: "Jakarta, Indonesia",
  //     type: "Full-time",
  //     applyUrl: "https://example.com",
  //   },
];

export default function CareerOpportunities() {
  return (
    <section
      id="career-opportunities"
      className="relative overflow-hidden py-26 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-18">
        {/* Heading */}
        <div className="mb-8 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <h2 className="font-serif text-5xl font-normal leading-tight text-black sm:text-6xl lg:text-7xl">
              Career
              <br />
              <span className="italic text-orange-500">Opportunities</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-black/60 sm:text-base sm:leading-8 lg:justify-self-end">
            Discover opportunities to bring your ideas, creativity, and passion
            into a collaborative digital media environment.
          </p>
        </div>

        {/* Job Listings */}
        <div className="border-t border-black/30">
          {jobOpenings.length > 0 ? (
            <>
              <div className="hidden px-5 grid-cols-[1.5fr_1fr_1fr_auto] gap-6 border-b border-black/30 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black sm:grid">
                <span>Position</span>
                <span>Department</span>
                <span>Location</span>
                <span>Explore</span>
              </div>

              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="group grid gap-5 px-5 border-b border-black/30 py-7 transition-colors duration-300 hover:bg-orange-100 sm:grid-cols-[1.5fr_1fr_1fr_auto] sm:items-center sm:gap-6 sm:py-9"
                >
                  <div>
                    <h3 className="font-serif text-2xl text-black transition-colors duration-300 group-hover:text-orange-500 sm:text-3xl">
                      {job.title}
                    </h3>

                    {job.type && (
                      <span className="mt-2 inline-block text-xs text-black/60">
                        {job.type}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-black sm:hidden">
                      Department
                    </span>
                    <span className="text-sm text-black/60">
                      {job.department}
                    </span>
                  </div>

                  <div>
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-black sm:hidden">
                      Location
                    </span>
                    <span className="text-sm text-black/60">
                      {job.location}
                    </span>
                  </div>

                  <div>
                    {job.applyUrl ? (
                      <a
                        href={job.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/50 text-black transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                        aria-label={`Apply for ${job.title}`}
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    ) : (
                      <span className="text-xs text-black">
                        Details unavailable
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : (
            /* Empty State */
            <div className="flex min-h-[340px] flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[390px]">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-black/40 text-orange-500">
                <BriefcaseBusiness size={27} strokeWidth={1.4} />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/60">
                Career Updates
              </span>

              <h3 className="mt-4 font-serif text-3xl text-black sm:text-4xl">
                New opportunities are on the horizon
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-black/60 sm:text-base">
                There are no job openings displayed here at the moment. Please
                check this page again for future career updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
