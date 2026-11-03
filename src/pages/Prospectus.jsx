import { Download, FileText } from "lucide-react";
import InvestorHero from "../components/InvestorHero";

const Prospectus = () => {
  return (
    <main>
      {/* Hero */}
      <InvestorHero title="Prospectus" />

      {/* Document Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-18">
          {/* Heading */}
          <div className="mb-10">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              DOCUMENTS & PUBLICATIONS
            </span>

            <h2 className="text-2xl font-semibold text-[#412001] sm:text-3xl">
              Prospectus Document
            </h2>
          </div>

          {/* Document Item */}
          <div className="group rounded-2xl relative overflow-hidden border border-black/8 bg-[#FAF9F7] transition-all duration-300 hover:border-orange-500 hover:shadow-[0_15px_45px_-20px_rgba(65,32,1,0.18)]">
            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10">
              <div className="flex items-start gap-5">
                <div className="flex rounded-xl h-14 w-14 shrink-0 items-center justify-center bg-orange-100 text-orange-500 sm:h-16 sm:w-16">
                  <FileText size={29} strokeWidth={1.6} />
                </div>

                <div className="min-w-0">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#A3988D]">
                    Prospectus
                  </span>

                  <h3 className="text-base font-semibold leading-relaxed text-[#412001] sm:text-lg lg:text-xl">
                    Prospectus of PT Arkadia Digital Media Tbk.
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs font-semibold text-orange-500">
                      PDF Document
                    </span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <a
                href="/uploads/prospectus_of_arkadia_digital_media_tbk.pdf"
                download
                className="inline-flex rounded-xl shrink-0 items-center justify-center gap-3 bg-orange-500 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700 sm:px-7"
              >
                <Download size={17} />
                Download PDF
              </a>
            </div>

            <div className="h-[3px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Prospectus;
