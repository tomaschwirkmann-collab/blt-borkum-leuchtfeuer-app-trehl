```typescript
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4F72] via-[#2874A6] to-[#27AE60]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Schluss mit Suche-Stress auf Borkum
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Die intelligente Gäste-App mit KI-Concierge, Inselkarte & Gamification – für unvergessliche Urlaube
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ihre@email.de"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg"
            />
            <button type="submit" className="px-8 py-4 bg-[#27AE60] hover:bg-[#229954] rounded-lg font-semibold text-lg transition">
              {submitted ? 'Gesendet!' : 'Demo anfragen'}
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1B4F72]">
            Die täglichen Herausforderungen Ihrer Gäste
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Suche-Anstrengung', desc: 'Fragmente aus Print, Webseiten und Apps – keine zentrale Anlaufstelle für aktuelle Infos' },
              { title: 'Reizüberflutung', desc: 'Zu viele Optionen ohne Personalisierung führen zu Entscheidungsmüdigkeit' },
              { title: 'Aktivitätsplanung', desc: 'Tide-Zeiten, Wetter, Events – alles manuell koordinieren kostet wertvolle Urlaubszeit' }
            ].map((problem, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border-2 border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-[#1B4F72]">{problem.title}</h3>
                <p className="text-gray-700 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1B4F72]">
            Warum BLT Borkum die Lösung ist
          </h2>
          <div className="bg-gradient-to-br from-[#1B4F72] to-[#27AE60] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Alte Lösung (KurkartenApp)</h3>
                <ul className="space-y-3 opacity-90">
                  <li>✗ Nur Basisfunktionen</li>
                  <li>✗ Keine Personalisierung</li>
                  <li>✗ Statische Print-Infos</li>
                  <li>✗ Keine Wiederkehr-Anreize</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">BLT Borkum App</h3>
                <ul className="space-y-3">
                  <li>✓ KI-Concierge mit Kontext</li>
                  <li>✓ Loyalty & Gamification</li>
                  <li>✓ Echtzeit-Empfehlungen</li>
                  <li>✓ Tide-, Wetter-, Event-Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1B4F72]">
            Features, die begeistern
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: MapPin, title: 'Smarte Inselkarte', desc: 'Hyperlokale Navigation mit Tide-Zeiten, Brutgebieten und Live-Wetter' },
              { icon: Sparkles, title: 'KI-Concierge', desc: 'Personalisierte Empfehlungen basierend auf Wetter, Vorlieben und Verfügbarkeit' },
              { icon: Trophy, title: 'Loyalty & Gamification', desc: 'Punkte sammeln, Abzeichen freischalten, Rabatte bei Partnern erhalten' }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#27AE60] text-white mb-6">
                  <feature.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1B4F72]">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1B4F72]">
            Was Gäste sagen
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-2 border-gray-100">
            <p className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
              "Endlich alle Infos an einem Ort! Der KI-Concierge hat uns bei Regenwetter perfekte Indoor-Alternativen vorgeschlagen. Die Kinder lieben die Gamification – wir kommen definitiv wieder!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B4F72] to-[#27AE60]" />
              <div>
                <p className="font-bold text-lg text-[#1B4F72]">Familie Schneider</p>
                <p className="text-gray-600">Wiederkehrer aus Hamburg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1B4F72]">
            Investition & Pakete
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Starter', price: '15.000', features: ['Native App (iOS + Android)', 'Basis-Inselkarte', 'Event-Kalender', 'Push-Benachrichtigungen', '3 Monate Support'] },
              { name: 'Pro', price: '35.000', features: ['Alles aus Starter', 'KI-Concierge mit GPT-4', 'Loyalty & Gamification', 'B2B-Partner-Dashboard', '12 Monate Premium-Support'], highlight: true }
            ].map((tier, i) => (
              <div key={i} className={`p-8 rounded-2xl ${tier.highlight ? 'bg-gradient-to-br from-[#1B4F72] to-[#27AE60] text-white shadow-2xl scale-105' : 'bg-white border-2 border-gray-200'}`}>
                <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{tier.price}€</span>
                  <span className={tier.highlight ? 'opacity-90' : 'text-gray-600'}> einmalig</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className={`flex-shrink-0 mt-1 ${tier.highlight ? 'text-white' : 'text-[#27AE60]'}`} size={20} />
                      <span className={tier.highlight ? '' : 'text-gray-700'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-semibold text-lg transition ${tier.highlight ? 'bg-white text-[#1B4F72] hover:bg-gray-100' : 'bg-[#1B4F72] text-white hover:bg-[#154360]'}`}>
                  Beratung buchen
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 bg-[#1B4F72] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="inline-block mb-4" size={48} />
          <h2 className="text-3xl font-bold mb-4">Bereit für die digitale Zukunft?</h2>
          <p className="text-xl mb-8 opacity-90">Lassen Sie uns Ihre Gäste begeistern</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ihre@email.de"
              required
              className="flex-1 px-6 py-3 rounded-lg text-gray-900"
            />
            <button type="submit" className="px-8 py-3 bg-[#27AE60] hover:bg-[#229954] rounded-lg font-semibold transition">
              Kontakt aufnehmen
            </button>
          </form>
          <p className="text-sm opacity-75">Powered by Trehl AI</p>
        </div>
      </footer>
    </main>
  )
}