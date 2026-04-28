import Link from 'next/link'
import { Menu, MapPin, Trophy, Sparkles, Users, MessageSquare, Gift, Check, Star, ChevronDown } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B4F72] to-[#27AE60] flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-[#1B4F72]">BLT Borkum</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#problem" className="text-gray-600 hover:text-[#1B4F72] transition">Problem</Link>
            <Link href="#solution" className="text-gray-600 hover:text-[#1B4F72] transition">Lösung</Link>
            <Link href="#features" className="text-gray-600 hover:text-[#1B4F72] transition">Features</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-[#1B4F72] transition">Preise</Link>
          </nav>
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B4F72] via-[#1B4F72] to-[#27AE60] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#27AE60] rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#27AE60] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Native App für Inseltourismus</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Verlorene Gäste, verpasste Umsätze, keine Bindung?
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-white/90 leading-relaxed">
              Verwandeln Sie Borkum-Besucher in loyale Stammgäste
            </p>
            <p className="text-lg mb-8 text-white/80 leading-relaxed">
              Mit der BLT Borkum App bekommen Ihre Gäste eine personalisierte Insel-Erfahrung: interaktive Karte, Gamification, KI-Concierge und ein Loyalty-Programm, das lokale Betriebe stärkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="inline-flex items-center justify-center px-8 py-4 bg-[#27AE60] text-white font-semibold rounded-xl hover:bg-[#229954] transition shadow-lg hover:shadow-xl">
                Kostenlos starten
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition border border-white/20">
                Features entdecken
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section id="problem" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4F72] mb-4">
              Die Herausforderungen im Inseltourismus
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Touristen kennen die Probleme — lokale Betriebe spüren die Folgen
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-[#1B4F72] mb-3">
                Orientierungslosigkeit
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gäste verlieren sich in generischen Google Maps, verpassen lokale Geheimtipps und fühlen sich überfordert von der Fülle an Optionen ohne persönliche Empfehlungen.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-[#1B4F72] mb-3">
                Keine Gästebindung
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nach dem Urlaub verschwindet der Gast spurlos. Keine Möglichkeit für Follow-ups, keine Anreize für Wiederbesuche, kein messbarer ROI aus Tourismusmarketing.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <Gift className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-[#1B4F72] mb-3">
                Fragmentierte Angebote
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rabatte, Events und Insider-Tipps erreichen Touristen nicht rechtzeitig. Lokale Betriebe kämpfen um Sichtbarkeit gegen große Plattformen mit hohen Provisionen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#27AE60]/10 text-[#27AE60] px-4 py-2 rounded-full mb-6 font-semibold">
                <Sparkles className="w-4 h-4" />
                Der Unterschied
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4F72] mb-6">
                Eine App, die Gäste begeistert und Betriebe stärkt
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Während andere Lösungen nur digitale Visitenkarten oder generische Stadtführer bieten, schafft BLT Borkum ein vernetztes Ökosystem:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#27AE60]/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#27AE60]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B4F72] mb-1">Native App-Erfahrung</h4>
                    <p className="text-gray-600">Push-Benachrichtigungen, Offline-Karten, schnelle Performance — keine mobile Website</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#27AE60]/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#27AE60]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B4F72] mb-1">KI-gestützte Personalisierung</h4>
                    <p className="text-gray-600">Empfehlungen basierend auf Interessen, Wetter, Tageszeit und bisherigem Verhalten</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#27AE60]/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#27AE60]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B4F72] mb-1">Gamification & Loyalty</h4>
                    <p className="text-gray-600">Punkte sammeln, Achievements freischalten, exklusive Rewards von lokalen Partnern</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#27AE60]/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#27AE60]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B4F72] mb-1">Provisionsfrei für lokale Betriebe</h4>
                    <p className="text-gray-600">Fixe monatliche Gebühr statt 15-30% Provision wie bei Booking & Co.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#1B4F72] via-[#27AE60] to-[#1B4F72] p-8 flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <MapPin className="w-24 h-24 mx-auto mb-4 opacity-90" />
                  <p className="text-lg font-semibold opacity-90">App Mockup</p>
                  <p className="text-sm opacity-75">Interaktive Inselkarte</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#27AE60] rounded-3xl opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1B4F72] rounded-3xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4F72] mb-4">
              Features, die den Unterschied machen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alles, was Gäste brauchen — und Betriebe sich wünschen
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B4F72] to-[#27AE60] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4F72] mb-2">
                Interaktive Inselkarte
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kategorien, Filter, Offline-Modus, Routenplanung und Echtzeit-Updates zu Events und Angeboten.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B4F72] to-[#27AE60] flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4F72] mb-2">
                Loyalty & Gamification
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Punkte für Besuche, Challenges, Leaderboards und exklusive Belohnungen von Partnerbetrieben.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B4F72] to-[#27AE60] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4F72] mb-2">
                KI-Concierge
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Persönliche Empfehlungen, Wetter-basierte Tipps und Chat-Support in natürlicher Sprache.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B4F72] to-[#27AE60] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4F72] mb-2">
                Push-Benachrichtigungen
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Geo-basierte Angebote, Event-Reminder und personalisierte Nachrichten zur richtigen Zeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4F72] mb-4">
              Was Gäste und Betriebe sagen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Echte Erfahrungen aus der Testphase
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-[#27AE60] text-[#27AE60]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                „Endlich eine App, die mir zeigt, was ich auf Borkum wirklich erleben kann! Die KI-Empfehlungen haben mich zu Orten gebracht, die ich sonst nie gefunden hätte. Und die Punkte beim lokalen Bäcker zu sammeln macht richtig Spaß!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B4F72] to-[#27AE60]"></div>
                <div>
                  <p className="font-semibold text-[#1B4F72]">Sarah M.</p>
                  <p className="text-sm text-gray-600">Touristin aus Hamburg</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-[#27AE60] text-[#27AE60]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                „Als Betreiber eines kleinen Cafés hatte ich es satt, 20% Provision an Booking-Plattformen zu zahlen. Mit BLT Borkum erreiche ich Gäste direkt und kann exklusive Angebote ausspielen. Die Laufkundschaft hat sich verdoppelt!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B4F72] to-[#27AE60]"></div>
                <div>
                  <p className="font-semibold text-[#1B4F72]">Thomas K.</p>
                  <p className="text-sm text-gray-600">Café-Besitzer, Borkum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4F72] mb-4">
              Transparente Preise für jeden Bedarf
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Keine versteckten Kosten, keine Provisionen — nur faire monatliche Preise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-[#1B4F72] mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfekt für kleine Betriebe</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1B4F72]">49€</span>
                <span className="text-gray-600">/Monat</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Profil auf der Inselkarte</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basis-Statistiken</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bis zu 3 Angebote/Monat</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Email-Support</span>
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-gray-100 text-[#1B4F72] font-semibold rounded-xl hover:bg-gray-200 transition">
                Starten
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#1B4F72] to-[#27AE60] rounded-2xl p-8 shadow-xl border-2 border-[#27AE60] relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#27AE60] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Beliebteste
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-white/90 mb-6">Für wachsende Betriebe</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">149€</span>
                <span className="text-white/80">/Monat</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Alles aus Starter</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Unbegrenzte Angebote</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Push-Benachrichtigungen</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Erweiterte Analytics</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Loyalty-Integration</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Prioritäts-Support</span>
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-white text-[#1B4F72] font-semibold rounded-xl hover:bg-gray-50 transition shadow-lg">
                Jetzt starten
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-[#1B4F72] mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">Für große Organisationen</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1B4F72]">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Alles aus Pro</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">White-Label Lösung</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">API-Zugang</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedizierter Account Manager</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom Features</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SLA & 24/7 Support</span>
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-gray-100 text-[#1B4F72] font-semibold rounded-xl hover:bg-gray-200 transition">
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 bg-gradient-to-br from-[#1B4F72] to-[#27AE60] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Bereit, Ihre Gäste zu begeistern?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Starten Sie noch heute und transformieren Sie das Borkum-