import React, {useContext, useState} from "react"
import { ShoppingContext } from "../shoppingContext"
import CartItemsDisplay  from "../components/CartItemsDisplay"

function Cart() {
   
    const [orderMsg, setOrderMsg] = useState("Wait ...")
    
    const {cartItems, clearCart, orderPlaced, setOrderPlaced}= useContext(ShoppingContext)
    const itemList = cartItems.map(item => (
        <CartItemsDisplay key = {item.id} item={item}  />
    ))
    let totalCost = cartItems.length*8.88
    totalCost= totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})


    const submitOrder = () => {
        setOrderPlaced(true)
        setTimeout(()=>{
            setOrderMsg("Order Placed!")}
            , 1000)
    }
    
    const orderDom = <div className = 'cart-page'>
                         <h1>{orderMsg}</h1>
                         {itemList}
                       <p className="total-cost">Total: {totalCost}</p>
                     </div>
    const buttonDisplay = <div className="order-button">
                                <button onClick={submitOrder}>Place Order</button>
                        </div>                 
    const cartDom = 
            <main className="cart-page">
                <h1>Check out</h1>
                {itemList}
                <p className="total-cost">Total: {totalCost}</p>
                {cartItems.length > 0 && buttonDisplay}
            </main>

    const displayMsg = orderPlaced? orderDom : cartDom

    return (
      <div>
            {displayMsg}
      </div>
        
        
)
       } 
    


export default Cart