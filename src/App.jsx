import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSections from "./components/FeaturesSections";
import Footer from "./components/Footer";

const App = () => {
  const [lang, setLang] = useState("en");

  return (
    <div className="min-h-screen bg-white text-[#1B1B1B]">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <FeaturesSections lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
