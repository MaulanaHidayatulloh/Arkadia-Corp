import { useState } from "react";
import { Download, FileText } from "lucide-react";
import InvestorHero from "../components/InvestorHero";

const meetingDocuments = {
  2026: [
    {
      file: "SummaryofMinutesofPTADMAGMS2026.pdf",
      title:
        "Announcement of Summary of Minutes of AGMS PT Arkadia Digital Media Tbk",
    },
    {
      file: "RingkasanRisalahRUPSTPTADM2026.pdf",
      title: "Pengumuman Ringkasan Risalah RUPST PT Arkadia Digital Media Tbk",
    },
    {
      file: "KuasaHadirRUPST2026ADM.pdf",
      title:
        "Surat Kuasa untuk Menghadiri RUPST (Power of Attorney to Attend the AGMS) PT Arkadia Digital Media Tbk",
    },
    {
      file: "PemanggilanRUSPTDIGI2026bilingual.pdf",
      title:
        "Pemanggilan RUPST (Invitation of the AGMS) PT Arkadia Digital Media Tbk",
    },
    {
      file: "Pengumuman-RUPST-2026-Arkadia-bilingual.pdf",
      title:
        "Pengumuman RUPST (AGMS Announcement of) PT Arkadia Digital Media Tbk",
    },
  ],

  2025: [
    {
      file: "Ringkasan-Risalah-RUPST-PT-ADM-2025.pdf",
      title: "Pengumuman Ringkasan Risalah RUPST PT Arkadia Digital Media Tbk",
    },
    {
      file: "Summary-of-Minutes-of-PT-ADM-AGMS-2025.pdf",
      title:
        "Announcement of Summary of Minutes of AGMS PT Arkadia Digital Media Tbk",
    },
    {
      file: "Kuasa-Hadir-RUPST-2025-ADM.pdf",
      title:
        "Surat Kuasa untuk Menghadiri RUPST (Power of Attorney to Attend the AGMS) PT Arkadia Digital Media Tbk",
    },
    {
      file: "Bahan-Mata-Acara-RUPST-Popi-Puspitasari-CV.pdf",
      title:
        "Bahan Mata Acara RUPST (Agenda Material of the AGMS) PT Arkadia Digital Media Tbk",
    },
    {
      file: "Pemanggilan-RUPST-DIGI-2025-Bilingual.pdf",
      title:
        "Pemanggilan RUPST (Invitation of the AGMS) PT Arkadia Digital Media Tbk",
    },
    {
      file: "Pengumuman_RUPST_Arkadia_2025_Bilingual.pdf",
      title:
        "Pengumuman RUPST (AGMS Announcement of) PT Arkadia Digital Media Tbk",
    },
  ],

  2024: [
    {
      file: "Summary_of_Minutes_of_PT_ADM_AGMS_2024.pdf",
      title:
        "Announcement of Summary of Minutes of AGMS PT Arkadia Digital Media Tbk",
    },
    {
      file: "Ringkasan_Risalah_RUPST_PT_ADM_2024.pdf",
      title: "Pengumuman Ringkasan Risalah RUPST PT Arkadia Digital Media Tbk",
    },
    {
      file: "Kuasa_Hadir_RUPST_2024_ADM.pdf",
      title: "Surat Kuasa untuk Menghadiri RUPST PT Arkadia Digital Media Tbk",
    },
    {
      file: "Notice_of_AGMS_PT_Arkadia_Digital_Media_Tbk_2024.pdf",
      title: "Notice of AGMS PT Arkadia Digital Media Tbk",
    },
    {
      file: "Panggilan_RUPST_PT_Arkadia_Digital_Media_Tbk_2024.pdf",
      title: "Panggilan RUPST PT Arkadia Digital Media Tbk",
    },
    {
      file: "Pengumuman_RUPS_Arkadia_2024_Bilingual.pdf",
      title:
        "Pengumuman RUPST (AGMS Announcement) PT Arkadia Digital Media Tbk",
    },
  ],

  2023: [
    {
      file: "Summary_of_Minutes_of_AGMS_DIGI_2023.pdf",
      title:
        "Announcement of Summary of Minutes of AGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Ringkasan_Risalah_RUPST_DIGI_2023.pdf",
      title: "Pengumuman Ringkasan Risalah RUPST PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Bahan_Mata_Acara_Rapat_Arkadia.pdf",
      title: "Bahan Mata Acara RUPST PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Notice_of_AGMS_PT_Arkadia_Digital_Media_Tbk_2023.pdf",
      title: "Notice of AGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Panggilan_RUPST_PT_Arkadia_Digital_Media_Tbk_2023.pdf",
      title: "Panggilan RUPST PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Pengumuman-RUPST-PT-Arkadia-Digital-Media-Tbk.pdf",
      title: "Pengumuman RUPST PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Announcement-of-AGMS-PT-Arkadia-Digital-Media-Tbk.pdf",
      title: "Announcement of AGMS PT Arkadia Digital Media Tbk.",
    },
  ],

  2022: [
    {
      file: "Announcement_of_Summary_of_Minutes_of_AGMS_DIGI_2022.pdf",
      title:
        "Announcement of Summary of Minutes of AGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Pengumuman_Ringkasan_Risalah_RUPST_DIGI_2022.pdf",
      title: "Pengumuman Ringkasan Risalah RUPST PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Bahan_Mata_Acara_Rapat.pdf",
      title: "Bahan Mata Acara RUPST PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Kuasa_Hadir_RUPST_2022_ADM.pdf",
      title: "Surat Kuasa untuk Menghadiri RUPST PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Notice_of_AGMS_PT_Arkadia_Digital_Media_Tbk-2022.pdf",
      title: "Notice of AGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Panggilan_RUPST_PT_Arkadia_Digital_Media_Tbk-2022.pdf",
      title: "Panggilan RUPST PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Pengumuman_RUPST_PT_Arkadia_Digital_Media_Tbk2022.pdf",
      title: "Pengumuman RUPST PT Arkadia Digital Media Tbk",
    },
    {
      file: "Announcement_of_AGMS_PT_Arkadia_Digital_Media_Tbk2022.pdf",
      title: "Announcement of AGMS PT Arkadia Digital Media Tbk",
    },
  ],

  2021: [
    {
      file: "AnnouncementOfSummaryOfMinutesOfAGMSDIGI2021.pdf",
      title: "Announcement Of Summary Of Minutes Of AGMS DIGI 2021",
    },
    {
      file: "PengumumanRingkasanRisalahRUPSTDIGI2021.pdf",
      title: "Pengumuman Ringkasan Risalah RUPST DIGI 2021",
    },
    {
      file: "NoticeofAGMSPTArkadiaDigitalMediaTbk.pdf",
      title: "Notice of AGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "PanggilanRUPSTPTArkadiaDigitalMediaTbk.pdf",
      title: "Panggilan RUPST PT Arkadia Digital Media Tbk.",
    },
    {
      file: "KuasaHadirRUPSTADM.pdf",
      title: "Kuasa Hadir RUPST ADM",
    },
    {
      file: "NotificationofAGMSPTArkadiaDigitalMediaTbk.pdf",
      title: "Notification of AGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "PengumumanRUPSTPTArkadiaDigitalMediaTbk.pdf",
      title: "Pengumuman RUPST PT Arkadia Digital Media Tbk.",
    },
  ],

  2020: [
    {
      file: "AnnouncementOfSummaryOfEGMSPTArkadiaDigitalMediaTbk..pdf",
      title: "Announcement Of Summary Of EGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "PengumumanRingkasanRUPSLuarBiasaPTArkadiaDigitalMediaTbk..pdf",
      title:
        "Pengumuman Ringkasan RUPS Luar Biasa PT Arkadia Digital Media Tbk.",
    },
    {
      file: "SummonsOfEGMSDIGI.pdf",
      title: "Summons Of EGMS DIGI",
    },
    {
      file: "PanggilanRUPSLBDIGI.pdf",
      title: "Panggilan RUPSLB DIGI",
    },
    {
      file: "Announcement_Of_EGMS_DIGI.pdf",
      title: "Announcement Of EGMS DIGI",
    },
    {
      file: "Pengumuman_RUPSLB_DIGI.pdf",
      title: "Pengumuman RUPSLB DIGI",
    },
    {
      file: "AnnouncementOfSummaryOfAGMSPTArkadiaDigitalMediaTbk..pdf",
      title: "Announcement Of Summary Of AGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "PengumumanRingkasanRUPSTahunanPTArkadiaDigitalMediaTbk..pdf",
      title: "Pengumuman Ringkasan RUPS Tahunan PT Arkadia Digital Media Tbk.",
    },
    {
      file: "AnnouncementOfSummaryOfIGMSPTArkadiaDigitalMediaTbk..pdf",
      title: "Announcement Of Summary Of IGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "PengumumanRingkasanRUPSIndependenPTArkadiaDigitalMediaTbk..pdf",
      title:
        "Pengumuman Ringkasan RUPS Independen PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Re_Summons_of_AGMS_and_IGMS_DIGI.pdf",
      title: "Re Summons of AGMS and IGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Pemanggilan_Ulang_RUPST_dan_RUPS_Independen_DIGI.pdf",
      title:
        "Pemanggilan Ulang RUPST dan RUPS Independen PT Arkadia Digital Media Tbk.",
    },
    {
      file: "SummonsofAGMSandIGMSPTArkadiaDigitalMediaTbk..pdf",
      title: "Summons of AGMS and IGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "PanggilanRUPSTdanRUPSIndependenPTArkadiaDigitalMediaTbk..pdf",
      title:
        "Panggilan RUPST dan RUPS Independen PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Amendment_to_the_Notification_of_AGMS_and_IGMS_PT_Arkadia_Digital_Media_Tbk.pdf",
      title:
        "Amendment to the Notification of AGMS and IGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Ralat_Pengumuman_RUPST_dan_RUPS_Independen_PT_Arkadia_Digital_Media_Tbk.pdf",
      title:
        "Ralat Pengumuman RUPST dan RUPS Independen PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Notification_of_AGMS_and_IGMS_PT_Arkadia_Digital_Media_Tbk.pdf",
      title: "Notification of AGMS and IGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Pengumuman_RUPST_dan_RUPS_Independen_PT_Arkadia_Digital_Media_Tbk.pdf",
      title:
        "Pengumuman RUPST dan RUPS Independen PT Arkadia Digital Media Tbk.",
    },
  ],

  2019: [
    {
      file: "Pengumuman_RUPST_PT_Arkadia_Digital_Media_Tbk.pdf",
      title: "Pengumuman RUPST PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Notification_of_AGMS_PT_Arkadia_Digital_Media_Tbk.pdf",
      title: "Notification of AGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "PanggilanRUPSTArkadia24Juni2019.pdf",
      title: "Panggilan RUPST PT Arkadia Digital Media Tbk.",
    },
    {
      file: "SummonsAGMSArkadia24June2019.pdf",
      title: "Summons AGMS PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Pengumuman_Hasil_RUPS_Tahunan_PT_Arkadia_Digital_Media_Tbk.pdf",
      title: "Pengumuman Hasil RUPS Tahunan PT Arkadia Digital Media Tbk.",
    },
    {
      file: "Announcement_Of_Summary_Of_AGMS_PT_Arkadia_Digital_Media_Tbk.pdf",
      title: "Announcement Of Summary Of AGMS PT Arkadia Digital Media Tbk.",
    },
  ],
};

