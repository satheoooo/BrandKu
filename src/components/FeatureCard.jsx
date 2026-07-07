import React, { useState, useEffect } from 'react';

const FeatureCard = ({ id, title, description, icon, iconColor, bgColor }) => {
  const [jumlahSuka, setJumlahSuka] = useState(() => {
    const saved = localStorage.getItem(`suka-${id}`);
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`suka-${id}`, jumlahSuka);
  }, [jumlahSuka, id]);

  return (
    <article className="flex flex-col items-start text-left bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className={`${iconColor} mb-4 ${bgColor} p-3 rounded-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed mb-4">{description}</p>
      <button 
        className="mt-auto flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 active:scale-95 transition-all text-xs font-semibold cursor-pointer" 
        onClick={() => setJumlahSuka((prev) => prev + 1)}
      >
        ❤️ Suka ({jumlahSuka})
      </button>
    </article>
  );
};

export default FeatureCard;
