import React, {useState, useContext} from "react"
import { ShoppingContext } from "../shoppingContext"
//import PropTypes from "prop-types"

const Image = ({className, picture}) => {
    const {toggleFavorite, addCartItems, cartItems, removeCartItems}= useContext(ShoppingContext)
    const [hovered, setHovered] = useState(false)
    const outlineHeart = hovered && <i className="ri-heart-line favorite"
                                onClick = {() => toggleFavorite(picture.id)}></i> 
    const solidHeart = picture.isFavorite &&  <i className="ri-heart-fill favorite"
                                onClick = {()=> toggleFavorite(picture.id)}  ></i>
                                                         

    const plus = hovered && <i className="ri-add-circle-line cart"
                                onClick = {() => addCartItems(picture)}></i> 

    const inCart =   cartItems.some(item => picture.id === item.id) &&  
            <i className="ri-shopping-cart-fill cart"
                    onClick = {()=> removeCartItems(picture)}></i>         
                    
    const inCartOrPlus = inCart || plus                
  
    return (
        <div className={`${className} image-container`}
            onMouseEnter = {()=> setHovered(true)}
            onMouseLeave={()=> setHovered(false)}
        >
            <img src = {picture.url} className="image-grid" alt=""/>
            {outlineHeart}
           {solidHeart}
            {inCartOrPlus}
           
          
        </div>
    )

}

//Image.propTypes = {
//    className: PropTypes.string,
//    picture: PropTypes.shape({
//        id: PropTypes.string.isRequired,
//        url: PropTypes.string.isRequired,
//        isFavorite: PropTypes.bool
//    }),
//    toggleFavorite: PropTypes.func,
//    addCartItems: PropTypes.func,
//    removeCartItems: PropTypes.func
//}

export default Image