const years = Object.keys(meetingDocuments).sort(
  (a, b) => Number(b) - Number(a),
);

export default function GeneralMeetings() {
  const [selectedYear, setSelectedYear] = useState("2026");

  const documents = meetingDocuments[selectedYear] || [];

  return (
    <main>
      <InvestorHero title="General Meetings" />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-18">
          {/* Heading */}
          <div className="mb-10">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#F05825]">
              DOCUMENTS & PUBLICATIONS
            </span>

            <h2 className="text-2xl font-semibold text-[#412001] sm:text-3xl">
              General Meeting Documents
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
                    : "border border-black bg-white text-black hover:border-orange-500 hover:bg-orange-500 hover:text-white"
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
              {documents.map((document, index) => (
                <article
                  key={document.file}
                  className="group relative overflow-hidden rounded-2xl border border-black/8 bg-[#FAF9F7] transition-all duration-300 hover:border-orange-500 hover:shadow-[0_15px_45px_-20px_rgba(65,32,1,0.18)]"
                >
                  <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10">
                    <div className="flex items-start gap-5">
                      <div className="flex rounded-xl h-14 w-14 shrink-0 items-center justify-center bg-orange-100 text-orange-500 sm:h-16 sm:w-16">
                        <FileText size={29} strokeWidth={1.6} />
                      </div>

                      <div className="min-w-0">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#A3988D]">
                          GENERAL MEETINGS - {selectedYear}
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
                No General Meeting documents were included for {selectedYear}.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
