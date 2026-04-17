import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

import {
  ChevronLeft,
  Clock,
  User,
  ContactRound,
  Download,
  MessageCircle,
  Phone,
  Video,
  Info,
  CalendarClock,
  Users,
  Star,
  X,
  ChevronLeft as PrevIcon,
  ChevronRight as NextIcon,
  Search,
} from "lucide-react";

const ComingSoon = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contacto");
  };

  useEffect(() => {
    toast("¡Página principal en construccion!", {
      icon: "🧑‍💻",
    });

    // Animación de entrada elegante
    gsap.from(contentRef.current.children, {
      y: 30,
      opacity: 1,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center text-white font-sans">
      <div className="absolute top-4 right-4 rounded-full bg-white/20 p-2">
        <User onClick={handleContact} />
      </div>

      {/* Fondo con resplandor suave (Estilo Apple) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-900/10 blur-[100px] rounded-full" />

      <div ref={contentRef} className="relative z-10 text-center px-6">
        <p className="uppercase tracking-[0.3em] text-sm text-blue-400 mb-4 font-medium">
          Próximamente
        </p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
          PODOSTEP <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            MÉXICO
          </span>
        </h1>

        <p className="text-gray-400 max-w-md mx-auto text-lg mb-10 leading-relaxed font-light">
          Estamos redefiniendo el cuidado podológico en Celaya. <br />
          Algo excepcional está por llegar.
        </p>

        {/* Input Premium */}
        <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-full max-w-sm mx-auto backdrop-blur-md focus-within:border-blue-500/50 transition-all">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="bg-transparent flex-1 px-5 py-2 outline-none text-sm"
          />
          <button className="bg-white text-black p-2 rounded-full hover:bg-blue-400 transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Footer minimalista */}
      <div className="absolute bottom-10 w-full flex justify-center gap-8 text-xs tracking-widest text-gray-500 uppercase">
        <span className="hover:text-white cursor-pointer transition-colors">
          Instagram
        </span>
        <span className="hover:text-white cursor-pointer transition-colors">
          WhatsApp
        </span>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default ComingSoon;
