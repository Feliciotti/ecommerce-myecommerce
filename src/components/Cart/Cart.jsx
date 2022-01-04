import { Link } from 'react-router-dom'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import {useCartContext} from '../../Context/CartContext.jsx'

const Cart = () => {

    const {cartList, resetCart, totalPrice, deleteItem, totalItems} = useCartContext()

    const generateOrder = (e) =>{
        e.preventDefault()

        const order = {}

        order.buyer = {name: 'Aimon', num: '1122334455', email: 'aimon.cabral@gmail.com'}
        order.total = totalPrice();

        order.products = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.product;
            const price = cartItem.price * cartItem.stock;

            return {id, name, price}
        })

        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }


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
                                    <button onClick={deleteItem}>Eliminar</button>
                                    {prod.product} {prod.stock}u.
                                 </p>)}
                                 <p>
                                    Cantidad de artículos: {totalItems()}
                                    <br/>
                                    Precio total: {totalPrice()}$
                                 </p>
            <form onSubmit={generateOrder}>
                <button>Comprar</button>
            </form>                
            <button onClick={resetCart}> Vaciar </button>
            </div>
        )
    }
    
}

export default Cart