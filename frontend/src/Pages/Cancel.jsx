import React from 'react'
import CancelImage from '../Components/Assets/cancel.gif'
import './CSS/Cancel.css'
import { Link } from 'react-router-dom'

const Cancel = () => {
  return (
    <div className='cancel'>
        <div className="imgP1">
            <img src= {CancelImage} height={150} width={160} alt=''/>
            <p>Payment Failed</p>
        </div>
        <div className='homeP1'>
            <p>Click here to return to home page</p>
            <Link to='/'><button>Home</button></Link>
            
        </div>
    </div>
  )
}

export default Cancel
