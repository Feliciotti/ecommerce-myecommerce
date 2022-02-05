import {createContext, useState, useContext} from 'react'

const cartContext = createContext([]);
export const useCartContext = () => useContext(cartContext)

function CartContextProvider({children}) {
    
    const [cartList, setCartList] = useState([])

    //// AÑADIR // SUMAR PRODUCTOS ////
    function cartAdd (products) {

        const index = cartList.findIndex(i => i.id === products.id)

            if (index > -1) {
                const oldProduct = cartList[index].stock

                cartList.splice(index, 1)

                setCartList( [...cartList, {...products, stock: products.stock + oldProduct} ] )

            } else {
                setCartList( [...cartList, products] )
            }
    }


    //// VACIAR CARRITO ////////
    function resetCart() {
        setCartList([])
    }

    /// PRECIO TOTAL
    const totalPrice =()=>{
        return cartList.reduce((amount, products) => amount + (products.stock * products.price) , 0)
    }

    /// ITEM EN CARRITO
    const totalItems =()=>{
        return cartList.reduce((amount, products) => amount + (products.stock) , 0)
    }

    /// BORRAR ITEM
    const deleteItem = (id) => {
        setCartList( cartList.filter(product => product.id !== id) ) 
    }


    return(
        <cartContext.Provider value={ {
            cartList,
            cartAdd,
            deleteItem,
            totalPrice,
            totalItems,
            resetCart
         } }>
            { children }
        </cartContext.Provider>
    )

}

export default CartContextProvider