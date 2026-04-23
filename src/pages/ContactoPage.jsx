import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Clock,
  UserPlus,
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
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
  FaFacebookMessenger,
  FaMapMarkerAlt,
} from "react-icons/fa";

import imagotipo from "../assets/imagotipo_transparente.png";

import fotoPerfil from "../assets/podologa_perfil.png";
import TimePicker from "../components/TimePicker";

import ServiceCards from "../components/Servicecards";
import TimePickerOld from "../components/TimePickerOld";

import { socialLinks } from "../data/data";

// Datos
const direccion = "Flamenco 217, Col Álamos, Celaya, Gto.";
const nombre = "Julieta Robles";

//ghd
const handleMapClick = () => {
  // Generamos la URL codificada para evitar errores con espacios o símbolos
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`;

  // Abrir en una pestaña nueva
  window.open(url, "_blank", "noreferrer");
};

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

// --- SUB-COMPONENTES DE APOYO ---

const Header = () => {
  const navigate = useNavigate();
  const handleToastClick = () => {
    // 1. Lógica: Disparar la notificación
    toast("¡Página principal en construccion!", {
      icon: "🧑‍💻",
    });
    // 2. Lógica: Volver atrás
    // window.history.back();
    navigate("/");
  };
  const handleSaveContact = () => {
    const contact = {
      name: "Julieta Robles",
      phone: "+524611794520",
      email: "contacto@podostep.com",
      org: "PodoStep Celaya",
      title: "L.E.O, Podóloga",
      address: "Flamenco 217, Col Álamos, Celaya, Gto.",
    };

    const vCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${contact.name}`,
      `ORG:${contact.org}`,
      `TITLE:${contact.title}`,
      `TEL;TYPE=CELL:${contact.phone}`,
      `EMAIL:${contact.email}`,
      `ADR;TYPE=WORK:;;${contact.address}`,
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${contact.name.replace(/\s+/g, "_")}.vcf`);
    document.body.appendChild(link);
    link.click();

    // 5. Limpieza
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // 6. Notificación visual
    toast.success("Contacto listo para guardar", {
      icon: "📇",
    });
  };

  return (
    <header className="w-full max-w-full mx-auto p-3 md:px-5 flex items-center justify-between relative z-50 ">
      <Toaster position="top-center" />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToastClick}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm text-slate-700"
      >
        <ChevronLeft size={24} strokeWidth={2.5} className="mr-0.5" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSaveContact}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm text-slate-700"
      >
        <ContactRound size={24} strokeWidth={2.5} className="mr-0.5" />
      </motion.button>
    </header>
  );
};

const ImagenProfile = ({ nombre }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="absolute right-0 top-10 mr-[-70px] z-10 pointer-events-none"
  >
    <img
      src={fotoPerfil}
      alt={nombre}
      className=" w-[350px] md:w-[450px] lg:w-[500px] h-auto object-contain drop-shadow-2xl"
    />
  </motion.div>
);

const HeroProfile = ({ nombre }) => (
  <main className="w-full max-w-full mx-auto px-8 pt-4 md:pt-16 flex flex-col relative">
    <div className="flex justify-between items-start w-full relative">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="pt-12 z-20"
      >
        <h1 className="text-5xl font-bold text-[#1E3A4C] tracking-tight mb-2 max-w-[200px] lg:max-w-full leading-[1.1]">
          {nombre}
        </h1>
        <p className="text-lg font-medium text-slate-500/80">L.E.O, Podóloga</p>
        <p className="text-sm text-slate-400 mt-1 uppercase tracking-wider">
          Podología Integral
        </p>
      </motion.div>
    </div>
  </main>
);

const ActionButtons = ({ onOpenBooking }) => {
  const contactActions = [
    {
      Icon: Phone,
      link: "tel:+524611794520",
    },
    {
      Icon: FaWhatsapp,
      link: `https://wa.me/524611794520?text=${encodeURIComponent("Buenas tardes, me gustaría agendar una cita.")}`,
    },
    {
      Icon: FaFacebookMessenger,
      link: "https://m.me/podostepcelaya", // Asegúrate que el username sea el correcto
    },
  ];

  return (
    <div className="flex items-center justify-between w-full mb-8 px-2">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpenBooking}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#D6E9F1] text-[#2C5A71] font-semibold shadow-sm cursor-pointer"
      >
        <Info size={16} strokeWidth={2.5} />
        <span className="text-sm tracking-wide">Agendar</span>
      </motion.button>

      <div className="flex items-center gap-2 md:gap-3">
        {contactActions.map(({ Icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.9 }}
            // Usamos motion.a en lugar de motion.button para navegación directa
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 text-slate-600 shadow-sm border border-white/20 transition-colors cursor-pointer"
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, value, label, onClick }) => (
  <div
    className="flex flex-col justify-center cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center gap-1.5 mb-1">
      <Icon size={16} className="text-sky-500" />
      <span className="text-base font-bold text-brand-navy">{value}</span>
    </div>
    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
      {label}
    </p>
  </div>
);

const StatsBlock = () => {
  const anioInicio = 2023;
  const anioActual = new Date().getFullYear();
  const experiencia = anioActual - anioInicio;

  const labelExperiencia = `${experiencia} ${experiencia === 1 ? "año" : "años"}`;

  return (
    <div className="w-full bg-white/90 rounded-[24px] p-5 shadow-sm border border-white/50 mb-8">
      <div className="grid grid-cols-2 divide-x divide-slate-100">
        <StatCard
          icon={CalendarClock}
          value={labelExperiencia}
          label="Experiencia"
        />
        <StatCard
          icon={FaMapMarkerAlt}
          value="Clínica Álamos"
          label="Flamenco # 217, Col Álamos"
          onClick={handleMapClick}
        />
      </div>
    </div>
  );
};

const Schedule = ({ title, children }) => (
  <div className="w-full bg-white/90 rounded-[32px] p-5 shadow-sm border border-white/50 mb-8">
    <div className="flex items-center justify-between px-1">
      <div className="flex items-center gap-2">
        {/* <Clock size={18} className="text-sky-500" strokeWidth={2.5} /> */}
        <h2 className="text-lg font-bold text-[#1E3A4C]">{title}</h2>
      </div>
      {/* <div className="flex items-center gap-4"> */}
      {/* <PrevIcon size={16} className="text-slate-400 cursor-pointer" /> */}
      <span className="text-sm font-bold text-sky-500 tracking-wide md:tracking-widest">
        Previa cita
      </span>
      {/* <NextIcon size={16} className="text-slate-400 cursor-pointer" /> */}
      {/* </div> */}
    </div>
    {children}
  </div>
);

// const SocialMedia = ({ color }) => (
//   <div className="flex justify-center gap-6 pb-16 text-white">
//     {[
//       { icon: <FaInstagram />, link: "https://instagram.com/celayapodostep" },
//       {
//         icon: <FaFacebookF />,
//         link: "https://facebook.com/podostepcelaya",
//       },
//       { icon: <FaYoutube />, link: "https://www.youtube.com/@Podo-StepCelaya" },
//       { icon: <FaTiktok />, link: "https://www.tiktok.com/@podostepcelaya" },
//     ].map((social, i) => (
//       <a
//         key={i}
//         href={social.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-xl hover:bg-brand-cotton hover:text-white hover:scale-110 transition-all duration-300"
//       >
//         {social.icon}
//       </a>
//     ))}
//   </div>
// );

const SocialMedia = () => (
  <div className="flex justify-center gap-6 pb-16 text-white">
    {socialLinks.map((social) => {
      // Extraemos el icono y lo renombramos con Mayúscula
      const Icon = social.icon;

      return (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-xl 
                     hover:bg-brand-cotton hover:text-white hover:scale-110 
                     transition-all duration-300"
        >
          <Icon /> {/* Lo renderizamos aquí */}
        </a>
      );
    })}
  </div>
);

const CustomContainer = ({ title, children }) => (
  <div className="w-full bg-white/90 rounded-[32px] p-5 shadow-sm border border-white/50 mb-8">
    <div className="flex items-center justify-between mb-6 px-1">
      <h2 className="text-lg font-bold text-[#1E3A4C]">{title}</h2>
      <div className="flex items-center gap-4">
        <PrevIcon size={16} className="text-slate-400 cursor-pointer" />
        <span className="text-sm font-bold text-[#1E3A4C]">Lun-Viernes</span>
        <NextIcon size={16} className="text-slate-400 cursor-pointer" />
      </div>
    </div>
    {children}
  </div>
);

