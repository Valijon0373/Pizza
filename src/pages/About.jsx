import React from 'react'
import '../styles/About.css' 
import aboutBackground from '../assets/multiplePizzas.jpeg'

const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop'
        style={{ backgroundImage: `url(${aboutBackground})` }}>
        </div>

        <div className='aboutBottom'>
        <h1>About Us</h1>
            <p> Pizza Center is a cozy and modern pizzeria located in Urgench, established in 2024. 
                We are proud to serve our customers with a wide variety of pizzas, 
                offering more than 10 unique and delicious flavors.
                Whether you are a fan of classic recipes or love to explore new and creative toppings,
                Pizza Center is the perfect place to satisfy your cravings.  
                Our mission is to bring people together over great food and to create an enjoyable dining experience for everyone. 
                Visit us today and discover your favorite pizza!</p>
        </div>
    </div>
  )
}

export default About
