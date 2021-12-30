import {createContext, useState, useContext} from 'react'

const cartContext = createContext([]);
export const useCartContext = () => useContext(cartContext)

function CartContextProvider({children}) {
    
    const [cartList, setCartList] = useState([])

    //// AÑADIR PRODUCTOS ////

    function cartAdd (products) {

        const index = cartList.findIndex(i => i.id === products.id)

            if (index > -1) {
                const oldProduct = cartList[index].stock

                cartList.splice(index, 1)

                setCartList( [...cartList, {products, stock: products.stock + oldProduct} ] )

            } else {
                setCartList( [...cartList, products] )
            }
    }


    //// ELIMINAR PRODUCTO /////

    function removeItem (products) {

        const index = cartList.findIndex(i => i.id === products.id)

            if (index > -1) {
                const oldProduct = cartList[index].stock

                cartList.splice(index, 1)

                setCartList( [...cartList, {products, stock: products.stock + oldProduct} ] )

            } else {
                setCartList( [...cartList, products] )
            }
    }


    //// VACIAR CARRITO ////////


    function resetCart() {
        setCartList([])
    }


    return(
        <cartContext.Provider value={ {
            cartList,
            cartAdd,
            resetCart,
            removeItem
         } }>
            { children }
        </cartContext.Provider>
    )

}

export default CartContextProvider