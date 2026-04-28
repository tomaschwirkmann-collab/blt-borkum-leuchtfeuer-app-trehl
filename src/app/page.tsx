'use client'

import { useState } from 'react'
import { MapPin, Sparkles, Trophy, Mail, Check } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4F72] via-[#2874A6] to-[#27AE60] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(39,174,96,0.3),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Schluss mit Reiseführer-Stress auf Borkum
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Die intelligente Gäste-App mit KI-Concierge, Gamification und Loyalty-Punkten – für Urlauber, die mehr erleben wollen
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ihre@email.de"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-[#27AE60]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#27AE60] hover:bg-[#229954] rounded-lg font-semibold text-lg transition-colors whitespace-nowrap"
            >
              {submitted ? 'Gesendet!' : 'Demo anfragen'}
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1B4F72]">
            Drei Probleme, die jeden Inselurlaub belasten
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Suche-Anstrengung', desc: 'Gäste verlieren Stunden mit Print-Katalogen, touristinfo.de und Google – ohne zu wissen, was gerade wirklich passt.' },
              { title: 'Reizüberflutung', desc: '127 Restaurants, 43 Aktivitäten, 12 Veranstaltungen – ohne Filter verliert man den Überblick und verpasst die Highlights.' },
              { title: 'Aktivitätsplanung', desc: 'Tide-Zeiten, Wetter, Auslastung: Die perfekte Wattwanderung zu finden, ist Glückssache statt intelligente Empfehlung.' }
            ].map((problem, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border-2 border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-red-600">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{problem.title}</h3>
                <p className="text-gray-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#1B4F72]">
            Warum BLT Borkum die Kurkarten-App ablöst
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Während die alte App nur Check-Ins abbildet, liefert BLT personalisierte Echtzeitempfehlungen
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead className="bg-[#1B4F72] text-white">
                <tr>
                  <th className="p-4 text-left">Funktion</th>
                  <th className="p-4 text-center">Kurkarten-App</th>
                  <th className="p-4 text-center">BLT Borkum</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'KI-Concierge mit Tide/Wetter', old: false, new: true },
                  { feature: 'Gamification & Loyalty-Punkte', old: false, new: true },
                  { feature: 'Offline-Inselkarte', old: false, new: true },
                  { feature: 'Echtzeit-Push bei Verfügbarkeit', old: false, new: true }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center">{row.old ? <Check className="mx-auto text-[#27AE60]" /> : <span className="text-gray-300">—</span>}</td>
                    <td className="p-4 text-center"><Check className="mx-auto text-[#27AE60]" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[#1B4F72] to-[#27AE60] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Drei Features, die Ihre Gäste lieben werden
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Sparkles, title: 'KI-Concierge', desc: 'Fragt nach Stimmung, Wetter-Präferenz und Tideplan – und schlägt die perfekte Wattwanderung vor' },
              { Icon: MapPin, title: 'Live-Inselkarte', desc: 'Zeigt freie Strandkörbe, aktuelle Vogel-Hotspots und Restaurant-Auslastung in Echtzeit' },
              { Icon: Trophy, title: 'Loyalty-Game', desc: 'Punkte für Check-Ins, Bewertungen und Challenges – einlösbar bei lokalen Partnern' }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1B4F72]">
            Das sagen erste Tester
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-2 border-[#27AE60]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1B4F72] to-[#27AE60] rounded-full flex-shrink-0" />
              <div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                  „Endlich muss ich nicht mehr drei Websites durchforsten, um zu wissen, ob die Seehundbank heute erreichbar ist. Die App hat mir 10 Minuten vor der Tour gesagt: ‚Tide passt, Wind optimal' – genial!"
                </p>
                <p className="font-bold text-[#1B4F72]">Sandra M., 38</p>
                <p className="text-gray-500">Wiederkehrer-Gast seit 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#1B4F72]">
            Einfach starten – ohne Risiko
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pilotphase mit 500 Gästen, dann Skalierung. Keine Setup-Gebühren.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Starter', price: '2.400', features: ['Basis-KI-Concierge', 'Offline-Karte', 'Loyalty-Punkte', 'Dashboard mit Basismetriken', 'Email-Support'] },
              { name: 'Pro', price: '4.900', features: ['Alle Starter-Features', 'Echtzeit-Verfügbarkeit (API)', 'Gamification-Challenges', 'Predictive Analytics', 'Priority-Support + Onboarding'], highlight: true }
            ].map((tier, i) => (
              <div key={i} className={`bg-white p-8 rounded-2xl ${tier.highlight ? 'ring-4 ring-[#27AE60] shadow-xl' : 'shadow-sm'}`}>
                {tier.highlight && <div className="bg-[#27AE60] text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">Empfohlen</div>}
                <h3 className="text-2xl font-bold mb-2 text-[#1B4F72]">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{tier.price}€</span>
                  <span className="text-gray-500">/Monat</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-semibold transition-colors ${tier.highlight ? 'bg-[#27AE60] hover:bg-[#229954] text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                  Angebot anfordern
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1B4F72] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für die Zukunft des Inseltourismus?</h2>
          <p className="text-white/80 mb-8">Lassen Sie uns Ihre Vision besprechen – unverbindlich und vertraulich.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ihre@email.de"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-[#27AE60]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#27AE60] hover:bg-[#229954] rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {submitted ? 'Gesendet!' : 'Kontakt'}
            </button>
          </form>
          <p className="text-white/60 text-sm">Powered by Trehl AI</p>
        </div>
      </footer>
    </main>
  )
}