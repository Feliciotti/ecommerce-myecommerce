import { Link } from 'react-router-dom'
import {addDoc, collection, getFirestore, Timestamp} from 'firebase/firestore'
import {useCartContext} from '../../Context/CartContext.jsx'
import { useState } from 'react'

const Cart = () => {

    const [formData, setFormData] = useState({
        name: "", phone: "", email:""
    })

    const {cartList, resetCart, totalPrice, deleteItem, totalItems} = useCartContext()

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    console.log(formData)

    const generateOrder = (e) =>{
        e.preventDefault()

        const order = {}

        order.date = Timestamp.fromDate(new Date())
        order.buyer = formData
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
            <form
                onSubmit={generateOrder}
                onChange={handleChange}
            >

                <input
                type='text'
                name='name'
                placeholder='Nombre'
                value={formData.name} />

                <input type='text'
                name='phone'
                placeholder='Teléfono'
                value={formData.phone}/>

                <input
                type='email'
                name='email'
                placeholder='Correo electrónico'
                value={formData.email}/>
                
                <button>Comprar</button>

            </form>                
            <button onClick={resetCart}> Vaciar </button>
            </div>
        )
    }
    
}

export default Cart