import  React, {useState, useEffect} from "react"
const ShoppingContext = React.createContext()

const ShoppingContextProvider= ({children}) => {
    const [pictures, setPictures] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [orderPlaced, setOrderPlaced] = useState(false)

    useEffect(()=>{
        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        fetch(url)
            .then (res => res.json())
            .then (data => setPictures(data))
    },[])

    const toggleFavorite = (id) => {
        const newPictures = pictures.map(photo => {
            if (photo.id === id) {
                /*console.log(id)
                console.log(!photo.isFavorite)*/
                return {
                    ...photo,
                    isFavorite:!photo.isFavorite}
            } else {
                return photo
            }
 
        })
        setPictures(newPictures)
    }

    const addCartItems = (picture)  => {
        
        setCartItems(prevCart => [...prevCart, picture])
    } 
    
    const removeCartItems = (picture) => {
        const newCart = cartItems.filter(item => item.id !== picture.id)
        setCartItems(newCart)
    }

    const clearCart = () =>{
        setCartItems([])
    }

    return (
        <ShoppingContext.Provider value={{
            pictures, 
            cartItems, 
            toggleFavorite, 
            addCartItems, 
            removeCartItems, 
            clearCart, 
            orderPlaced,
            setOrderPlaced
            }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export {ShoppingContextProvider, ShoppingContext}

