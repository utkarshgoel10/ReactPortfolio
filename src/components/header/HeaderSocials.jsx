import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {GrYoutube} from 'react-icons/gr'
import {Link} from 'react-router-dom'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/goelutkarsh/"><BsLinkedin /></a>
        <a href="https://github.com/utkarshgoel10"><FaGithub /></a>
        <a href="https://www.instagram.com/utkarsh_goel.10/"><BsInstagram /></a>
        <a href="https://www.youtube.com/channel/UCStJJmtgJnLoTKBRi9cOQSg"><GrYoutube /></a>
    </div>
  )
}

export default HeaderSocials
