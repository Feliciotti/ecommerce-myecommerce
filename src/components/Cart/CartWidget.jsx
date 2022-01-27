import pokeballcart from './pokeballcart.png'
import { Link } from "react-router-dom";
import {useCartContext} from '../../Context/CartContext.jsx'
import './Cart.css'



function CartWidget() {

    const {totalItems} = useCartContext()
    
    return (
        <div className='cartWidget'>
            <Link to="/cart">
                <img alt="Cart" src={pokeballcart} />
            </Link>
            <p className='cartCounter pokelink'>{totalItems()}</p>
        </div>
    )
}

export default CartWidget