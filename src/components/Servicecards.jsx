import React from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { ArrowUpRight } from "lucide-react";

const ServiceCards = () => {
  const navigate = useNavigate();
  const services = [
    { title: "Uña encarnada", price: "$550", active: true },
    { title: "Quiropodia", price: "$350", active: false },
    { title: "Hongo-Onicomicosis", price: "$550", active: false },
    { title: "Curaciones", price: "$550", active: true },
    // { title: "Ver mas", price: "$550", active: false },
  ];

  const handleServiceClick = (service) => {
    // alert(service.title);

    navigate("/agendar", {
      state: { serviceName: service.title, price: service.price },
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleServiceClick(service)}
            className={`relative group p-8 rounded-[40px] transition-all duration-300 cursor-pointer h-64 flex flex-col justify-between ${
              service.active
                ? "bg-[#003d4d] text-white shadow-2xl"
                : "bg-white text-gray-800 border border-gray-100 shadow-sm hover:shadow-md"
            }`}
          >
            {/* Título del servicio */}
            <h3
              className={`text-2xl font-medium tracking-tight ${
                service.active ? "text-white" : "text-slate-700"
              }`}
            >
              {service.title}
            </h3>

            {/* Contenedor inferior: Precio e Icono */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-3xl font-bold mb-1">
                  <span className="text-2xl font-normal opacity-70 tracking-wide">~ </span>
                  {service.price}
                </p>
                <p
                  className={`text-sm opacity-60 ${
                    service.active ? "text-teal-100" : "text-slate-500"
                  }`}
                >
                  Precio apróx.
                </p>
              </div>

              {/* Botón de flecha redondeado */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  service.active
                    ? "bg-[#bce7ef] text-[#003d4d]"
                    : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                }`}
              >
                <ArrowUpRight size={28} />
              </div>
            </div>
          </div>
        ))}
        <div className="relative group p-8 rounded-[40px] transition-all duration-300 cursor-pointer flex flex-col justify-between bg-white text-gray-800 border border-gray-100 shadow-sm hover:shadow-md">
          Estamos trabajando para ti
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
