import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";

const investorPages = [
  ["company-presentation", "Company Presentation"],
  ["general-meetings", "General Meetings"],
  ["disclosure-of-information", "The Disclosure of Information"],
  ["annual-report", "Annual Report"],
  ["financial-report", "Financial Report"],
  ["prospectus", "Prospectus"],
  ["press-release", "Press Release"],
];

function SiteLayout() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PlaceholderPage title="About" />} />
        <Route
          path="/business"
          element={<PlaceholderPage title="Business" />}
        />
        <Route path="/career" element={<PlaceholderPage title="Career" />} />
        <Route
          path="/contact"
          element={<PlaceholderPage title="Contact Us" />}
        />

        <Route
          path="/investor-relations"
          element={<PlaceholderPage title="Investor Relations" />}
        />

        {investorPages.map(([slug, title]) => (
          <Route
            key={slug}
            path={`/investor-relations/${slug}`}
            element={<PlaceholderPage title={title} />}
          />
        ))}

        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
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
