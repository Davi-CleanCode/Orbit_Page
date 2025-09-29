import React, { useState } from 'react';
import {
  Rocket,
  Users,
  Gamepad2,
  Code,
  BookOpen,
  Monitor,
  Star,
  Mail,
  Github,
  Twitter,
  Instagram,
  ChevronRight,
  Zap,
  Cpu,
  Wifi,
  Target,
  Joystick
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  const particles = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-900 text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900"></div>
        <div className="absolute inset-0 bg-matrix animate-matrix opacity-5"></div>
        <div className="particles">{particles}</div>

        <div className="absolute top-20 left-10 animate-float">
          <Gamepad2 className="w-8 h-8 text-cyan-400 opacity-30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Cpu className="w-6 h-6 text-purple-400 opacity-40" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Wifi className="w-5 h-5 text-green-400 opacity-35" />
        </div>
        <div className="absolute top-60 right-1/3 animate-float" style={{ animationDelay: '0.5s' }}>
          <Target className="w-7 h-7 text-red-400 opacity-30" />
        </div>
      </div>

      <div className="relative overflow-hidden z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>

        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30 rounded-full animate-neon-pulse"></div>
              <Rocket className="w-20 h-20 text-cyan-400 relative z-10 animate-pixel-dance" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-8bit text-2xl md:text-3xl block mb-4 text-green-400 animate-glitch">
                &gt; LOADING_FUTURE...
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent text-cyber animate-neon-pulse">
                O Futuro dos
              </span>
              <br />
              <span className="text-white text-cyber animate-glitch">GEEKS</span>
              <span className="text-8bit text-xl md:text-2xl text-green-400 ml-4">Chegou</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed text-cyber">
              Uma plataforma revolucionária sendo desenvolvida especialmente para
              <span className="text-cyan-400 animate-neon-pulse"> [GAMERS] </span>,
              <span className="text-purple-400 animate-neon-pulse"> [DEVS] </span>,
              <span className="text-pink-400 animate-neon-pulse"> [OTAKUS] </span>,
              <span className="text-purple-400 animate-neon-pulse"> [CINEFALOS] </span>,
              <span className="text-green-400 animate-neon-pulse"> [AMANTES DE QUADRINHOS] </span>
              e toda a comunidade geek que busca experiências únicas.
              Orbit Conectando Universos, Criando Oportunidades
              Na Orbit, acreditamos que a cultura geek é muito mais que entretenimento: é comunidade, inovação e mercado em expansão.
              É por isso que criamos a Fandom Lab, uma plataforma que une fãs, criadores e empreendedores em um só lugar. Imagine um espaço que mistura a dinâmica das redes sociais com a força de um marketplace especializado no universo geek.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center gap-2 pixel-border animate-neon-pulse text-cyber">
                <Zap className="w-5 h-5" />
                GARANTA_SEU_ACESSO.EXE
                <ChevronRight className="w-5 h-5" />
              </button>

              <button className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-300 flex items-center gap-2 text-8bit hover:animate-glitch">
                <Star className="w-5 h-5" />
                INFO+
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: 'PLAYERS', value: '∞', color: 'text-green-400' },
                { label: 'LEVEL', value: 'MAX', color: 'text-cyan-400' },
                { label: 'XP', value: '999K+', color: 'text-purple-400' },
                { label: 'STATUS', value: 'BETA', color: 'text-yellow-400' }
              ].map((stat, index) => (
                <div key={index} className="bg-black/50 border border-gray-700 rounded-lg p-3 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300">
                  <div className={`text-2xl font-bold ${stat.color} text-8bit animate-neon-pulse`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 text-8bit mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-400 animate-ping" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 animate-pulse" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-pink-400 animate-bounce" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
      </div>
      <div className="py-20 relative z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>

        <div className="relative z-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-8bit text-green-400 text-sm mb-4 animate-glitch">
              &gt; SCANNING_TARGETS...
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-cyber animate-neon-pulse">
              FEITO PARA VOCÊ
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-cyber">
              Nossa plataforma está sendo desenvolvida pensando em cada membro da comunidade geek.
              👾 Por que estar na Fandom Lab?
              Para fãs: encontre sua tribo, discuta, compartilhe e viva sua paixão por animes, HQs, games, filmes e séries.
              Para lojistas: exponha seus produtos diretamente para um público 100% geek — figures, camisetas, colecionáveis e muito mais.
              Para criadores e devs: apresente seu jogo, app ou projeto open source para uma comunidade engajada, pronta para apoiar e consumir inovação.
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-8bit text-2xl md:text-3xl block mb-4 text-green-400 animate-glitch">
                &gt; 💡 A Orbit não é só uma startup de tecnologia. É o motor de um ecossistema que transforma paixão em conexão e conexão em oportunidade.
              </span>
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <Gamepad2 className="w-8 h-8 animate-pixel-dance" />,
                  title: "GAMERS",
                  desc: "Experiências únicas para verdadeiros jogadores",
                  color: "from-red-500 to-orange-500",
                  accent: "text-red-400"
                },
                {
                  icon: <Code className="w-8 h-8 animate-pixel-dance" />,
                  title: "DEVELOPERS",
                  desc: "Ferramentas e recursos para programadores",
                  color: "from-green-500 to-emerald-500",
                  accent: "text-green-400"
                },
                {
                  icon: <BookOpen className="w-8 h-8 animate-pixel-dance" />,
                  title: "OTAKUS_&_MANGÁ",
                  desc: "Conteúdo especial para fãs de anime e mangá",
                  color: "from-pink-500 to-rose-500",
                  accent: "text-pink-400"
                },
                {
                  icon: <Monitor className="w-8 h-8 animate-pixel-dance" />,
                  title: "CINÉFILOS",
                  desc: "Para os amantes da sétima arte",
                  color: "from-blue-500 to-indigo-500",
                  accent: "text-blue-400"
                },
                {
                  icon: <Users className="w-8 h-8 animate-pixel-dance" />,
                  title: "COMUNIDADE_GEEK",
                  desc: "Conectando mentes criativas e curiosas",
                  color: "from-purple-500 to-violet-500",
                  accent: "text-purple-400"
                },
                {
                  icon: <Star className="w-8 h-8 animate-pixel-dance" />,
                  title: "ENTUSIASTAS",
                  desc: "Para quem ama cultura pop e tecnologia",
                  color: "from-cyan-500 to-teal-500",
                  accent: "text-cyan-400"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-black/70 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:animate-glitch"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500"
                    style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>

                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} mb-4 shadow-lg animate-neon-pulse`}>
                    {item.icon}
                  </div>

                  <h3 className={`text-lg font-bold mb-3 text-8bit ${item.accent} group-hover:animate-neon-pulse transition-colors`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-cyber text-sm">
                    {item.desc}
                  </p>

                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 opacity-50"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 opacity-50"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-20 bg-gradient-to-r from-black/80 to-purple-900/50 relative overflow-hidden z-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

          <div className="relative z-20 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg px-6 py-2 mb-8 animate-neon-pulse">
                  <div className="w-2 h-2 bg-cyan-400 animate-pulse"></div>
                  <span className="text-cyan-400 font-medium text-8bit text-xs">DEV_MODE_ON</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-8bit text-green-400 text-lg block mb-4 animate-glitch">
                  &gt; COMPILING_EPIC.EXE
                </span>
                <span className="text-white text-cyber">Algo </span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-neon-pulse text-cyber">ÉPICO</span>
                <br />
                <span className="text-8bit text-yellow-400 text-2xl md:text-3xl animate-glitch">Está Chegando</span>
              </h2>

              <p className="text-xl text-gray-300 mb-12 leading-relaxed text-cyber">
                Nossa equipe está trabalhando 24/7 para criar a plataforma definitiva para a comunidade geek.
                <span className="text-cyan-400 animate-neon-pulse">[SEJA O PRIMEIRO]</span> a experimentar quando lançarmos!
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 animate-pulse" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="player@email.com"
                      className="w-full pl-12 pr-4 py-4 bg-black/70 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-gray-400 backdrop-blur-sm text-cyber"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/25 whitespace-nowrap text-8bit text-xs hover:animate-glitch"
                  >
                    {isSubmitted ? 'REGISTERED!' : 'JOIN_BETA'}
                  </button>
                </div>
              </form>

              {isSubmitted && (
                <p className="mt-4 text-green-400 animate-fade-in text-8bit text-sm">
                  &gt; SUCCESS! Player registered for beta access.
                </p>
              )}
            </div>
          </div>
        </div>
        <footer className="py-12 border-t border-slate-800 relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-3 mb-6 md:mb-0">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg animate-neon-pulse">
                  <Joystick className="w-6 h-6 animate-pixel-dance" />
                </div>
                <span className="text-xl font-bold text-8bit text-cyan-400">ORBIT.COMPANY</span>
              </div>

              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:animate-pixel-dance">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:animate-pixel-dance">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:animate-pixel-dance">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-slate-800">
              <p className="text-gray-400 text-8bit text-xs">
                &copy; 2025 ORBIT.COMPANY.EXE | MADE_WITH &lt;3 FOR_GEEK_COMMUNITY
              </p>
            </div>
          </div>
        </footer>
      </div>
      );
}

      export default App;