import React, { useState } from 'react';
import OrbitSlider from "./components/OrbitSlider"; // nome atualizado
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
  Joystick,
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
        animationDuration: `${15 + Math.random() * 10}s`,
      }}
    />
  ));

 return (
  <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-900 text-white relative overflow-hidden">
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900"></div>
      <div className="particles">particles</div>
    </div>

    <div className="relative z-10">
      <section className="py-20 text-center container mx-auto px-4">
        <div className="mb-12">
          <Rocket className="w-20 h-20 text-cyan-400 mx-auto animate-pulse" />
        </div>

        <h1 className="text-6xl font-bold mb-6 leading-tight">
          <span className="text-cyan-400 block text-2xl mb-2">
            &gt; LOADING_FUTURE...
          </span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            O Futuro dos Geeks
          </span>
        </h1>
      </section>

      <div className="flex justify-center my-20">
        <OrbitSlider />
      </div>
    </div>
  </div>
);}
