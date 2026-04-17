import React, { useState } from 'react';

const StatCard = ({ icon: Icon, value, label, tooltipText, onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative flex flex-col justify-center cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-brand-navy text-white text-[10px] rounded shadow-lg whitespace-nowrap z-20 animate-in fade-in zoom-in duration-200">
          {tooltipText}
          {/* Triangulito del tooltip */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-navy rotate-45" />
        </div>
      )}

      <div className="flex items-center gap-1.5 mb-1 transition-transform group-hover:scale-105">
        <Icon size={16} className="text-sky-500" />
        <span className="text-base font-bold text-brand-navy">{value}</span>
      </div>
      
      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold group-hover:text-sky-500 transition-colors">
        {label}
      </p>
    </div>
  );
};