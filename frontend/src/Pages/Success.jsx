import React from 'react'
import SuccessImage from '../Components/Assets/success.gif'
import './CSS/Success.css'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='success'>
        <div className="imgP">
            <img src= {SuccessImage} height={150} width={160} alt=''/>
            <p>Payment done Successfully</p>
        </div>
        <div className='homeP'>
            <p>Click here to return to home page</p>
            <Link to='/'><button>Home</button></Link>
            
        </div>
    </div>
  )
}

export default Success
