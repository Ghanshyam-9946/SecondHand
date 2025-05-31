import React from 'react'
import { NavLink } from 'react-router-dom'

const ShoeBanner = () => {
  return (
    <div className=' h-140 w-screen bg-red-800'>
        <NavLink to='/collection'>
            <div>
                {/* <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="error" /> */}
            </div>
        </NavLink>
    </div>
  )
}

export default ShoeBanner