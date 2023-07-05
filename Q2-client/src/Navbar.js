import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <ul>
    <li><NavLink to="/SingleProduct" activeClassName="active" className="nav">HOME</NavLink></li>
    </ul>
    </div>
  )
}

export default Navbar
