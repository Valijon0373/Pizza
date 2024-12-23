import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'

const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='container'>
        
        <h3>Pizza Center</h3>
        <p>just enjoy our pizza</p>
        <Link to={'/menu'}>
          <button>order now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
