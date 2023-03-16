import React from 'react'
import './Footer.css'
import {BsTwitter, BsInstagram, BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='social-media-container'>
         <div className='me-2'><Link className='nav-link' to='/'> <BsTwitter /></Link></div>
         <div className='me-2'><Link className='nav-link' to='/'><BsFacebook /></Link></div>
         <div className='me-2'><Link className='nav-link' to='/'><BsInstagram /></Link></div>
      </div>
    </div>
  )
}
