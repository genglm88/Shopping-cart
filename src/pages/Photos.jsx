import React, {useContext} from "react"
import {ShoppingContext} from "../shoppingContext"
import {getClass} from "../utils/index"
import Image from "../components/Image"

function Photos() {
    const {pictures, cartItems, toggleFavorite, addCartItems, removeCartItems} = useContext(ShoppingContext)

    const pictureDisplay = pictures.map(picture => (
        <Image key= {picture.id} 
                className = {getClass(picture.id)}
                picture = {picture}
            />
            ))
 
    return (
        <main className="photos">
            
           {pictureDisplay}
           {console.log(cartItems)}
            
        </main>
    )
}

export default Photos
/*  
            <img src = {pictures[1].url}/>

                       { pictures.map(picture =>{return `
                <Image className = ${getClass(picture.id)}
                        url = ${picture.url}
                 /> ` }    
    )}
*/