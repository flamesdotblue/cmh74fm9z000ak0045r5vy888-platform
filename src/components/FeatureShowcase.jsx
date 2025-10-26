import React from "react";
import { BookOpen, Store, FileText, Play, BadgeCheck } from "lucide-react";

const copy = {
  en: {
    encyclopedia: { title: "The Kisan Lab Encyclopedia", desc: "Crop guides, fertilizer dosage, pests & disease control." },
    mandi: { title: "Daily Mandi Rates", desc: "Live prices from Agmarknet & eNAM with trends." },
    schemes: { title: "Government Schemes Portal", desc: "Eligibility, benefits, and apply links." },
    videos: { title: "Video Learning Hub", desc: "ICAR tutorials, organic farming, pest management." },
    points: [
      "CIB&RC-compliant pesticide listings with PHI",
      "Stage-wise fertilizer schedules",
      "IMD-linked sowing & harvest windows",
      "Buyer directory & eNAM guidance",
    ],
  },
  hi: {
    encyclopedia: { title: "द किसान लैब विश्वकोश", desc: "फसल गाइड, खाद मात्रा, कीट व रोग प्रबंधन।" },
    mandi: { title: "दैनिक मंडी भाव", desc: "Agmarknet व eNAM से लाइव भाव व ट्रेंड।" },
    schemes: { title: "सरकारी योजनाएँ", desc: "पात्रता, लाभ व आवेदन लिंक।" },
    videos: { title: "वीडियो लर्निंग हब", desc: "ICAR ट्यूटोरियल, जैविक खेती, कीट प्रबंधन।" },
    points: [
      "CIB&RC-अनुमोदित कीटनाशी व PHI",
      "चरणवार उर्वरक अनुसूची",
      "IMD-आधारित बुआई/कटाई समय",
      "खरीदार डायरेक्टरी व eNAM मार्गदर्शन",
    ],
  },
};

function Card({ icon, title, desc, href }) {
  return (
    <a
      href={href}
      className="group block rounded-2xl border border-emerald-900/10 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1E5631] text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1E5631]">{title}</h3>
          <p className="mt-1 text-sm text-gray-700">{desc}</p>
          <span className="mt-3 inline-block text-sm font-medium text-[#1E5631]">Learn more →</span>
        </div>
      </div>
    </a>
  );
}

export default function FeatureShowcase({ lang }) {
  const t = copy[lang];
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <div id="encyclopedia" className="grid gap-6 md:grid-cols-2">
        <Card icon={<BookOpen className="h-6 w-6" />} title={t.encyclopedia.title} desc={t.encyclopedia.desc} href="#" />
        <Card icon={<Store className="h-6 w-6" />} title={t.mandi.title} desc={t.mandi.desc} href="#" />
      </div>

      <div id="schemes" className="mt-6 grid gap-6 md:grid-cols-2">
        <Card icon={<FileText className="h-6 w-6" />} title={t.schemes.title} desc={t.schemes.desc} href="#" />
        <Card icon={<Play className="h-6 w-6" />} title={t.videos.title} desc={t.videos.desc} href="#" />
      </div>

      <div id="about" className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-emerald-900/10 bg-white/80 p-6 shadow-sm backdrop-blur md:col-span-2">
          <div className="mb-2 inline-flex items-center rounded-md bg-[#F4EAD5] px-2 py-1 text-xs font-medium text-[#1E5631]">
            The Kisan Lab™ • Agri Testing & Advisory
          </div>
          <h3 className="text-xl font-semibold text-[#1E5631]">Why farmers choose us</h3>
          <ul className="mt-4 grid list-none gap-3 pl-0 text-sm text-gray-700 md:grid-cols-2">
            {t.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <BadgeCheck className="mt-[2px] h-4 w-4 text-[#1E5631]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-900/10 bg-gradient-to-br from-white to-[#F4EAD5]/60 p-6 shadow-sm">
          <h4 className="text-base font-semibold text-[#1E5631]">Contact</h4>
          <div className="mt-3 space-y-2 text-sm">
            <a className="text-[#1E5631] hover:underline" href="mailto:farmers@thekisanlab.com">farmers@thekisanlab.com</a>
            <div>+91 97194 44666</div>
            <div className="text-xs text-gray-600">90-91 Aroan Road, NH19 Bypass, Opp Praveen Resort, Sirsaganj, Firozabad – 283151 (U.P.)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
