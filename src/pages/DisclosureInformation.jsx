import { useState } from "react";
import { Download, FileText } from "lucide-react";
import InvestorHero from "../components/InvestorHero";

const disclosureDocuments = {
  2024: [
    {
      file: "Changes-to-the-DoI-Arkadia.pdf",
      title:
        "Changes and/or Additional Information to the Disclosure of Information",
    },
    {
      file: "Perubahan-atas-KI-Arkadia.pdf",
      title:
        "Perubahan dan/atau Tambahan Informasi atas Keterbukaan Informasi Perseroan",
    },
    {
      file: "Disclosure_of_Information_of_PT_Arkadia_Digital_Media_Tbk_2024.pdf",
      title: "Disclosure of Information in Relation to Material Transaction",
    },
    {
      file: "Keterbukaan_Informasi_PT_Arkadia_Digital_Media_Tbk_2024.pdf",
      title: "Keterbukaan Informasi Sehubungan dengan Transaksi Material",
    },
  ],

  2023: [
    {
      file: "Komite-Audit-dan-Komite-Nominasi-dan-Remunerasi-2023.pdf",
      title:
        "Pengumuman Susunan Komite Audit dan Komite Nominasi dan Remunerasi.",
    },
    {
      file: "Perubahan-Sekretaris-Perusahaan.pdf",
      title: "Pengumuman Perubahan Sekretaris Perusahaan.",
    },
  ],

  2020: [
    {
      file: "AnnouncementofScheduleandProcedureofSSDIGI.pdf",
      title: "Announcement of Schedule and Procedure of SS DIGI",
    },
    {
      file: "PengumumanJadwaldanTataCaraStockSplitDIGI.pdf",
      title: "Pengumuman Jadwal dan Tata Cara Stock Split DIGI",
    },
    {
      file: "MaterialInformationorFactsReportDIGI.pdf",
      title: "Material Information or Facts Report DIGI",
    },
    {
      file: "LaporanInformasiatauFaktaMaterialDIGI.pdf",
      title: "Laporan Informasi atau Fakta Material DIGI",
    },
    {
      file: "KI_Transaksi_Material_PT_Arkadia_Digital_Media_Tbk._1_April_2020.pdf",
      title:
        "Keterbukaan Informasi Transaksi Material PT Arkadia Digital Media Tbk. 1 April 2020",
    },
  ],

  2019: [
    {
      file: "Pengumuman_Rencana_PMTHMETD_PT_Arkadia_Digital_Media_Tbk.pdf",
      title:
        "Pengumuman Rencana PMTHMETD PT Arkadia Digital Media Tbk. 13 Mei 2019",
    },
    {
      file: "Pengumuman_Perubahan_Rencana_PMTHMETD_PT_Arkadia_Digital_Media_Tbk.pdf",
      title:
        "Pengumuman Perubahan Rencana PMTHMETD PT Arkadia Digital Media Tbk. 15 Mei 2019",
    },
  ],
};

const years = Object.keys(disclosureDocuments).sort(
  (a, b) => Number(b) - Number(a),
);

export default function DisclosureInformation() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const documents = disclosureDocuments[selectedYear] || [];

  return (
    <main>
      <InvestorHero title="The Disclosure of Information to The Shareholder" />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-18">
          {/* Heading */}
          <div className="mb-10">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#F05825]">
              DOCUMENTS & PUBLICATIONS
            </span>

            <h2 className="text-2xl font-semibold text-[#412001] sm:text-3xl">
              Disclosure of Information Documents
            </h2>
          </div>

          {/* Year Selector */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                aria-pressed={selectedYear === year}
                className={`min-w-[90px] cursor-pointer rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ${
                  selectedYear === year
                    ? "bg-orange-500 text-white shadow-md"
                    : "border border-black/30 bg-white text-black hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Selected Year */}
          <div className="mb-7 flex items-center gap-5">
            <h3 className="shrink-0 text-xl font-semibold text-[#412001] sm:text-2xl">
              {selectedYear} Documents
            </h3>

            <div className="h-px flex-1 bg-[#EAE5DE]" />

            <span className="shrink-0 text-xs font-medium text-[#A3988D] sm:text-sm">
              {documents.length} Documents
            </span>
          </div>

          {/* Document List */}
          {documents.length > 0 ? (
            <div className="space-y-5">
              {documents.map((document) => (
                <article
                  key={document.file}
                  className="group relative overflow-hidden rounded-2xl border border-black/20 bg-white transition-all duration-300 hover:border-orange-500 hover:shadow-[0_15px_45px_-20px_rgba(65,32,1,0.18)]"
                >
                  <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10">
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 sm:h-16 sm:w-16">
                        <FileText size={29} strokeWidth={1.6} />
                      </div>

                      <div className="min-w-0">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#A3988D]">
                          DISCLOSURE OF INFORMATION - {selectedYear}
                        </span>

                        <h3 className="text-base font-semibold leading-relaxed text-[#412001] sm:text-lg lg:text-xl">
                          {document.title}
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
                      href={`/uploads/${document.file}`}
                      download
                      className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700 sm:px-7"
                    >
                      <Download size={17} />
                      Download PDF
                    </a>
                  </div>

                  <div className="h-[3px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#D8CEC2] bg-[#FAF9F7] px-6 py-14 text-center">
              <FileText
                className="mx-auto mb-4 text-[#B7A99A]"
                size={34}
                strokeWidth={1.4}
              />

              <h3 className="text-lg font-semibold text-[#412001]">
                Documents are not available
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8A7C6E]">
                No Disclosure of Information documents were included for{" "}
                {selectedYear}.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
