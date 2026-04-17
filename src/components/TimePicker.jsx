import React, { useState } from 'react';

const TimePicker = () => {
  const [selectedHour, setSelectedHour] = useState(14); // 2:00 PM por defecto
  const [selectedDay, setSelectedDay] = useState('Miércoles');

  const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  
  // Generamos las horas de 9 a 19 (7 PM)
  const horas = [];
  for (let i = 9; i <= 19; i++) horas.push(i);

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-[300px] w-full font-sans">
      <h2 className="text-gray-500 text-lg self-start mb-6 font-medium">Seleccionar Horario</h2>

      {/* Selector de Días (Arriba) */}
      <div className="flex gap-4 mb-12 overflow-x-auto no-scrollbar py-2">
        {dias.map((dia) => (
          <button
            key={dia}
            onClick={() => setSelectedDay(dia)}
            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
              selectedDay === dia
                ? 'bg-teal-50 text-teal-700 ring-1 ring-teal-100'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {dia}
          </button>
        ))}
      </div>

      {/* Selector de Horas con Efecto de Perspectiva (Abajo) */}
      <div className="flex items-center justify-center gap-2 w-full max-w-2xl h-32">
        {horas.map((hora) => {
          const isSelected = selectedHour === hora;
          // Calculamos la distancia para el efecto de escala
          const distancia = Math.abs(selectedHour - hora);
          
          // Lógica de escala: 1 para el centro, disminuye según se aleja
          const escala = isSelected ? 'scale-125 z-10' : 
                         distancia === 1 ? 'scale-100 opacity-80' : 
                         distancia === 2 ? 'scale-90 opacity-60' : 'scale-75 opacity-40';

          return (
            <button
              key={hora}
              onClick={() => setSelectedHour(hora)}
              className={`relative flex flex-col items-center justify-center transition-all duration-500 ease-out 
                min-w-[70px] h-[90px] rounded-2xl ${escala} ${
                isSelected 
                  ? 'bg-teal-700 text-white shadow-xl ring-4 ring-teal-50' 
                  : 'bg-white text-gray-400'
              }`}
            >
              <span className={`text-2xl font-bold ${isSelected ? 'text-white' : 'text-gray-700'}`}>
                {hora > 12 ? hora - 12 : hora}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">
                {hora >= 12 ? 'PM' : 'AM'}
              </span>

              {/* Punto indicador inferior */}
              {isSelected && (
                <div className="absolute -bottom-6 w-2 h-2 bg-teal-700 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimePicker;