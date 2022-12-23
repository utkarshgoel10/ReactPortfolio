import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
// Change the active nav icon to other when clicked
import { useState } from 'react'
import ReactTooltip from "react-tooltip";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a data-tip data-for="home" href="/" onClick={()=> setActiveNav('/')} className= {activeNav === '/' ? 'active' : ''}><AiOutlineHome /></a>
      <ReactTooltip id="home" place="top" effect="solid">Home</ReactTooltip>

      <a data-tip data-for="about" href="#abouts" onClick={()=> setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <ReactTooltip id="about" place="top" effect="solid">About</ReactTooltip>

      <a data-tip data-for="skills" href="#experience" onClick={()=> setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <ReactTooltip id="skills" place="top" effect="solid">Skills</ReactTooltip>

      <a data-tip data-for="Experience" href="#services" onClick={()=> setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <ReactTooltip id="Experience" place="top" effect="solid">Experience</ReactTooltip>
      
      <a data-tip data-for="Contact" href="#contact" onClick={()=> setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>                        
      <ReactTooltip id="Contact" place="top" effect="solid">Contact</ReactTooltip>
    </nav>
  )
}

export default Nav