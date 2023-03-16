import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className='box'>
    <h1>Oops! You seem to be lost.</h1>
    <p>Go to home page.</p>
    <Link to="/"><button type='button'>Home</button></Link>
   </div>
  )
}
