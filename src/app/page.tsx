```typescript
'use client'
import { useState } from 'react'
import { MapPin, Sparkles, Trophy, Mail, Menu, X } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1B4F72]">BLT Borkum</div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden sm:flex gap-6">
            <a href="#problem" className="text-gray-600 hover:text-[#1B4F72]">Problem</a>
            <a href="#features" className="text-gray-600 hover:text-[#1B4F72]">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-[#1B4F72]">Pricing</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#1B4F72] via-[#2C6B94] to-[#27AE60] p-12 sm:p-20 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">Schluss mit Urlaubsstress – Borkum smart erleben</h1>
              <p className="text-xl sm:text-2xl mb-8 opacity-90">Die Gäste-App mit KI-Concierge, die jeden Inselmoment perfekt macht</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ihre@email.de" required className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-[#27AE60]" />
                <button type="submit" className="px-8 py-4 bg-[#27AE60] hover:bg-[#229954] rounded-full font-semibold whitespace-nowrap transition-all transform hover:scale-105">
                  {submitted ? '✓ Gesendet!' : 'Demo anfragen'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#1B4F72]">Was Urlaubsgäste heute frustriert</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Suche-Anstrengung', desc: 'Gezeitenkalender, Veranstaltungen, Restaurants – alles über 5 verschiedene Quellen verstreut' },
              { title: 'Reizüberflutung', desc: '100+ Aktivitäten ohne Filterung: Was passt bei diesem Wetter wirklich zu mir?' },
              { title: 'Aktivitätsplanung', desc: 'Keine spontanen Empfehlungen – „Was kann ich jetzt gerade machen?" bleibt unbeantwortet' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-2xl">⚠️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#1B4F72]">BLT Borkum vs. bisherige Lösungen</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B4F72]">
                  <th className="text-left p-4 font-semibold">Funktion</th>
                  <th className="text-center p-4 font-semibold text-[#27AE60]">BLT Borkum</th>
                  <th className="text-center p-4 font-semibold text-gray-400">KurkartenApp</th>
                  <th className="text-center p-4 font-semibold text-gray-400">Print</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['KI-Empfehlungen in Echtzeit', true, false, false],
                  ['Gamification & Loyalty', true, false, false],
                  ['Offline-Inselkarte', true, false, true],
                  ['Personalisierung', true, false, false]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="p-4">{row[0]}</td>
                    <td className="text-center p-4">{row[1] ? '✓' : '–'}</td>
                    <td className="text-center p-4 text-gray-400">{row[2] ? '✓' : '–'}</td>
                    <td className="text-center p-4 text-gray-400">{row[3] ? '✓' : '–'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#1B4F72]">3 Features, die den Unterschied machen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: 'KI-Concierge', desc: 'Antwortet auf „Was kann ich jetzt machen?" – passend zu Wetter, Gezeiten & persönlichen Vorlieben' },
              { icon: MapPin, title: 'Hyperlokale Inselkarte', desc: 'Offline verfügbar, mit Vogelbrutgebieten, versteckten Stränden und Echtzeit-Auslastung' },
              { icon: Trophy, title: 'Insel-Champion-System', desc: 'Sammle Punkte für Besuche, löse Challenges und erhalte exklusive Partner-Rabatte' }
            ].map((feat, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#1B4F72] rounded-2xl flex items-center justify-center">
                  <feat.icon size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feat.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#1B4F72]">Was Gäste sagen</h2>
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B4F72] to-[#27AE60] flex-shrink-0"></div>
              <div>
                <div className="font-bold text-lg">Familie Schneider</div>
                <div className="text-gray-500">4. Borkum-Urlaub</div>
              </div>
            </div>
            <p className="text-lg text-gray-700 italic mb-4">„Endlich keine Excel-Liste mehr für Gezeitenzeiten! Die App hat uns spontan zum Seehund-Spot gelotst – unsere Kinder waren begeistert. Das Punkte-System motiviert sogar die Teenies."</p>
            <div className="text-[#27AE60] text-2xl">★★★★★</div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#1B4F72]">Transparente Preise für Destinationen</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-6 text-[#1B4F72]">2.500€<span className="text-lg font-normal text-gray-500">/Monat</span></div>
              <ul className="space-y-3 mb-8">
                {['Basis-App (iOS + Android)', 'KI-Concierge (bis 10k Anfragen/Monat)', 'Offline-Karte', 'Standard-Support'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#27AE60] mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 rounded-full font-semibold transition-colors">Kontakt aufnehmen</button>
            </div>
            <div className="bg-gradient-to-br from-[#1B4F72] to-[#27AE60] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white text-[#1B4F72] px-4 py-1 rounded-full text-sm font-bold">Empfohlen</div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">4.900€<span className="text-lg font-normal opacity-90">/Monat</span></div>
              <ul className="space-y-3 mb-8">
                {['Alles aus Starter', 'White-Label-Branding', 'Gamification + Loyalty', 'Partner-Dashboard mit Analytics', 'Prioritäts-Support'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-white text-[#1B4F72] hover:bg-gray-100 rounded-full font-semibold transition-colors">Jetzt starten</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1B4F72] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Bereit für die digitale Destination?</h3>
          <p className="mb-8 opacity-90">Lassen Sie uns Ihre Insel zum smartesten Urlaubsziel im Norden machen.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ihre@email.de" required className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-[#27AE60]" />
            <button type="submit" className="px-8 py-4 bg-[#27AE60] hover:bg-[#229954] rounded-full font-semibold whitespace-nowrap transition-all">
              {submitted ? '✓ Gesendet!' : 'Demo anfragen'}
            </button>
          </form>
          <div className="border-t border-white/20 pt-8 text-sm opacity-75">
            <p>Powered by Trehl AI © 2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
```