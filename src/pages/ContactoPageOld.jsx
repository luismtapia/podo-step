import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { SiSignal } from "react-icons/si";
import { Mail, MapPin, Phone } from 'lucide-react';

import logo from "../assets/isotipo_negativo.webp";
import fotoPodologa from "../assets/podologa_perfil.png"; 



import {
  ChevronLeft,
  MessageCircle,
  Phone,
  Video,
  Info,
  CalendarClock,
  Users,
  Star,
  ChevronLeft as PrevIcon,
  ChevronRight as NextIcon,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiSignal } from "react-icons/si";


// --- SUB-COMPONENTES DE APOYO ---

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

gsap.registerPlugin(ScrollTrigger);

const Contacto = () => {
  const containerRef = useRef(null);

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.from(".reveal", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
      });

      const sections = gsap.utils.toArray('.card-section');
      
      sections.forEach((section, i) => {
        gsap.fromTo(section, 
          // CORRECCIÓN OPACIDAD: Cambiamos 0.5 por 1 para que no se vea opaco/apagado
          { scale: 0.9, opacity: 1 }, 
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top top",
              scrub: true,
              snap: {
                snapTo: 1,
                duration: { min: 0.2, max: 0.5 },
                delay: 0
              }
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="scroll-container min-h-screen bg-[#FFF8F4] font-sans overflow-x-hidden">
      
      <section className="card-section flex flex-col items-center justify-center px-6 py-32">
        <span className="reveal text-brand-cotton uppercase tracking-[0.4em] text-xs font-bold mb-6">
          Pies sanos, vida activa
        </span>
        <h1 className="reveal text-7xl md:text-9xl font-black text-brand-navy tracking-tighter mb-8 text-center leading-[0.8]">
          Hablemos.
        </h1>
        <p className="reveal text-brand-navy/70 text-lg md:text-xl max-w-2xl text-center font-light leading-relaxed">
          Agenda tu cita en nuestra clínica de{" "}
          <span className="text-brand-navy font-medium">Celaya</span>. <br />
          Estamos listos para dar el siguiente paso contigo.
        </p>
      </section>

      <section className="card-section bg-cream flex flex-col md:flex-row items-center justify-center gap-16 p-10 md:p-20 text-brand-navy">
        <motion.div 
          whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="flex-none"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-brand-navy/10 shadow-xl shadow-brand-navy/5 grayscale hover:grayscale-0 transition-all duration-500">
            <img 
              src={fotoPodologa} 
              alt="Dra. Ana López" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 space-y-8 max-w-2xl"
        >
          <div className="space-y-2">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-brand-navy">Dra. Ana López</h2>
            <p className="text-xl font-light uppercase tracking-widest text-brand-cotton">Podología Integral Avanzada</p>
          </div>
          
          <p className="text-lg text-brand-navy/70 font-light leading-relaxed">
            Con más de 10 años de experiencia, mi pasión es devolverte la libertad de movimiento. Especialista en cirugia ungueal y estudio de la marcha.
          </p>

          <div className="space-y-4 pt-4 border-t border-brand-navy/10">
            <div className="flex items-center gap-3 text-lg"><Phone size={18} className="text-brand-cotton" /> +52 (461) 179 4520</div>
            <div className="flex items-center gap-3 text-lg"><Mail size={18} className="text-brand-cotton" /> ana.lopez@podostep.mx</div>
            <div className="flex items-center gap-3 text-lg"><MapPin size={18} className="text-brand-cotton" /> Celaya, Gto.</div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER: Ajustado para eliminar el espacio horrible */}
      <footer className="card-section bg-brand-navy text-white pt-20 flex flex-col justify-between">
        <div className="w-full flex-grow">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
            <div className="space-y-4">
              <h3 className="text-brand-cotton font-black text-3xl tracking-tighter">PODOSTEP</h3>
              <p className="text-white/40 text-[13px] leading-relaxed uppercase tracking-widest">
                Podología Integral <br /> Clínica Alamos
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-brand-pearl">Visítanos</h4>
              <p className="text-lg font-light italic opacity-80">
                Clinica Álamos · Flamencos 216, Col. Álamos, Celaya, Gto.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-brand-pearl">Citas</h4>
              <a href="tel:+524611794520" className="block text-lg font-light hover:text-brand-cotton transition-colors">
                +52 (461) 179 4520
              </a>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-brand-pearl">Canales Directos</h4>
              <div className="space-y-1">
                <p className="text-lg font-light">+52 (461) 771 78 19</p>
                <div className="flex items-center gap-2 text-[9px] text-white/30 uppercase tracking-widest">
                  <FaWhatsapp /> <SiSignal /> Solo Mensajes
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 pb-16">
            {[
              { icon: <FaInstagram />, link: "https://instagram.com/podo-step" },
              { icon: <FaFacebookF />, link: "https://facebook.com/podostep" },
              { icon: <FaYoutube />, link: "https://youtube.com/podo-step" },
              { icon: <FaWhatsapp />, link: "https://wa.me/524611794520" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg text-xl hover:bg-brand-cotton hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-white/5 pt-10 px-10">
            <div className="flex flex-row items-center justify-between w-full mb-4">
              <motion.div {...fadeInUp} className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium">
                  © 2026 PODOSTEP CELAYA
                </p>
              </motion.div>

              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 1 }}
                className="flex-none px-6"
              >
                <img src={logo} alt="Logo" className="h-6 w-auto grayscale" />
              </motion.div>

              <motion.div {...fadeInUp} className="flex-1 text-right">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium">
                  CREATED BY APPXION DEVS
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CORRECCIÓN FOOTER: Eliminamos paddings extras y usamos leading-none */}
        <div className="w-full overflow-hidden flex justify-center items-end flex-none m-0 p-0">
          <motion.div 
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: "15%", opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center m-0 p-0"
          >
            <h2 className="text-[18vw] font-black tracking-tighter leading-[0.7] text-white select-none pointer-events-none whitespace-nowrap uppercase m-0 p-0">
              PODOSTEP
            </h2>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Contacto;





const FooterContacto = () => (
  <footer className="bg-brand-navy text-white pt-20 flex flex-col justify-between">
    <div className="w-full flex-grow">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img src={imagotipo} alt="Logo" className="h-16 w-auto" />
          </motion.div>
        </div>

        <div className="space-y-4">
            
          <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-brand-pearl">
            Visítanos
          </h4>
          <p className="text-lg font-light italic opacity-80">
            Clinica Álamos · Flamencos 216, Col. Álamos, Celaya, Gto.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-brand-pearl">
            Citas
          </h4>
          <a
            href="tel:+524611794520"
            className="block text-lg font-light hover:text-brand-cotton transition-colors"
          >
            +52 (461) 179 4520
          </a>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-brand-pearl">
            Canales Directos
          </h4>
          <div className="space-y-1">
            <p className="text-lg font-light">+52 (461) 771 78 19</p>
            <div className="flex items-center gap-2 text-[9px] text-white/30 uppercase tracking-widest">
              <FaWhatsapp /> <SiSignal /> Solo Mensajes
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 pb-16">
        {[
          { icon: <FaInstagram />, link: "https://instagram.com/podo-step" },
          {
            icon: <FaFacebookF />,
            link: "https://facebook.com/podostepcelaya",
          },
          { icon: <FaYoutube />, link: "https://youtube.com/podo-step" },
          { icon: <FaWhatsapp />, link: "https://wa.me/524611794520" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-xl hover:bg-brand-cotton hover:scale-110 transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="flex justify-center text-center">
        <div className="flex flex-col items-center">
          {/* H1 arriba y centrado */}
          <h1 className="text-3xl font-bold mb-2">Clínica Álamos</h1>

          {/* Contenedor inline para el icono y el H3 */}
          <div className="flex items-center gap-2">
            {/* Aquí puedes sustituir el <p> por un componente de Icono real */}
            <span className="text-brand-cotton">
              <FaMapMarkerAlt />
            </span>

            <h3 className="text-lg font-light italic opacity-80">
              Flamenco 217, Col Álamos, Celaya, Gto.
            </h3>
          </div>
        </div>
      </div>

      <div className=" pt-20 px-2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="flex px-6 justify-center"
        >
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </motion.div>

        <div className="flex flex-row items-center justify-between w-full mb-4">
          <motion.div {...fadeInUp} className="flex-2">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium">
              © 2026
            </p>
            <p className="text-[10px] px-5 uppercase tracking-[0.4em] text-white/30 font-medium">
              PODOSTEP CELAYA
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="flex-2 text-right">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium">
              CREATED BY
            </p>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium">
              APPXION DEVS
            </p>
          </motion.div>
        </div>
      </div>
    </div>

    {/* CORRECCIÓN FOOTER: Eliminamos paddings extras y usamos leading-none */}
    <div className="w-full overflow-hidden flex justify-center items-end flex-none m-0 p-0">
      <motion.div
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: "15%", opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex justify-center m-0 p-0"
      >
        <h2 className="text-[18vw] font-black tracking-tighter leading-[0.7] text-white select-none pointer-events-none whitespace-nowrap uppercase m-0 p-0">
          PODOSTEP
        </h2>
      </motion.div>
    </div>
  </footer>
);