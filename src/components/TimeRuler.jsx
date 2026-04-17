import React from 'react';

const HorarioAtencion = () => {
  // Configuración de 9:00 AM a 7:00 PM (19:00)
  const inicio = 9;
  const fin = 19;
  const intervalos = [];

  // Generamos intervalos de 15 minutos para que se vea denso como la imagen
  for (let hora = inicio; hora <= fin; hora++) {
    for (let min = 0; min < 60; min += 15) {
      if (hora === fin && min > 0) break;
      intervalos.push({ hora, min });
    }
  }

  const totalTicks = intervalos.length;

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm">
      <div className="flex items-end justify-center gap-1 h-20 mb-4">
        {intervalos.map((tiempo, index) => {
          // Calculamos la altura usando una función de parábola invertida
          // El centro es (totalTicks / 2)
          const centro = (totalTicks - 1) / 2;
          const distanciaAlCentro = Math.abs(index - centro);
          
          // Altura base 12px, altura máxima 48px
          const alturaNormalizada = Math.max(12, 48 - (distanciaAlCentro * 2.5));
          
          const esHoraPunta = tiempo.min === 0;
          const esMediaHora = tiempo.min === 30;

          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-1 rounded-full transition-all ${
                  distanciaAlCentro < 5 ? 'bg-cyan-500' : 'bg-slate-300'
                }`}
                style={{ height: `${alturaNormalizada}px` }}
              />
            </div>
          );
        })}
      </div>

      {/* Etiquetas de tiempo en la parte inferior */}
      <div className="flex justify-between w-full px-2">
        {intervalos.map((tiempo, index) => {
          const mostrarLabel = tiempo.min === 0; // Solo mostramos las horas en punto
          
          return (
            <div key={index} className="w-0 flex justify-center">
              {mostrarLabel && (
                <span className="text-xs font-medium text-slate-500 whitespace-nowrap mt-2">
                  {`${tiempo.hora}:00`}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorarioAtencion;