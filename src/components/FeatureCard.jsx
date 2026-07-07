import React from 'react';

const FeatureCard = ({ title, description, icon, iconColor, bgColor }) => {
  return (
    <article className="flex flex-col items-start text-left">
      <div className={`${iconColor} mb-4 ${bgColor} p-3 rounded-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </article>
  );
};

export default FeatureCard;
