import React, { useRef, useEffect, useMemo } from "react";

const DaySelector = ({ selectedDay, setSelectedDay }) => {
  const scrollRef = useRef(null);

  // Generar los próximos 7 días laborables dinámicamente
  const diasProximos = useMemo(() => {
    const lista = [];
    let fechaActual = new Date();

    while (lista.length < 7) {
      const nombreDia = fechaActual.toLocaleDateString("es-ES", { weekday: "long" });
      const numeroDia = fechaActual.getDate();
      const capitalizedDia = nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1);

      // Omitir domingos basándonos en tu horario de atención
      if (fechaActual.getDay() !== 0) {
        lista.push({
          id: `${capitalizedDia}-${numeroDia}`, // ID único para el scroll
          label: capitalizedDia,
          numero: numeroDia,
          fullLabel: `${capitalizedDia} ${numeroDia}`
        });
      }
      
      fechaActual.setDate(fechaActual.getDate() + 1);
    }
    return lista;
  }, []);

  useEffect(() => {
    if (!selectedDay && diasProximos.length > 0) {
      setSelectedDay(diasProximos[0].fullLabel);
    }
  }, [selectedDay, diasProximos, setSelectedDay]);
  
  const centerElement = (id) => {
    const element = document.getElementById(id);
    if (element && scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft =
        element.offsetLeft - container.offsetWidth / 2 + element.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Buscamos el objeto que coincida con el día seleccionado para obtener su ID único
    const diaEncontrado = diasProximos.find(d => d.fullLabel === selectedDay);
    if (diaEncontrado) {
      centerElement(`day-${diaEncontrado.id}`);
    }
  }, [selectedDay, diasProximos]);

  return (
    <div
      ref={scrollRef}
      className="flex gap-2 w-full overflow-x-auto no-scrollbar py-4 px-[40%] snap-x snap-mandatory"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {diasProximos.map((dia) => {
        const isSelected = selectedDay === dia.fullLabel;
        return (
          <button
            id={`day-${dia.id}`}
            key={dia.id}
            onClick={() => setSelectedDay(dia.fullLabel)}
            className={`flex-shrink-0 px-6 py-2 rounded-2xl transition-all duration-500 snap-center flex flex-col items-center min-w-[100px]
              ${isSelected 
                ? "bg-teal-50 text-teal-700 ring-1 ring-teal-100 shadow-sm scale-110" 
                : "text-gray-400 hover:text-gray-600 scale-90 opacity-60"
              }`}
          >
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">
              {dia.label}
            </span>
            <span className="text-xl font-black">
              {dia.numero}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default DaySelector;