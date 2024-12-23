import React from 'react'
import '../styles/Contact.css'
import contactImage from '../assets/pizzaLeft.jpg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='leftSide' 
        style={{ backgroundImage: `url(${contactImage})` }}>

        </div>

        <div className='rightSide'>
            <h1>contact us</h1>
            
            <form id="contact-from" method='POST'>
                <label htmlFor="name">Full name</label>
                <input name='name' placeholder='Enter Full name... ' type='text' />

                <label htmlFor="name">Email</label>
                <input name='email' placeholder='Enter Email... ' type='email' />
                
                <label htmlFor="message">Message</label>
                <textarea rows="6"  placeholder='Enter message...' name="message " required></textarea>
               
                <button type='Submit'>send message</button>
            </form>   
        </div>
    </div>
  )
}

export default Contact