const BottomSheet = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fondo oscuro (Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-blue/90 z-[999] backdrop-blur-sm"
          />

          {/* Panel Deslizable */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[2rem] z-[1000] p-4 shadow-2xl h-[80vh] flex flex-col overflow-hidden"
          >
            {/* --- HEADER FIJO (No hace scroll) --- */}
            <div className="absolute right-4 top-3">
              <button
                onClick={onClose}
                className="bg-slate-100 p-2 rounded-full text-slate-500 hover:bg-slate-200 transition-colors shadow-sm active:scale-95 cursor-pointer"
              >
                <X size={20} strokeWidth={3} />
              </button>
            </div>

            <div className="flex justify-between px-2 py-6">
              <div className="flex items-center gap-2">
                <CalendarClock
                  size={18}
                  className="text-sky-500"
                  strokeWidth={2.5}
                />
                <h2 className="text-lg font-bold text-brand-navy">
                  Como podemos ayudarte
                </h2>
              </div>
            </div>

            {/* --- ÁREA DE CONTENIDO (Única parte con SCROLL) --- */}
            <div className="flex-1 overflow-y-auto px-4 pb-10">
              <div className="max-w-md md:max-w-7xl mx-auto h-full">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

const FooterContacto = () => (
  <footer className="bg-brand-navy pt-24 rounded-lg text-white flex flex-col justify-between z-60 relative">
    <SocialMedia color={"text-white"} />

    <div className="w-full flex-grow py-3 md:px-12">
      {/* Contenedor de los grupos de texto */}
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-y-10 w-full mb-4">
        {/* Grupo 1: PODOSTEP CELAYA */}
        <motion.div {...fadeInUp} className="text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/80 font-medium">
            PODOSTEP CELAYA
          </p>
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium">
            © {new Date().getFullYear()} Derechos reservados
          </p>
        </motion.div>

        {/* Grupo 2: CREATED BY */}
        <motion.div {...fadeInUp} className="text-center md:text-right">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium">
            CREATED BY
          </p>
          {/* <p className="text-[10px] uppercase tracking-[0.4em] text-white/80 font-medium">
            APPXION DEVS
          </p> */}

          <a
            key="appxion"
            href="https://instagram.com/appxion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.4em] text-white/80 font-medium cursor-pointer"
          >
            APPXION DEVS
          </a>
        </motion.div>
      </div>
    </div>

    {/* Letras final*/}
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

// --- COMPONENTE PRINCIPAL ---

const DoctorBookingProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBooking = () => setIsModalOpen(true);
  const closeBooking = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-gradient-to-b from-[#D2E3EE] via-[#EBF3F8] to-[#FFFFFF]">
      {/* <div className="fixed top-0 left-0 w-full z-0">
        <Header />
        <ImagenProfile nombre={nombre} />
        <HeroProfile nombre={nombre} />
      </div> */}

      {/* 1. SECCIÓN SUPERIOR: Flujo normal, no fija */}
      <div className="relative w-full">
        <div className="fixed top-0 left-0 w-full z-0">
          <Header />
          <ImagenProfile nombre={nombre} />
          <HeroProfile nombre={nombre} />
        </div>
      </div>

      {/* Glass Panel Inferior */}
      {/* <div className="relative z-40 mt-[55vh] md:mt-[65vh]"></div> */}
      <div className="relative z-40 mt-94 md:mt-[65vh]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className=" w-full max-w-full bg-white/25 backdrop-blur-[45px] 
               border-t border-x border-white/10 rounded-t-[40px] rounded-b-none 
               shadow-lg flex flex-col overflow-hidden"
        >
          <div className="px-2 py-4">
            <ActionButtons onOpenBooking={openBooking} />
            <StatsBlock />
            <div onClick={openBooking} className="cursor-pointer">
              <Schedule title="Horarios de atención">
                <div className="flex justify-center items-center gap-8 md:gap-96 w-full pt-12 ">
                  <StatCard
                    icon={Clock}
                    value="09:00 a 19:00"
                    label="Lunes a Viernes"
                  />
                  <StatCard icon={Clock} value="09:00 a 14:00" label="Sábado" />
                </div>
                <div className="flex justify-center pt-12 cursor-pointer">
                  <p className="bg-rose-500 text-rose-50 text-sm px-3 py-1 rounded-full font-medium tracking-widest">
                    Domingo: CERRADO
                  </p>
                </div>
              </Schedule>
            </div>
          </div>

          <div className="flex justify-center w-full relative z-70 pt-20">
            <div className="bg-white rounded-3xl shadow-xl w-fit mx-auto overflow-hidden -mb-6 border border-white/50">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="flex px-24 py-4 justify-center items-center"
              >
                <img
                  src={imagotipo}
                  alt="Logo"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
          <FooterContacto />
        </motion.div>
      </div>

      {/* Uso del BottomSheet */}
      <BottomSheet isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ServiceCards />
      </BottomSheet>
    </div>
  );
};

export default DoctorBookingProfile;
