// TransactionInfoCard.jsx
import React from 'react'
import { LuUtensils, LuTrendingUp, LuTrendingDown, LuTrash2 } from "react-icons/lu"

const TransactionInfoCard = ({ title, icon, date, amount, type, hideDeleteBtn, onDelete }) => {
  const getAmountStyles = () => type === "income" ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500"

  return (
    <div className="group relative flex items-center gap-3 sm:gap-4 mt-2 p-2 sm:p-3 rounded-lg hover:bg-gray-100/60">
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-base sm:text-xl text-gray-800 bg-gray-100 rounded-full">
        {icon ? (
          <img src={icon} alt={title} className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (<LuUtensils />)}
      </div>
      <div className="flex-1 flex items-center justify-between">
        <div>
          <p className="text-sm sm:text-base text-gray-700 font-medium">{title}</p>
          <p className="text-xs text-gray-400 mt-1">{date}</p>
        </div>
        <div className="flex items-center gap-2">
          {!hideDeleteBtn && (
            <button onClick={onDelete} className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <LuTrash2 size={18} />
            </button>
          )}
          <div className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-md ${getAmountStyles()}`}>
            <h6 className="text-xs sm:text-sm font-medium">{type === "income" ? "+" : "-"} ₹{amount}</h6>
            {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionInfoCard
