import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {BsWhatsapp}from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/cafj100" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/imcafj" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/profile.php?id=100007987205918" target="_blank"><FaFacebook /></a>
        <a href="https://api.whatsapp.com/send?phone=5581988653582" target="_blank"><BsWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials