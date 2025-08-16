// InfoCard.jsx
import React from 'react'

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50 w-full">
      <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-lg sm:text-2xl text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>
      <div>
        <h6 className="text-xs sm:text-sm text-gray-500 mb-1">{label}</h6>
        <span className="text-lg sm:text-[22px] font-medium">₹{value}</span>
      </div>
    </div>
  )
}

export default InfoCard
