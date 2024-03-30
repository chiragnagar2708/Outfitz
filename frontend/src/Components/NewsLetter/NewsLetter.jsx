import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
    <h1>Unlock VIP Discounts!</h1>
    <p>Join our exclusive list for special offers</p>
    <div>
        <input type='email' placeholder='Your Email id' />
        <button>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetter
