import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const TimePicker = () => {
  const startTime = 9; // 9 AM
  const endTime = 19; // 7 PM
  const step = 0.5; // Intervalos de 30 min (0.25 para 15 min)
  
  // Generar array de horas: [9, 9.5, 10, ..., 19]
  const timeSlots = [];
  for (let i = startTime; i <= endTime; i += step) {
    timeSlots.push(i);
  }

  const [selectedTime, setSelectedTime] = useState(12); // Valor inicial
  const containerRef = useRef(null);

  const formatTime = (t) => {
    const hour = Math.floor(t);
    const min = (t % 1) * 60;
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${min === 0 ? '00' : min} ${period}`;
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 rounded-3xl shadow-sm w-full max-w-md">
      <div className="flex items-center gap-2 mb-6 text-gray-600">
        <Clock size={20} />
        <span className="font-medium text-lg text-cyan-600">
          {formatTime(selectedTime)}
        </span>
      </div>

      {/* Contenedor de la Regla */}
      <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
        
        {/* Indicador Central (Línea Azul) */}
        <div className="absolute z-10 w-1 h-12 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

        <motion.div
          drag="x"
          dragConstraints={{ left: -600, right: 600 }} // Ajustar según cantidad de items
          className="flex items-end gap-2 cursor-grab active:cursor-grabbing"
          style={{ x: (12 - selectedTime) * 40 }} // Lógica simple de desplazamiento
        >
          {timeSlots.map((time) => {
            const isHour = time % 1 === 0;
            const isSelected = selectedTime === time;

            return (
              <div
                key={time}
                onClick={() => setSelectedTime(time)}
                className="flex flex-col items-center transition-all duration-300"
              >
                {/* Las barras (Ticks) */}
                <motion.div
                  animate={{
                    height: isHour ? 32 : 16,
                    backgroundColor: isSelected ? '#06b6d4' : '#d1d5db',
                    width: isSelected ? 4 : 2
                  }}
                  className="rounded-full"
                />
                
                {/* Etiquetas de hora (solo en horas enteras) */}
                {isHour && (
                  <span className={`text-[10px] mt-2 font-bold ${isSelected ? 'text-cyan-600' : 'text-gray-400'}`}>
                    {Math.floor(time) > 12 ? Math.floor(time) - 12 : Math.floor(time)}
                  </span>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>

      <button className="mt-8 w-full py-4 bg-[#023047] text-white rounded-2xl font-semibold hover:bg-slate-800 transition-colors">
        Reservar Sesión
      </button>
    </div>
  );
};

export default TimePicker;