import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TimePicker from "../components/TimePicker";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

import BackButton from "../components/BackButton";

const InfoTooltip = ({ text }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full mb-3 px-4 py-2 bg-slate-800 text-white text-xs rounded-xl shadow-xl z-50 w-[360px] text-center leading-relaxed"
          >
            {text}
            {/* Flechita del tooltip */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icono */}
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)} // Útil para que en móviles también funcione al tocar
        className="cursor-help text-slate-400 hover:text-blue-500 transition-colors"
      >
        <Info size={36} />
      </div>
    </div>
  );
};

const AgendarPage = () => {
  const [selectedHour, setSelectedHour] = useState(9);
  const [selectedDay, setSelectedDay] = useState("Miércoles");

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const [error, setError] = useState(false);

  const handleSolicitarCita = () => {
    if (!nombre || !telefono) {
    setError(true);
    // Se oculta automáticamente después de 3 segundos
    setTimeout(() => setError(false), 3000);
    return;
  }

    const horaFormateada =
      selectedHour > 12 ? `${selectedHour - 12} PM` : `${selectedHour} AM`;

    // Ejemplo: Abrir WhatsApp con los datos
    const mensaje = `Hola, mi nombre es ${nombre}. Me gustaría solicitar una cita para el día ${selectedDay} a las ${horaFormateada}. Mi número de contacto es ${telefono}.`;
    window.open(
      `https://wa.me/524611794520?text=${encodeURIComponent(mensaje)}`,
      "_blank",
    );
  };

  return (
    <div className="relative min-h-screen">
      <BackButton />
      {/* Toast de Alerta */}
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: "-50%" }}
          animate={{ opacity: 1, y: 20, x: "-50%" }}
          exit={{ opacity: 0, y: -20, x: "-50%" }}
          className="fixed top-0 left-1/2 z-[110] w-[90%] max-w-md"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-red-100 shadow-2xl shadow-red-500/10 px-6 py-4 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
              <Info size={20} />
            </div>
            <div className="flex-1">
              <p className="text-slate-800 font-bold text-sm">Faltan datos</p>
              <p className="text-slate-500 text-xs">Por favor escribe tu nombre y teléfono.</p>
            </div>
            <button 
              onClick={() => setError(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg size={18} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>


      

      <div className="py-4">
        <TimePicker
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedHour={selectedHour}
          setSelectedHour={setSelectedHour}
        />
      </div>

      <div className="text-center px-6 py-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Cita Manual</h2>
        <p className="text-slate-500 mb-6">
          Completa tus datos para agendar Nos comunicaremos contigo a la
          brevedad
        </p>

        {/* --- FORMULARIO DE CONTACTO --- */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Tu nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-700 shadow-sm"
            />
          </div>
          <div className="relative">
            <input
              type="tel"
              placeholder="Número de teléfono (WhatsApp)"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-700 shadow-sm"
            />
          </div>
        </div>

        {/* Aquí iría el contenido de tu dirección u otros botones */}
        <div className="space-y-4">
          <button
            onClick={handleSolicitarCita}
            className="w-full py-4 bg-brand-navy text-white rounded-2xl font-medium"
          >
            Solicitar Cita para el {selectedDay} a las{" "}
            {selectedHour > 12 ? selectedHour - 12 : selectedHour}{" "}
            {selectedHour >= 12 ? "PM" : "AM"}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 pt-18 text-center">
        <p className="font-semibold text-slate-700">
          ¡Página Agenda en construcción!
        </p>

        <InfoTooltip
          text="Por el momento no puedes ver los espacios disponibles pero puedes
          solicitar disponibilidad directa con el botón de abajo."
        />
      </div>

      <div className="pt-50 pb-5">
        <StyledWrapper>
          <ul className="example-2">
            <li className="icon-content">
              <a
                data-social="whatsapp"
                aria-label="Whatsapp"
                href="https://api.whatsapp.com/send?phone=+524612323069&text=Save%20this%20to%20your%20Favorites%20-%20@wilsondesouza"
              >
                <div className="filled" />
                <svg
                  xmlSpace="preserve"
                  viewBox="0 0 24 24"
                  className="bi bi-whatsapp"
                  fill="currentColor"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
              </a>
              <div className="tooltip">Whatsapp</div>
            </li>
            <li className="icon-content">
              <a
                data-social="facebook"
                aria-label="Facebook"
                href="https://www.facebook.com/"
              >
                <div className="filled" />
                <svg
                  xmlSpace="preserve"
                  viewBox="0 0 24 24"
                  className="bi bi-facbook"
                  fill="currentColor"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
                  />
                </svg>
              </a>
              <div className="tooltip">Facebook</div>
            </li>
            <li className="icon-content">
              <a
                data-social="instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/"
              >
                <div className="filled" />
                <svg
                  xmlSpace="preserve"
                  viewBox="0 0 16 16"
                  className="bi bi-instagram"
                  fill="currentColor"
                  height={16}
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                  />
                </svg>
              </a>
              <div className="tooltip">Instagram</div>
            </li>
          </ul>
        </StyledWrapper>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a:hover {
    color: white;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }

  .example-2 .icon-content a[data-social="whatsapp"] .filled,
  .example-2 .icon-content a[data-social="whatsapp"] ~ .tooltip {
    background-color: #128c7e;
  }

  .example-2 .icon-content a[data-social="facebook"] .filled,
  .example-2 .icon-content a[data-social="facebook"] ~ .tooltip {
    background-color: #3b5998;
  }
  .example-2 .icon-content a[data-social="instagram"] .filled,
  .example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
    background: linear-gradient(
      45deg,
      #405de6,
      #5b51db,
      #b33ab4,
      #c135b4,
      #e1306c,
      #fd1f1f
    );
  }
  .example-2 .icon-content a[data-social="youtube"] .filled,
  .example-2 .icon-content a[data-social="youtube"] ~ .tooltip {
    background-color: #ff0000;
  }
`;

export default AgendarPage;
