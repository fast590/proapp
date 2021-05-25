import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/header.css'
import UserIcon from '../../assets/icons/user.svg'
import CartIcon from '../../assets/icons/cart.svg'
// import MenuIcon from '../../assets/icons/menu.svg'
// import CloseIcon from '../../assets/icons/close.svg'

function Header() {
    return (
        <header className = "header">
            <div className = "logo">
                <h1>
                    <Link to = "/">CHANGSHOP</Link>
                    
                </h1>
            </div>
            <ul className="menu">
              <li>
                <Link to = "/">Home</Link>
              </li>
              <li>
                     <Link to = "/products">Shop</Link>
              </li>
              
            </ul>
            <ul className = "icon">
                <li>
                        <Link to = "/login">
                            <img src={UserIcon} alt="user" width = "26"/>
                        </Link>
                </li>
                <li>
                        <Link to = "/cart">
                            <img src={CartIcon} alt="cart" width = "26"/> 
                        </Link>
                </li>
            </ul>
            <div className="mobile hiden">

            </div>
        </header>
    )
}

export default Header
