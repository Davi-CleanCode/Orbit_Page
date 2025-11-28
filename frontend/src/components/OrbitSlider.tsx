/**
 * COMPONENTE: OrbitSlider
 * ---------------------------------------------------
 * Júlia,
 * Este componente é o slider principal da landing page.
 * Ele controla animações, transições e comportamento do slider.
 *
 * Você pode ajustar velocidade, lógica de navegação,
 * visual do slider ou adicionar novos elementos visuais.
 * O carrosel esta aqui
 */

import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slidesData: Slide[] = [
  { image: "/geral.jpeg", title: "Grupo Orbit", description: "Um projeto criado para os nerds em seu mundo." },
  { image: "/davi.jpeg", title: "Davi Viana", description: "CEO → Responsável por cuidar e por definir a estratégia geral." },
  { image: "/Lucas.jpeg", title: "Lucas Duarte", description: "CMO → Cuida do marketing, marca e aquisição de clientes." },
  { image: "/Mateus.jpeg", title: "Mateus Duarte", description: "CHRO/CPO → Cuida de pessoas ou produto, respectivamente." },
  { image: "/Vanessa.jpeg", title: "Vanessa Silva", description: "CFO → Cuida das finanças e investimentos." },
  { image: "/Julia.jpeg", title: "Julia Ramos", description: "CIO → Cuida da estratégia de tecnologia de uma empresa." },
  { image: "/Wesley.jpeg", title: "Wesley Nascimento", description: "COO → Cuida da operação e execução dos planos." },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const typingSound = useRef<HTMLAudioElement | null>(
    typeof Audio !== "undefined" ? new Audio("/keypress.mp3") : null
  );

  const startTypewriter = (
    text: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    speed: number
  ) => {
    setter("");
    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        setter((prev) => prev + text[i]);
        const sound = typingSound.current;
        if (sound) {
          sound.currentTime = 0;
          sound.play().catch(() => {}); 
        }
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  };

  useEffect(() => {
    const slide = slidesData[currentIndex];
    startTypewriter(slide.title, setTitle, 100);
    startTypewriter(slide.description, setDesc, 40);

    const autoplay = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const changeSlide = (direction: number) => {
    setCurrentIndex((prev) => (prev + direction + slidesData.length) % slidesData.length);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div className="slide-item" key={index}>
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
      </div>

      <button className="nav-button prev" onClick={() => changeSlide(-1)}>
        &#10094;
      </button>
      <button className="nav-button next" onClick={() => changeSlide(1)}>
        &#10095;
      </button>

      <div className="slide-description">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}
