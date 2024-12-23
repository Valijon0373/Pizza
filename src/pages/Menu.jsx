import React from 'react'
import {MenuList} from '../const/menuList'
import Menuitem from '../components/menuItems/Menuitem'
import "../styles/Menu.css"


function Menu() {
  return (
    <div className='menu'>
        <h2 className='menuTitle'>Our Menu</h2>
        <div className='menuList'>{MenuList.map((menuItem, key )=> {
          return  <Menuitem
          key={key}
           image={menuItem.image} 
           name={menuItem.name} 
           price={menuItem.price} /> })}

          </div>
    </div>
  )
}

export default Menu