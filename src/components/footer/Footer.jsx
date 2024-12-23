import React from 'react'
import '../../styles/Footer.css'
import { Instagram, Telegram , Facebook, LinkedIn} from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Instagram /> <Telegram /> <Facebook/> <LinkedIn/>
      </div>
      <p> &copy; 2024 www.pizzacenter.uz </p>  
    </div>
  )
}

export default Footer
