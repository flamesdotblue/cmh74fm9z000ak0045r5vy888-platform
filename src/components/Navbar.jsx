import React from "react";
import { Leaf, Phone, Mail, Globe } from "lucide-react";

const copy = {
  en: {
    encyclopedia: "Encyclopedia",
    testNow: "Test Now",
    mandiRates: "Mandi Rates",
    schemes: "Schemes",
    videos: "Videos",
    about: "About Us",
    contact: "Contact",
    app: "App Download",
  },
  hi: {
    encyclopedia: "विश्वकोश",
    testNow: "टेस्ट करें",
    mandiRates: "मंडी भाव",
    schemes: "सरकारी योजनाएँ",
    videos: "वीडियो",
    about: "हमारे बारे में",
    contact: "संपर्क",
    app: "ऐप डाउनलोड",
  },
};

export default function Navbar({ lang, setLang }) {
  const t = copy[lang];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1E5631] text-white">
            <Leaf className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">The Kisan Lab™</div>
            <div className="text-xs text-gray-500">Test. Treat. Thrive.</div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#encyclopedia" className="hover:text-[#1E5631]">{t.encyclopedia}</a>
          <a href="#test" className="hover:text-[#1E5631]">{t.testNow}</a>
          <a href="#mandi" className="hover:text-[#1E5631]">{t.mandiRates}</a>
          <a href="#schemes" className="hover:text-[#1E5631]">{t.schemes}</a>
          <a href="#videos" className="hover:text-[#1E5631]">{t.videos}</a>
          <a href="#about" className="hover:text-[#1E5631]">{t.about}</a>
          <a href="#contact" className="hover:text-[#1E5631]">{t.contact}</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://www.thekisanlab.in"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1 rounded-md border px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 md:flex"
            aria-label="Website"
          >
            <Globe className="h-4 w-4" />
            <span>thekisanlab.in</span>
          </a>
          <button
            onClick={() => setLang((prev) => (prev === "en" ? "hi" : "en"))}
            className="rounded-md bg-[#F4EAD5] px-3 py-1.5 text-sm font-medium text-[#1E5631] hover:bg-[#e8dcc5]"
            aria-label="Language Toggle"
          >
            {lang === "en" ? "हिंदी" : "English"}
          </button>
          <a
            href="tel:+919719444666"
            className="ml-1 hidden rounded-md bg-[#1E5631] px-3 py-1.5 text-sm font-medium text-white hover:opacity-95 md:inline-flex"
          >
            <Phone className="mr-1 h-4 w-4" /> +91 97194 44666
          </a>
        </div>
      </div>
      <div className="block border-t bg-[#1E5631] px-4 py-2 text-xs text-white md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#encyclopedia">{t.encyclopedia}</a>
            <span className="opacity-50">•</span>
            <a href="#test">{t.testNow}</a>
            <span className="opacity-50">•</span>
            <a href="#mandi">{t.mandiRates}</a>
          </div>
          <a href="mailto:farmers@thekisanlab.com" className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>farmers@thekisanlab.com</span>
          </a>
        </div>
      </div>
    </header>
  );
}
