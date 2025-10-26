import React from "react";
import { Droplets, FlaskConical, Smartphone, Search, ChevronRight } from "lucide-react";

const copy = {
  en: {
    headline: "India’s Most Trusted Agri Testing & Advisory Platform",
    sub: "Accurate soil & water testing, crop-wise guidance, mandi rates, and government schemes — in one simple app.",
    soil: "Test Soil @ ₹ 99",
    water: "Water Test @ ₹ 49",
    whatsapp: "Get Free Advisory on WhatsApp",
    searchPH: "Search Crop, Pest or Market Name…",
    ticker: "Live: Weather alerts • Mandi rates • ICAR updates",
  },
  hi: {
    headline: "भारत का सबसे भरोसेमंद एग्री टेस्टिंग और सलाह प्लेटफॉर्म",
    sub: "मिट्टी/पानी परीक्षण, फसल मार्गदर्शिका, मंडी भाव और सरकारी योजनाएँ — सब कुछ एक ऐप में।",
    soil: "मिट्टी जाँच @ ₹ 99",
    water: "पानी जाँच @ ₹ 49",
    whatsapp: "व्हाट्सएप पर मुफ्त सलाह लें",
    searchPH: "फसल, कीट या बाजार नाम खोजें…",
    ticker: "लाइव: मौसम चेतावनी • मंडी भाव • ICAR अपडेट",
  },
};

export default function Hero({ lang }) {
  const t = copy[lang];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#F4EAD5]/40 to-white" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-10 md:grid-cols-2 md:items-center md:gap-10 md:px-6 md:pt-14">
        <div>
          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-[#1E5631] sm:text-3xl md:text-4xl">
            {t.headline}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-700 md:text-lg">{t.sub}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              id="test"
              href="#test"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1E5631] px-4 py-2.5 text-white shadow hover:opacity-95"
            >
              <FlaskConical className="h-5 w-5" /> {t.soil}
            </a>
            <a
              href="#test"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1E5631] bg-white px-4 py-2.5 text-[#1E5631] hover:bg-[#F4EAD5]"
            >
              <Droplets className="h-5 w-5" /> {t.water}
            </a>
            <a
              href="https://wa.me/919719444666?text=Hi%20TKL%2C%20I%20need%20advisory"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FFD600] px-4 py-2.5 text-[#1B1B1B] hover:bg-yellow-400"
            >
              <Smartphone className="h-5 w-5" /> {t.whatsapp}
            </a>
          </div>

          <div className="mt-6 flex items-center rounded-md border bg-white p-2 shadow-sm">
            <Search className="mx-2 h-5 w-5 text-gray-500" />
            <input
              aria-label="Global search"
              placeholder={t.searchPH}
              className="w-full bg-transparent p-2 outline-none"
            />
            <button className="inline-flex items-center gap-1 rounded-md bg-[#1E5631] px-3 py-2 text-sm text-white hover:opacity-95">
              Search <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 overflow-hidden rounded-md border bg-[#1E5631] p-2 text-sm text-white">
            <div className="animate-pulse whitespace-nowrap">{t.ticker}</div>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border shadow-sm">
            <img
              alt="Farmer in field"
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 rounded-md bg-white/90 p-3 text-sm text-[#1B1B1B] shadow">
              <div className="font-medium">The Kisan Lab App</div>
              <div className="text-xs text-gray-600">TKL ID • Soil/Water Reports • Advisory • Scheme Alerts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
