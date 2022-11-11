import React, {useContext, useState} from "react"
import { ShoppingContext } from "../shoppingContext";


const CartItemsDisplay = ({item}) => {
    const {removeCartItems, orderPlaced} = useContext(ShoppingContext)
    const [trashCan, setTrashCan]= useState("ri-delete-bin-line")
 
    return ( 
        <div className="cart-item">
            {orderPlaced || <i className={trashCan}
            onClick={()=> removeCartItems(item)}
            onMouseEnter={()=> setTrashCan("ri-delete-bin-fill")}
            onMouseLeave={()=> setTrashCan("ri-delete-bin-line")}></i>}
            <img src={item.url} width="80px" />
            <p>$8.88</p>
        </div>
     )
}
 
export default CartItemsDisplay;
/*onClick={()=> removeCartItems({item})}*/