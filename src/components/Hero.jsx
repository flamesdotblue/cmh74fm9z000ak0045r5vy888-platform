import React from "react";
import { ArrowRight, Search, Smartphone, Droplets, FlaskConical, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const copy = {
  en: {
    headline: "India’s Most Trusted Agri Testing & Advisory Platform",
    sub: "Soil & water tests, crop guides, mandi rates, and schemes — beautiful, fast, and farmer‑friendly.",
    soil: "Test Soil @ ₹ 99",
    water: "Water Test @ ₹ 49",
    whatsapp: "Free Advisory on WhatsApp",
    searchPH: "Search Crop, Pest or Market Name…",
    badge: "Powered by ICAR • IMD • Agmarknet",
  },
  hi: {
    headline: "भारत का सबसे भरोसेमंद एग्री टेस्टिंग व सलाह प्लेटफॉर्म",
    sub: "मिट्टी/पानी जाँच, फसल गाइड, मंडी भाव व योजनाएँ — तेज, सुंदर और किसान‑अनुकूल।",
    soil: "मिट्टी जाँच @ ₹ 99",
    water: "पानी जाँच @ ₹ 49",
    whatsapp: "व्हाट्सऐप पर मुफ्त सलाह",
    searchPH: "फसल, कीट या बाजार खोजें…",
    badge: "ICAR • IMD • Agmarknet द्वारा समर्थित",
  },
};

export default function Hero({ lang, logo }) {
  const t = copy[lang];
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-40 h-80 w-80 rounded-full bg-[#1E5631]/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#FFD600]/30 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F4EAD5]/40 to-white" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-10 md:grid-cols-2 md:px-6 md:pb-16 md:pt-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#1E5631]/20 bg-white/70 px-3 py-1 text-xs text-[#1E5631] backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" /> {t.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#1E5631] sm:text-4xl md:text-5xl"
          >
            {t.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-3 max-w-2xl text-base text-gray-700 md:text-lg"
          >
            {t.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <a
              id="test"
              href="#test"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tr from-[#1E5631] to-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:scale-[1.01]"
            >
              <FlaskConical className="h-5 w-5" /> {t.soil}
            </a>
            <a
              href="#test"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1E5631] bg-white px-5 py-3 text-[#1E5631] shadow-sm transition hover:bg-[#F4EAD5]"
            >
              <Droplets className="h-5 w-5" /> {t.water}
            </a>
            <a
              href="https://wa.me/919719444666?text=Hi%20TKL%2C%20I%20need%20advisory"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFD600] px-5 py-3 text-[#1B1B1B] shadow transition hover:bg-yellow-400"
            >
              <Smartphone className="h-5 w-5" /> {t.whatsapp}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-6 flex items-center overflow-hidden rounded-xl border bg-white/80 p-2 shadow-sm backdrop-blur"
          >
            <Search className="mx-2 h-5 w-5 text-gray-500" />
            <input
              aria-label="Global search"
              placeholder={t.searchPH}
              className="w-full bg-transparent p-2 outline-none"
            />
            <button className="mr-1 inline-flex items-center gap-1 rounded-lg bg-[#1E5631] px-3 py-2 text-sm text-white hover:opacity-95">
              Search <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-4 flex items-center gap-2 text-sm text-gray-600"
          >
            <Star className="h-4 w-4 text-amber-400" /> Trusted by thousands of farmers
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-emerald-900/10 bg-gradient-to-br from-white to-[#F4EAD5]/50 shadow-xl">
            <img
              alt="Farmer in field"
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-white/85 p-3 text-sm text-[#1B1B1B] shadow backdrop-blur">
              {logo ? (
                <img src={logo} alt="Logo" className="h-9 w-9 rounded-md object-cover ring-1 ring-[#1E5631]/20" />
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1E5631] text-white ring-1 ring-[#1E5631]/20">
                  <Star className="h-5 w-5" />
                </div>
              )}
              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-[#1E5631]">The Kisan Lab App</div>
                <div className="truncate text-xs text-gray-600">TKL ID • Soil/Water Reports • Advisory • Scheme Alerts</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
