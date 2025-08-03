import React from 'react'


const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-lg transition-all text-left">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}

export default FeatureCard
