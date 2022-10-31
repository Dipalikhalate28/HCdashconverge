import React from 'react'

import '../style/navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <a href='#' className='togglebtn'>
       <span className='bar'></span>  
       <span className='bar'></span>  
       <span className='bar'></span>  
      </a>
        <ul>
            <li>About</li>
            <li>Find Talent</li>
            <li>Find Work</li>
            <li>Blogs</li>
            <li className='active'>Let's Connect</li>
        </ul>
    </div>
  )
}

export default Navbar