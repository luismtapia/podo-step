import React, { useState, useRef, useEffect } from "react";

const TimePicker = ({ selectedDay, setSelectedDay, selectedHour, setSelectedHour }) => {
  const scrollRef = useRef(null);
  const scrollHorasRef = useRef(null);
  // const [selectedHour, setSelectedHour] = useState(14); // 2:00 PM por defecto
  // const [selectedDay, setSelectedDay] = useState("Miércoles");

  // DIAS
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  const centerDay = (id) => {
    const element = document.getElementById(id);
    if (element && scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft =
        element.offsetLeft -
        container.offsetWidth / 2 +
        element.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  // HORAS
  const centerElement = (id, containerRef) => {
    const element = document.getElementById(id);
    if (element && containerRef.current) {
      const container = containerRef.current;
      const scrollLeft =
        element.offsetLeft -
        container.offsetWidth / 2 +
        element.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  // Generamos las horas de 9 a 19 (7 PM)
  const horas = [];
  for (let i = 9; i <= 19; i++) horas.push(i);

  // Efecto para centrar el día
  useEffect(() => {
    centerElement(`day-${selectedDay}`, scrollRef);
  }, [selectedDay]);

  // Efecto para centrar la hora
  useEffect(() => {
    centerElement(`hour-${selectedHour}`, scrollHorasRef);
  }, [selectedHour]);

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-[300px] w-full font-sans">
      <h2 className="text-gray-500 text-lg self-start mb-6 font-medium">
        Seleccionar Horario
      </h2>

      {/* Selector de Días (Arriba) */}
      <div
        ref={scrollRef}
        className="flex gap-2 w-full overflow-x-auto no-scrollbar py-2 px-[40%] snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {dias.map((dia) => {
          const isSelected = selectedDay === dia;
          return (
            <button
              id={`day-${dia}`}
              key={dia}
              onClick={() => setSelectedDay(dia)}
              className={`
                flex-shrink-0 px-8 py-1 rounded-full transition-all duration-500 snap-center
                ${
                  isSelected
                    ? "bg-teal-50 text-teal-700 ring-1 ring-teal-100 shadow-sm scale-110"
                    : "text-gray-400 hover:text-gray-600 scale-90 opacity-60"
                }
              `}
            >
              <span className="text-sm font-medium tracking-wide">{dia}</span>
            </button>
          );
        })}
      </div>

      <div className="py-5"></div>

      {/* Selector de Horas con Efecto de Perspectiva (Abajo) */}
      {/* Selector de Horas con Efecto de Perspectiva */}
      <div
        ref={scrollHorasRef}
        className="flex items-center gap-2 w-full max-w-2xl h-40 overflow-x-auto overflow-y-hidden no-scrollbar px-[40%] snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch", // Suavidad extra en iOS
        }}
      >
        {horas.map((hora) => {
          const isSelected = selectedHour === hora;
          const distancia = Math.abs(selectedHour - hora);

          const escala = isSelected
            ? "scale-125 z-10"
            : distancia === 1
              ? "scale-100 opacity-80"
              : distancia === 2
                ? "scale-90 opacity-60"
                : "scale-75 opacity-40";

          return (
            <button
              id={`hour-${hora}`}
              key={hora}
              onClick={() => setSelectedHour(hora)}
              className={`relative flex-shrink-0 flex flex-col items-center justify-center transition-all duration-500 ease-out snap-center
          min-w-[70px] h-[90px] rounded-2xl ${escala} ${
            isSelected
              ? "bg-teal-700 text-white shadow-xl ring-4 ring-teal-50"
              : "bg-white text-gray-400"
          }`}
            >
              <span
                className={`text-2xl font-bold ${isSelected ? "text-white" : "text-gray-700"}`}
              >
                {hora > 12 ? hora - 12 : hora}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">
                {hora >= 12 ? "PM" : "AM"}
              </span>

              {/* Punto indicador inferior */}
              {isSelected && (
                <div className="absolute -bottom-4 w-2 h-2 bg-teal-700 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimePicker;
