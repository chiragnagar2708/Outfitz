import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.png'
// import navProfile from '../../assets/nav-profile.svg'
import navProfile1 from '../../assets/nav-profile1.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className='nav-logo' />
      <img src={navProfile1} alt="" className='nav-profile1' />
    </div>
  )
}

export default Navbar
