import {createContext, useContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        const product = getItemFromCart(item);

        if (product) {
            product.quantity += item.quantity;
            setCart([
                ...cart
            ])
        }
        else
            setCart([
                ...cart,
                item
            ])
    }

    const getItemFromCart = (item) => {
        return cart.find(i => i.id === item.id);
    }

    const resetCart = () => {
        setCart([])
    }

    const removeFromCart = (item) => {
        const newCart = cart.filter(i => i.id !== item.id)
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{cart, addToCart, resetCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
