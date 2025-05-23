import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { USERSCONTROL_PAGE } from '../utils/routes'
import Menu from './Menu'
import WrappedAdd from '../components/WrappedAdd'
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const token = localStorage.getItem('Token')

  return (
    <header id="header" >
      <div className="w-[100%] min-h-[100px] bg-gray-500 dark:bg-gray-950 text-center flex items-center justify-between px-10">
        <Menu />

        {token === 'Admin' && (
          <div>
            <NavLink className="text-2xl font-bold text-black dark:text-white" to={USERSCONTROL_PAGE}>
              Users-Control
            </NavLink>
          </div>
        )}

        {token && (
          <h1 className="text-2xl font-bold text-black dark:text-white flex items-center ">
            <span
              className="cursor-pointer hover:text-red-200"
              onClick={() => {
                localStorage.removeItem('Token')
                window.location.reload()
              }}
            >
              {token}
            </span>

            <FaUserCircle
              onClick={() => {
                localStorage.removeItem('Token')
                window.location.reload()
              }}
              className="text-7xl cursor-pointer text-slate-700 dark:text-slate-500  active:text-green-600 hover:text-slate-900 dark:hover:text-slate-300 ml-5"
            />
          </h1>
        )}
        <MdDarkMode
          onClick={() => document.body.classList.toggle('dark')}
          className='absolute right-0 top-0 text-4xl cursor-pointer text-slate-700 dark:text-slate-500 active:text-green-600 hover:text-slate-900 dark:hover:text-slate-300' />
      </div>
      <WrappedAdd />
    </header>
  )
}

export default Header
