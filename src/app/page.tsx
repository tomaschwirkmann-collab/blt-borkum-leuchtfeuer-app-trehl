```typescript
'use client'

import { useState } from 'react'
import { Map, Search, Zap, Gift, Brain, TrendingUp, MessageSquare, Star } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1B4F72]">BLT Borkum</div>
          <button className="bg-[#27AE60] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#229954] transition-colors">
            Demo anfragen
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1B4F72] via-[#2E86AB] to-[#27AE60]"></div>
            <div className="relative px-8 py-20 sm:px-16 sm:py-32 text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                300.000 Gäste suchen.<br />Sie finden nicht.
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Die erste KI-gestützte Gäste-App, die Borkum-Urlauber von Suchstress befreit – mit personalisiertem Concierge, Gamification und echten Wiederkehr-Anreizen.
              </p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ihre.email@beispiel.de"
                  required
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-[#27AE60]/50"
                />
                <button
                  type="submit"
                  className="bg-[#27AE60] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#229954] transition-colors whitespace-nowrap"
                >
                  Jetzt starten
                </button>
              </form>
              {submitted && (
                <div className="mt-4 text-white font-semibold">
                  ✓ Vielen Dank! Wir melden uns in Kürze.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#1B4F72] mb-4">
            Das Problem heute
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Ihre Gäste verbringen die ersten 2 Urlaubstage mit Planung statt Entspannung
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Suche-Anstrengung</h3>
              <p className="text-gray-600 leading-relaxed">
                Gäste durchforsten 5+ Websites, rufen die Touristinfo an und fragen im Hotel nach – nur um ein kinderfreundliches Restaurant bei Regenwetter zu finden.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reizüberflutung</h3>
              <p className="text-gray-600 leading-relaxed">
                150+ Aktivitäten, 40+ Restaurants, wechselnde Gezeiten – ohne Filter fühlt sich jeder Urlaubstag wie eine Entscheidungs-Schlacht an.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aktivitätsplanung</h3>
              <p className="text-gray-600 leading-relaxed">
                Tide passt nicht zur Strandwanderung, Vogelschutzgebiet gesperrt, Wunsch-Restaurant ausgebucht – spontan umplanen ist ohne Live-Daten unmöglich.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#1B4F72] mb-16">
            Warum bestehende Lösungen scheitern
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-bold text-gray-900 border-b-2 border-gray-300">Kriterium</th>
                  <th className="p-4 text-center font-bold text-gray-900 border-b-2 border-gray-300">Kurkarten-App</th>
                  <th className="p-4 text-center font-bold text-gray-900 border-b-2 border-gray-300">Print-Reiseführer</th>
                  <th className="p-4 text-center font-bold text-[#27AE60] border-b-2 border-[#27AE60]">BLT Borkum App</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-gray-900">Personalisierte Empfehlungen</td>
                  <td className="p-4 text-center text-red-600">✗</td>
                  <td className="p-4 text-center text-red-600">✗</td>
                  <td className="p-4 text-center text-[#27AE60] text-xl">✓</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Echtzeit-Daten (Tide, Wetter)</td>
                  <td className="p-4 text-center text-orange-600">Teilweise</td>
                  <td className="p-4 text-center text-red-600">✗</td>
                  <td className="p-4 text-center text-[#27AE60] text-xl">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-gray-900">Loyalty-Programm</td>
                  <td className="p-4 text-center text-red-600">✗</td>
                  <td className="p-4 text-center text-red-600">✗</td>
                  <td className="p-4 text-center text-[#27AE60] text-xl">✓</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">KI-Concierge</td>
                  <td className="p-4 text-center text-red-600">✗</td>
                  <td className="p-4 text-center text-red-600">✗</td>
                  <td className="p-4 text-center text-[#27AE60] text-xl">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-gray-900">Gamification & Challenges</td>
                  <td className="p-4 text-center text-red-600">✗</td>
                  <td className="p-4 text-center text-red-600">✗</td>
                  <td className="p-4 text-center text-[#27AE60] text-xl">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">B2B-Analytics für Partner</td>
                  <td className="p-4 text-center text-red-600">✗</td>
                  <td className="p-4 text-center text-red-600">✗</td>
                  <td className="p-4 text-center text-[#27AE60] text-xl">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#1B4F72] mb-4">
            Funktionen, die begeistern
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Entwickelt für Urlaubsgäste – optimiert für Wiederkehr
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#1B4F72] rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">KI-Concierge "Bosse"</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stellen Sie Fragen in natürlicher Sprache: "Wo kann ich bei Regen mit 2 Kindern hin?" – Bosse berücksichtigt Wetter, Öffnungszeiten, Ihre bisherigen Vorlieben und Tide-Zeiten in Echtzeit.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#27AE60] rounded-2xl flex items-center justify-center">
                  <Gift className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Loyalty & Rewards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sammeln Sie Inselpunkte für Check-ins, Restaurant-Bewertungen und absolvierte Challenges. Lösen Sie sie ein für Rabatte bei Partnern oder exklusive Erlebnisse beim nächsten Besuch.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#1B4F72] rounded-2xl flex items-center justify-center">
                  <Map className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Hyperlokale Inselkarte</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sehen Sie auf einen Blick: aktuelle Tide-Stände, Vogelschutz-Status, Fahrrad-Verfügbarkeit, Live-Auslastung an Stränden. Mit Offline-Modus für Touren im Naturschutzgebiet.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#27AE60] rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Gamification Challenges</h3>
                <p className="text-gray-600 leading-relaxed">
                  "Entdecke alle 3 Leuchttürme", "Probiere 5 lokale Spezialitäten" – spielerische Missionen machen Ihren Urlaub zum Abenteuer und erhöhen die Aufenthaltsdauer messbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B4F72]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-white mb-16">
            Das sagen erste Nutzer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-[#27AE60] text-[#27AE60]" />
                ))}
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                "Endlich keine 20 Tabs mehr im Browser! Die KI hat uns innerhalb von 30 Sekunden drei perfekte Restaurants für unser Budget vorgeschlagen – inklusive Kindermenü und aktueller Wartezeit."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#27AE60] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SK
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah K.</div>
                  <div className="text-white/70">Familie aus Hamburg, 2. Borkum-Besuch</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-[#27AE60] text-[#27AE60]" />
                ))}
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                "Die Challenges sind genial! Wir haben Orte entdeckt, die wir sonst nie gesehen hätten. Die 50 Inselpunkte vom letzten Mal haben uns dieses Jahr einen Rabatt bei der Wattwanderung gebracht."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#27AE60] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  MT
                </div>
                <div>
                  <div className="text-white font-semibold">Michael T.</div>
                  <div className="text-white/70">Stamm-Gast aus NRW, 8. Besuch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#1B4F72] mb-4">
            Transparente Preise
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Wählen Sie das Modell, das zu Ihrer Destination passt
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#1B4F72] transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1B4F72]">2.900€</span>
                <span className="text-gray-600">/Monat</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#27AE60] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Basis KI-Concierge</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#27AE60] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Inselkarte mit Echtzeit-Daten</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#27AE60] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Bis 5 Partner-Integrationen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#27AE60] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Basis-Analytics Dashboard</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Angebot anfordern
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#1B4F72] to-[#27AE60] p-8 rounded-2xl border-2 border-[#27AE60] shadow-xl transform md:scale-105">
              <div className="bg-[#27AE60] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                EMPFOHLEN
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">5.900€</span>
                <span className="text-white/80">/Monat</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#27AE60] text-xs">✓</span>
                  </div>
                  <span className="text-white">Alles aus Starter</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#27AE60] text-xs">✓</span>
                  </div>
                  <span className="text-white">Gamification & Challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#27AE60] text-xs">✓</span>
                  </div>
                  <span className="text-white">Loyalty-System mit Rewards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#27AE60] text-xs">✓</span>
                  </div>
                  <span className="text-white">Unbegrenzte Partner</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#27AE60] text-xs">✓</span>
                  </div>
                  <span className="text-white">Erweiterte B2B-Analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#27AE60] text-xs">✓</span>
                  </div>
                  <span className="text-white">White-Label Branding</span>
                </li>
              </ul>
              <button className="w-full bg-white text-[#1B4F72] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Jetzt starten
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#1B4F72] transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1B4F72]">Individuell</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#27AE60] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Alles aus Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#27AE60] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Dedizierter Account Manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#27AE60] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Custom Feature-Entwicklung</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#27AE60] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">API-Zugang für Drittsysteme</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#27AE60] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">SLA 99,9% Uptime</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1B4F72] to-[#27AE60]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Bereit für mehr zufriedene Gäste?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Werden Sie Teil der digitalen Tourismus-Revolution. Demo in 48h verfügbar.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ihre.email@borkum.de"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button
              type="submit"
              className="bg-white text-[#1B4F72] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Demo buchen
            </button>
          </form>
          {submitted && (
            <div className="mt-4 text-white font-semibold">
              ✓ Perfekt! Wir melden uns innerhalb von 24 Stunden.
            </div>
          )}
        </div>
      </section>

      <footer className="