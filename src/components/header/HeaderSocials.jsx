import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { FaMailBulk } from "react-icons/fa"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/utkarshgoel10"><FaGithub /></a>
        <a href="https://github.com/utkarshgoel10"><BsTwitter /></a>        
        <a href="https://www.youtube.com/channel/UCStJJmtgJnLoTKBRi9cOQSg"><BsYoutube /></a>
        <a href="https://www.linkedin.com/in/goelutkarsh/"><FaLinkedinIn /></a>        
        <a href="https://www.instagram.com/utkarsh_goel.10/"><BsInstagram /></a>
        <a href="mailto:goelutkarsh7u@gmail.com"><FaMailBulk /></a>
        
        
    </div>    
  );
};

export default HeaderSocials;
