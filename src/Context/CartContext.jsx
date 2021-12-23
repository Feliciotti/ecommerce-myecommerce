import {createContext, useState, useContext} from 'react'

const cartContext = createContext([]);
export const useCartContext = () => useContext(cartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    //function cartAdd(item) {
       // setCartList( [...cartList, item])
    //}

    function cartAdd (products) {

        const index = cartList.findIndex(i => i.id === products.id)

            if (index > -1) {
                const oldProduct = cartList[index].quantity

                cartList.splice(index, 1)

                setCartList( [...cartList, {products, quantity: products.quantity + oldProduct} ] )

            } else {
                setCartList( [...cartList, products] )
            }
    }

    function resetCart() {
        setCartList([])
    }

    return(
        <cartContext.Provider value={ {
            cartList,
            cartAdd,
            resetCart
         } }>
            { children }
        </cartContext.Provider>
    )

}

export default CartContextProvider