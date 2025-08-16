import React from 'react'
import { LuTrendingUpDown } from "react-icons/lu"
import image from '../../../src/img.png'

const AuthLayout = ({ children }) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full h-screen md:w-[60vw] px-6 md:px-12 pt-8 pb-12 flex flex-col justify-between'>
        <div>
          <h2 className='text-xl md:text-2xl font-semibold text-black tracking-wide'>
            पैसा <span className="text-primary">TRACK</span> – SMART REALTIME EXPENSE TRACKER
          </h2>

          <div className="mt-10 md:mt-16">
            {children}
          </div>
        </div>

        <p className="text-center text-xs md:text-sm text-gray-400 mt-8">
          Design and Developed by Ashwin Dumane
        </p>
      </div>

      <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-6 lg:p-8 relative'>
        <div className='w-32 h-32 md:w-48 md:h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5'></div>
        <div className='w-32 h-32 md:w-48 md:h-48 rounded-[40px] border-[12px] md:border-[20px] border-fuchsia-600 absolute top-[30%] right-5 md:right-10'></div>
        <div className='w-32 h-32 md:w-48 md:h-48 rounded-[40px] bg-violet-500 absolute bottom-7 -left-5'></div>

        <div className='grid grid-cols-1 z-20'>
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-primary"
          />
        </div>

        <img className="w-40 md:w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15 rounded-2xl" src={image} alt="" />
      </div>
    </div>
  )
}

export default AuthLayout

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className='flex gap-4 md:gap-6 bg-white p-3 md:p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10'>
      <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg md:text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>
      <div>
        <h6 className='text-[11px] md:text-xs text-gray-500 mb-1'>{label}</h6>
        <span className='text-base md:text-[20px]'>${value}</span>
      </div>
    </div>
  )
}
