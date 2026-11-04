import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Career from "./pages/Career";
// import Contact from "./pages/Contact";
import CompanyPresentation from "./pages/CompanyPresentation";
import GeneralMeetings from "./pages/GeneralMeetings";
import DisclosureInformation from "./pages/DisclosureInformation";
import AnnualReport from "./pages/AnnualReport";
import FinancialReport from "./pages/FinancialReport";
import Prospectus from "./pages/Prospectus";
import PressRelease, { PressReleaseDetail } from "./pages/PressRelease";
import PlaceholderPage from "./pages/PlaceholderPage";

function SiteLayout() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />

        <Route path="/career" element={<Career />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        <Route
          path="/investor-relations"
          element={<PlaceholderPage title="Investor Relations" />}
        />

        <Route
          path="/investor-relations/company-presentation"
          element={<CompanyPresentation />}
        />

        <Route
          path="/investor-relations/general-meetings"
          element={<GeneralMeetings />}
        />

        <Route
          path="/investor-relations/disclosure-of-information"
          element={<DisclosureInformation />}
        />

        <Route
          path="/investor-relations/annual-report"
          element={<AnnualReport />}
        />

        <Route
          path="/investor-relations/financial-report"
          element={<FinancialReport />}
        />

        <Route path="/investor-relations/prospectus" element={<Prospectus />} />

        <Route
          path="/investor-relations/press-release"
          element={<PressRelease />}
        />

        <Route
          path="/investor-relations/press-release/:id"
          element={<PressReleaseDetail />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}
