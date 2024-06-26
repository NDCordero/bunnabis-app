import { createContext, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {

            const nuevoCarrito = cart.map((compra) => {
                if (compra.id === item.id) {
                    return { ...compra, quantity: compra.quantity + quantity }
                } else {
                    return compra
                }
            })

            setCart(nuevoCarrito)
        } else {

            setCart([...cart, { ...item, quantity }])
        }
    }

    const cartQuantity = () => {
        return cart.reduce((acumulador, compra) => acumulador += compra.quantity, 0)
    }

    const cartPriceTotal = () => {
        return cart.reduce((acumulador, compra) => acumulador += (compra.price * compra.quantity), 0)
    }

    const clear = () => {
        setCart([])
    }


    const removeItem = (itemId) => {
        setCart(cart.filter((compra) => compra.id !== itemId))
    }

    const isInCart = (itemId) => {
        return cart.some((compra) => compra.id === itemId)

    }

    const itemQuantity = (id) => {
        const itemInCart = cart.find((item) => item.id === id)

        if (itemInCart) {
            return itemInCart.quantity
        } else {
            return 0
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, isInCart, cartQuantity, cartPriceTotal, itemQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
