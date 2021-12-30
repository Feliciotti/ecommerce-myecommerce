import { Link } from 'react-router-dom'
import {useCartContext} from '../../Context/CartContext.jsx'

const Cart = () => {

    const {cartList, resetCart} = useCartContext()


    if (cartList.length === 0) {
        return (
            <div>
            <h1>El carrito está vacío</h1>
            <Link to="/">Volver a la tienda</Link>
            </div>
        )
    }else{
        return (
            <div>
            {cartList.map(prod=> <p>
                                    {prod.product} {prod.stock}
                                 </p>)}                
            <button onClick={resetCart}> Vaciar </button>
            </div>
        )
    }
    
}

export default Cart