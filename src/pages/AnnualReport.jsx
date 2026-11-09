import { Download, FileText } from "lucide-react";
import InvestorHero from "../components/InvestorHero";

const annualReports = [
  {
    year: "2025",
    file: "AnnualReport2025ArkadiaDigitalMedia.pdf",
  },
  {
    year: "2024",
    file: "Annual-Report-2024-Arkadia-Digital-Media.pdf",
  },
  {
    year: "2023",
    file: "annual-report-DIGI-2023.pdf",
  },
  {
    year: "2022",
    file: "annual-report-DIGI-2022.pdf",
  },
  {
    year: "2021",
    file: "Annual_Report_DIGI-2021.pdf",
  },
  {
    year: "2020",
    file: "Arkadia_Anual_Report_2020_update.pdf",
  },
  {
    year: "2019",
    file: "Arkadia_Anual_Report_2019.pdf",
  },
  {
    year: "2018",
    file: "Annual_Report_2018.pdf",
  },
];

export default function AnnualReport() {
  return (
    <main>
      <InvestorHero title="Annual Report" />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-18">
          <div className="mb-10">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#F05825]">
              DOCUMENTS & PUBLICATIONS
            </span>

            <h2 className="text-2xl font-semibold text-[#412001] sm:text-3xl">
              Annual Report Documents
            </h2>
          </div>

          <div className="space-y-5">
            {annualReports.map((report, index) => (
              <article
                key={report.year}
                className="group relative overflow-hidden rounded-2xl border border-black/20 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-white hover:shadow-xl"
              >
                <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 sm:h-16 sm:w-16">
                      <FileText size={29} strokeWidth={1.6} />
                    </div>

                    <div>
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#A3988D]">
                        ANNUAL REPORT - {report.year}
                      </span>

                      <h3 className="text-lg font-semibold leading-snug text-[#412001] sm:text-xl">
                        Annual Report {report.year}
                      </h3>

                      <span className="mt-2 block text-xs font-semibold text-orange-500">
                        PDF Document
                      </span>
                    </div>
                  </div>

                  <a
                    href={`/uploads/${report.file}`}
                    download
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700 sm:w-auto"
                  >
                    <Download size={17} />
                    Download PDF
                  </a>
                </div>

                <div
                  className="h-[3px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"
                  style={{ transitionDelay: `${index * 20}ms` }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
