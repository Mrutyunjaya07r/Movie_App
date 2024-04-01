import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo"></div>
        <Link to="/">Movie</Link>
        <Link to="/Watchlist">Watchlist</Link>
        <Link to="/Aboutus">About us</Link>
      </nav>
       
</div>
  )
}

export default Navbar