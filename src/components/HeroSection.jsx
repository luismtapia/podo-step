import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Efecto Parallax en el fondo
    gsap.to(bgRef.current, {
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 100
    });

    // Revelado de texto
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <section className="section bg-black text-white">
      {/* Imagen o Video de fondo tipo Joby */}
      <div ref={bgRef} className="absolute inset-0 opacity-60">
        <img src="/tu-imagen-clinica.jpg" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 ref={textRef} className="text-7xl font-bold tracking-tighter">
          Pies sanos. <br /> <span className="text-brand-accent">Vida activa.</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;