import React, {useContext} from "react"
import {Link} from "react-router-dom"

import Photos from "../pages/Photos"
import Cart from "../pages/Cart"
import { ShoppingContext } from "../shoppingContext"

function Header() {
    const {cartItems, orderPlaced, clearCart, setOrderPlaced} = useContext(ShoppingContext)
    const cartDisplay = cartItems.length ? "ri-shopping-cart-fill ri-fw ri-2x"
                                        : "ri-shopping-cart-line ri-fw ri-2x"
    const freshStart = () => {
            clearCart()
            setOrderPlaced(false)
    }

    return (
        <header>
            <Link to="/"><h2 onClick ={freshStart}>Pic Some</h2></Link>
           
            <Link to="/cart">

                 <i className={cartDisplay}></i>
            </Link>

           
          
        </header>
    )
}

export default Header
