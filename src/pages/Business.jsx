import BusinessDigitalMedia from "../components/BusinessDigitalMedia";
import BusinessSection from "../components/BusinessSection";
import BusinessLogoSection from "../components/BusinessLogoSection";

export default function Business() {
  return (
    <>
      <BusinessDigitalMedia />
      <BusinessSection />

      <BusinessLogoSection
        title="Key Clients & Advertisers Media"
        start={6}
        end={34}
      />

      <BusinessLogoSection
        title="Regional Partner Network"
        start={36}
        end={57}
      />
    </>
  );
}
