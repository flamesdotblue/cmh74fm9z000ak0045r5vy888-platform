import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureShowcase from "./components/FeatureShowcase";
import LogoUploader from "./components/LogoUploader";

export default function App() {
  const [lang, setLang] = useState("en");
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("tkl_logo");
    if (saved) setLogo(saved);
  }, []);

  const updateLogo = (dataUrl) => {
    setLogo(dataUrl);
    if (dataUrl) localStorage.setItem("tkl_logo", dataUrl);
  };

  return (
    <div className="min-h-screen bg-white text-[#1B1B1B]">
      <Navbar lang={lang} setLang={setLang} logo={logo} />
      <main>
        <Hero lang={lang} logo={logo} />
        <FeatureShowcase lang={lang} />
      </main>
      <LogoUploader onChange={updateLogo} />
    </div>
  );
}
