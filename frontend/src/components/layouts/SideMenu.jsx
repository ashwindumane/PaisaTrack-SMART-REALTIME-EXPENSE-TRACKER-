import React, { useContext } from 'react'
import { SIDE_MENU_DATA } from '../../utils/data'
import { UserContext } from '../../context/userContext'
import { useNavigate, useLocation } from 'react-router-dom'
import CharAvatar from '../Cards/CharAvatar'

const SideMenu = () => {
  const { user, clearUser } = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()

  const currentPath = location.pathname

  const handleClick = (route) => {
    if (route === 'logout') {
      handleLogout()
      return
    }
    navigate(route)
  }

  const handleLogout = () => {
    localStorage.clear()
    clearUser()
    navigate('/login')
  }

  return (
    <div className='w-56 md:w-64 h-[calc(100vh-60px)] bg-white border-r border-gray-200/50 p-4 md:p-5 sticky top-[60px] z-20'>
      <div className='flex flex-col items-center justify-center gap-2 md:gap-3 mt-2 mb-6'>
        {user?.profileImageUrl ? (
          <img src={user?.profileImageUrl || ''} alt='Profile Image' className='w-16 h-16 md:w-20 md:h-20 bg-slate-400 rounded-full' />
        ) : (
          <CharAvatar fullName={user?.fullName} width='w-16 md:w-20' height='h-16 md:h-20' style='text-lg md:text-xl' />
        )}
        <h5 className='text-sm md:text-base font-medium'>{user?.fullName || ''}</h5>
      </div>

      {SIDE_MENU_DATA.map((item, index) => {
        const isLogout = item.path === 'logout'
        const isActive = !isLogout && currentPath === item.path

        return (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-3 md:gap-4 text-[14px] md:text-[15px] ${isActive ? 'text-white bg-primary' : ''} py-2.5 md:py-3 px-4 md:px-6 rounded-lg mb-2 md:mb-3`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className='text-lg md:text-xl' />
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

export default SideMenu
