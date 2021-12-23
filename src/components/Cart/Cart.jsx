import {useCartContext} from '../../Context/CartContext.jsx'

const Cart = () => {

    const {cartList, resetCart} = useCartContext()

    return (
        <div>
            {cartList.map(prod=> <li>{prod.product}</li>)}
            <button onClick={resetCart}> Vaciar </button>
        </div>
    )
}

export default Cart