import React from "react";
import { BookOpen, Store, CloudSun, FileText, MapPin, BadgeCheck, ArrowRight, Play } from "lucide-react";

const copy = {
  en: {
    encyclopedia: {
      title: "The Kisan Lab Encyclopedia",
      desc: "India’s most complete farming knowledge system: crop guides, fertilizer dosage, pests & disease control.",
      cta: "Explore Encyclopedia",
    },
    mandi: {
      title: "Daily Mandi Rates",
      desc: "Auto-refreshed prices from Agmarknet & eNAM. Compare modal/min/max, track 7-day trends.",
      cta: "View Mandi Rates",
    },
    schemes: {
      title: "Government Schemes Portal",
      desc: "PM-Kisan, NHB, PMFME, RKVY, PM-KUSUM and more — eligibility, benefits, how to apply.",
      cta: "Browse Schemes",
    },
    videos: {
      title: "Video Learning Hub",
      desc: "Curated ICAR tutorials, organic farming, pest management, success stories.",
      cta: "Watch Videos",
    },
    about: {
      title: "About TKL",
      desc: "Soil Testing • Water Testing • Advisory • Market Access. Backed by ICAR, IMD & Agmarknet data.",
      cta: "Know More",
    },
    highlights: [
      "CIB&RC-compliant pesticide listings with PHI",
      "Stage-wise fertilizer schedules",
      "IMD-linked sowing & harvest windows",
      "Buyer directory & eNAM guidance",
    ],
  },
  hi: {
    encyclopedia: {
      title: "द किसान लैब विश्वकोश",
      desc: "भारत का सबसे संपूर्ण कृषि ज्ञान सिस्टम: फसल गाइड, खाद मात्रा, कीट व रोग प्रबंधन।",
      cta: "विश्वकोश देखें",
    },
    mandi: {
      title: "दैनिक मंडी भाव",
      desc: "Agmarknet व eNAM से भाव अपडेट। मिन/मैक्स/मॉडल की तुलना व ट्रेंड।",
      cta: "मंडी भाव देखें",
    },
    schemes: {
      title: "सरकारी योजनाएँ",
      desc: "PM-Kisan, NHB, PMFME, RKVY, PM-KUSUM आदि – पात्रता, लाभ, आवेदन प्रक्रिया।",
      cta: "योजनाएँ ब्राउज़ करें",
    },
    videos: {
      title: "वीडियो लर्निंग हब",
      desc: "ICAR ट्यूटोरियल, जैविक खेती, कीट प्रबंधन व सफलता कहानियाँ।",
      cta: "वीडियो देखें",
    },
    about: {
      title: "टीकेएल के बारे में",
      desc: "मिट्टी/पानी परीक्षण • सलाह • बाजार पहुँच। ICAR, IMD व Agmarknet डेटा द्वारा समर्थित।",
      cta: "और जानें",
    },
    highlights: [
      "CIB&RC-अनुमोदित कीटनाशी व PHI",
      "चरणवार उर्वरक अनुसूची",
      "IMD-आधारित बुआई व कटाई समय",
      "खरीदार डायरेक्टरी व eNAM मार्गदर्शन",
    ],
  },
};

export default function FeaturesSections({ lang }) {
  const t = copy[lang];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <div id="encyclopedia" className="grid gap-6 md:grid-cols-2">
        <Card
          icon={<BookOpen className="h-6 w-6" />}
          title={t.encyclopedia.title}
          desc={t.encyclopedia.desc}
          cta={t.encyclopedia.cta}
          href="#encyclopedia"
        />
        <Card
          id="mandi"
          icon={<Store className="h-6 w-6" />}
          title={t.mandi.title}
          desc={t.mandi.desc}
          cta={t.mandi.cta}
          href="#mandi"
        />
      </div>

      <div id="schemes" className="mt-6 grid gap-6 md:grid-cols-2">
        <Card
          icon={<FileText className="h-6 w-6" />}
          title={t.schemes.title}
          desc={t.schemes.desc}
          cta={t.schemes.cta}
          href="#schemes"
        />
        <Card
          id="videos"
          icon={<Play className="h-6 w-6" />}
          title={t.videos.title}
          desc={t.videos.desc}
          cta={t.videos.cta}
          href="#videos"
        />
      </div>

      <div id="about" className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm md:col-span-2">
          <div className="mb-2 inline-flex items-center rounded-md bg-[#F4EAD5] px-2 py-1 text-xs font-medium text-[#1E5631]">
            The Kisan Lab™ • Agri Testing & Advisory
          </div>
          <h3 className="text-xl font-semibold text-[#1E5631]">{t.about.title}</h3>
          <p className="mt-2 text-gray-700">{t.about.desc}</p>
          <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-gray-700 md:grid-cols-2">
            {t.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <BadgeCheck className="mt-[2px] h-4 w-4 text-[#1E5631]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a href="#contact" className="inline-flex items-center gap-2 text-[#1E5631] hover:underline">
              {t.about.cta} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-white to-[#F4EAD5]/60 p-6 shadow-sm">
          <h4 className="text-base font-semibold text-[#1E5631]">Operations Due This Week</h4>
          <p className="mt-1 text-sm text-gray-600">IMD/AMFU advisory snapshot</p>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <CloudSun className="mt-0.5 h-4 w-4 text-[#1E5631]" />
              <p>Light rain expected in Central UP. Plan top dressing of urea post-drizzle.</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-[#1E5631]" />
              <p>Check soil pH for potato belt (ideal 5.5–6.5). Book soil test at ₹99.</p>
            </div>
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 h-4 w-4 text-[#1E5631]" />
              <p>Follow PHI on pesticide use (observe harvest interval).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc, cta, href, id }) {
  return (
    <a
      id={id}
      href={href}
      className="group block rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1E5631] text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1E5631]">{title}</h3>
          <p className="mt-1 text-sm text-gray-700">{desc}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#1E5631]">
            {cta}
          </span>
        </div>
      </div>
    </a>
  );
}
