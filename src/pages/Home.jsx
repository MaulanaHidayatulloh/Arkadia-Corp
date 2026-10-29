import HomeHero from "../components/HomeHero";
import HomeMilestone from "../components/HomeMilestone";
import HomeOurMedia from "../components/HomeOurMedia";
import HomeCommunity from "../components/HomeCommunity";
import HomeAgency from "../components/HomeAgency";
import HomeEvents from "../components/HomeEvents";
import HomeSocialMedia from "../components/HomeSocialMedia";
import HomeKOL from "../components/HomeKOL";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeMilestone />
      <HomeOurMedia />
      <HomeCommunity />
      <HomeAgency />
      <HomeEvents />
      <HomeSocialMedia />
      <HomeKOL />
    </main>
  );
}
