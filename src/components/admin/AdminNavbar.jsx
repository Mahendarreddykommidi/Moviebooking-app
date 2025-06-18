import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30 '>
        <NavLink to="/">
        <img src={assets.logo} alt="" />

     

        </NavLink>
    </div>
  )
}

export default AdminNavbar