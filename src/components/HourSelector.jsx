import React, { useRef, useEffect } from "react";

const HourSelector = ({ selectedHour, setSelectedHour }) => {
  const scrollHorasRef = useRef(null);
  const horas = [];
  for (let i = 9; i <= 19; i++) horas.push(i);

  const centerElement = (id) => {
    const element = document.getElementById(id);
    if (element && scrollHorasRef.current) {
      const container = scrollHorasRef.current;
      const scrollLeft =
        element.offsetLeft - container.offsetWidth / 2 + element.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    centerElement(`hour-${selectedHour}`);
  }, [selectedHour]);

  return (
    <div
      ref={scrollHorasRef}
      className="flex items-center gap-2 w-full max-w-2xl h-40 overflow-x-auto overflow-y-hidden no-scrollbar px-[40%] snap-x snap-mandatory"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
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
              min-w-[40px] h-[60px] rounded-xl ${escala} ${
              isSelected
                ? "bg-teal-700 text-white shadow-xl ring-4 ring-teal-50"
                : "bg-white text-gray-400"
            }`}
          >
            <span className={`text-2xl font-bold ${isSelected ? "text-white" : "text-gray-700"}`}>
              {hora > 12 ? hora - 12 : hora}
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">
              {hora >= 12 ? "PM" : "AM"}
            </span>
            {isSelected && (
              <div className="absolute -bottom-4 w-2 h-2 bg-teal-700 rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default HourSelector;