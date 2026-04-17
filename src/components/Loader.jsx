import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Loader = ({ setFinished }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setFinished(true)
    });

    // Animación del logo (escala y opacidad)
    tl.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    )
    // El fondo se desliza hacia arriba para revelar la web
    .to(loaderRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
      delay: 0.5
    });
  }, [setFinished]);

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-primary">
      <div ref={logoRef} className="text-white font-bold text-4xl">
        {/* Aquí puedes poner tu componente <Footprints /> de Lucide */}
        PODO
      </div>
    </div>
  );
};

export default Loader;