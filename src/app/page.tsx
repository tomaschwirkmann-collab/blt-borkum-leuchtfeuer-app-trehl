'use client';
import { useState } from 'react'
import { Map, Sparkles, Trophy, Search, Calendar, Zap, Mail, Check } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-[#1B4F72]">BLT Borkum</div>
          <a href="#cta" className="text-[#1B4F72] font-medium hover:text-[#27AE60]">Kontakt</a>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4F72] via-[#2E86AB] to-[#27AE60]"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Ihre Gäste verlieren sich im Insel-Chaos?</h1>
          <p className="text-xl mb-8 opacity-90">BLT Borkum verwandelt Urlaubsstress in personalisierte Erlebnisse – mit KI-Concierge, Gamification und Echtzeit-Inselkarte.</p>
          <a href="#cta" className="inline-block bg-white text-[#1B4F72] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100">Jetzt Demo anfragen</a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Das Problem: 300.000 Gäste, null digitale Bindung</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <Search className="w-12 h-12 text-[#1B4F72] mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Suche-Anstrengung</h3>
            <p className="text-gray-600">Gäste wühlen durch Print-Flyer und Google-Ergebnisse statt entspannt zu buchen.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <Zap className="w-12 h-12 text-[#1B4F72] mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Reizüberflutung</h3>
            <p className="text-gray-600">Zu viele Optionen ohne Filter für Wetter, Tide oder persönliche Vorlieben.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <Calendar className="w-12 h-12 text-[#1B4F72] mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Aktivitätsplanung</h3>
            <p className="text-gray-600">Keine zentrale Buchung – Gäste verlassen sich auf Zufallsfunde vor Ort.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1B4F72] to-[#27AE60] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ihre KurkartenApp schafft 5% Adoption. Wir schaffen Erlebnisse.</h2>
          <p className="text-lg opacity-90 mb-8">Während Print-Reiseführer verstauben und touristinfo.de generisch bleibt, liefert BLT Borkum KI-gestützte Empfehlungen – live zu Tide, Wetter und Gäste-Profil.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Features, die Gäste zu Wiederkehrer machen</h2>
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Map className="w-16 h-16 text-[#27AE60] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Hyperlokale Inselkarte</h3>
              <p className="text-gray-600 text-lg">Echtzeit-Layer für Tide-Zeiten, Vogelbrutgebiete, Geheimtipps – statt statischer Google-Maps-Pins.</p>
            </div>
            <div className="md:w-1/2 h-64 bg-gradient-to-br from-[#1B4F72] to-[#2E86AB] rounded-xl"></div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <Sparkles className="w-16 h-16 text-[#27AE60] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">KI-Concierge</h3>
              <p className="text-gray-600 text-lg">Chatbot mit Kontext: "Sonnenuntergang heute + kinderfreundlich + vegetarisches Restaurant" in 10 Sekunden.</p>
            </div>
            <div className="md:w-1/2 h-64 bg-gradient-to-br from-[#27AE60] to-[#2E86AB] rounded-xl"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Trophy className="w-16 h-16 text-[#27AE60] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Gamification & Loyalty</h3>
              <p className="text-gray-600 text-lg">Punkte für besuchte Orte, Rabatte bei Partnern, Jahres-Badges – messbare Wiederkehr-Anreize.</p>
            </div>
            <div className="md:w-1/2 h-64 bg-gradient-to-br from-[#1B4F72] to-[#27AE60] rounded-xl"></div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-[#27AE60] rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-gray-700 text-lg mb-4">"In der Pilotphase buchten 34% mehr Gäste Wattführungen über die App als über unser Büro. Die KI-Empfehlungen treffen genau den Nerv – auch bei Schlechtwetter."</p>
                <div className="font-bold text-gray-900">Petra M.</div>
                <div className="text-gray-600">Leiterin Touristinfo (fiktiv)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Investition mit messbarem ROI</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border-2 border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Starter</h3>
            <div className="text-4xl font-bold mb-4 text-[#1B4F72]">18.500€</div>
            <p className="text-gray-600 mb-6">Einmalig + 490€/Monat Hosting</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" /><span className="text-gray-700">Native iOS + Android App</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" /><span className="text-gray-700">Basis-KI-Concierge (OpenAI)</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" /><span className="text-gray-700">Inselkarte mit 3 Live-Layern</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" /><span className="text-gray-700">Basic Gamification</span></li>
            </ul>
            <a href="#cta" className="block text-center bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800">Angebot anfordern</a>
          </div>
          <div className="border-2 border-[#27AE60] rounded-xl p-8 relative">
            <div className="absolute top-0 right-6 bg-[#27AE60] text-white px-4 py-1 rounded-b-lg text-sm font-bold">Empfohlen</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Pro</h3>
            <div className="text-4xl font-bold mb-4 text-[#1B4F72]">32.900€</div>
            <p className="text-gray-600 mb-6">Einmalig + 890€/Monat</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" /><span className="text-gray-700">Alles aus Starter</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" /><span className="text-gray-700">Custom AI-Training (Insider-Wissen)</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" /><span className="text-gray-700">Partner-Portal für Hoteliers</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" /><span className="text-gray-700">Analytics-Dashboard (DSGVO)</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" /><span className="text-gray-700">Loyalty-Integration (Cashback)</span></li>
            </ul>
            <a href="#cta" className="block text-center bg-[#27AE60] text-white py-3 rounded-lg font-bold hover:bg-[#229954]">Jetzt starten</a>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-[#1B4F72] py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <Mail className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-white">Bereit für messbare Gästebindung?</h2>
          <p className="text-lg mb-8 text-white opacity-90">Lassen Sie uns in 30 Minuten Ihre Anforderungen besprechen. Unverbindlich.</p>
          {!submitted ? (
            <div className="flex gap-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ihre.email@borkum.de" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
              <button onClick={() => setSubmitted(true)} className="bg-[#27AE60] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#229954]">Senden</button>
            </div>
          ) : (
            <div className="bg-[#27AE60] text-white px-6 py-4 rounded-lg font-bold">Danke! Wir melden uns innerhalb von 24h.</div>
          )}
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
          <p>Powered by Trehl AI – Intelligent Travel Solutions</p>
        </div>
      </footer>
    </div>
  )
}