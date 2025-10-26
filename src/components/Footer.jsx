import React from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const copy = {
  en: {
    contact: "Contact",
    rights: "Empowering Farmers with Knowledge, Science & Market Access.",
    quick: "Quick Links",
    testSoil: "Test Soil – ₹ 99",
    testWater: "Water Test – ₹ 49",
    whatsapp: "Chat on WhatsApp",
  },
  hi: {
    contact: "संपर्क",
    rights: "ज्ञान, विज्ञान और बाजार पहुँच से किसानों को सशक्त बनाना।",
    quick: "त्वरित लिंक",
    testSoil: "मिट्टी जाँच – ₹ 99",
    testWater: "पानी जाँच – ₹ 49",
    whatsapp: "व्हाट्सऐप पर चैट करें",
  },
};

export default function Footer({ lang }) {
  const t = copy[lang];

  return (
    <footer id="contact" className="mt-10 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold text-[#1E5631]">The Kisan Lab™</div>
            <p className="mt-2 text-sm text-gray-700">{t.rights}</p>
            <div className="mt-3 text-xs text-gray-600">A unit of AgriMotion Engineering Private Limited</div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-[#1E5631]" />
                <a href="mailto:farmers@thekisanlab.com" className="hover:underline">farmers@thekisanlab.com</a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-[#1E5631]" />
                <a href="tel:+919719444666" className="hover:underline">+91 97194 44666</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-[#1E5631]" />
                <span>90-91 Aroan Road, NH19 Bypass, Opp Praveen Resort, Sirsaganj, Firozabad – 283151 (U.P.)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold text-[#1E5631]">{t.quick}</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#test" className="text-[#1E5631] hover:underline">{t.testSoil}</a>
              </li>
              <li>
                <a href="#test" className="text-[#1E5631] hover:underline">{t.testWater}</a>
              </li>
              <li>
                <a href="https://wa.me/919719444666?text=Hi%20TKL%2C%20I%20need%20advisory" target="_blank" rel="noreferrer" className="text-[#1E5631] hover:underline">{t.whatsapp}</a>
              </li>
              <li>
                <a href="https://www.thekisanlab.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#1E5631] hover:underline">
                  thekisanlab.in <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-lg font-semibold text-[#1E5631]">Compliance</div>
            <ul className="mt-3 space-y-1 text-xs text-gray-600">
              <li>Data Sources: ICAR, IMD, Agmarknet, CIB&RC, NBSS&LUP, data.gov.in</li>
              <li>GSTIN: 09AAZCA0158R1ZP</li>
              <li>Residue & PHI warnings shown on pesticide tables</li>
              <li><a href="#" className="underline">Privacy Policy</a> • <a href="#" className="underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-xs text-gray-600">
          © 2025 The Kisan Lab™, a unit of AgriMotion Engineering Private Limited.
        </div>
      </div>
    </footer>
  );
}
