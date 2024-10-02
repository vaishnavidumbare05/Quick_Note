import React from 'react'
import ImgHome from "./../../Asset/home (1).png"
import { Link } from 'react-router-dom'
import "./HomeButton.css"

function HomeButton() {
  return (
    <div> 
    <Link to="/">
    <img src={ImgHome} alt="Home" className='home-img'/>
    </Link>
    </div>
  )
}

export default HomeButton