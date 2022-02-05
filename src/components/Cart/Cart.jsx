import { Link } from 'react-router-dom'
import {addDoc, collection, getFirestore, Timestamp} from 'firebase/firestore'
import {useCartContext} from '../../Context/CartContext.jsx'
import { useState } from 'react'
import pokeball from './pokeball.png'
import removeitem from './removeitem.png'
import './Cart.css'
import '../Helpers - css/Buttons.css'
import '../Helpers - css/Form.css'
import '../Helpers - css/Links.css'

const Cart = () => {

    const [formData, setFormData] = useState({
        name: "", phone: "", email:""
    })

    const {cartList, resetCart, totalPrice, totalItems, deleteItem} = useCartContext()

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

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
    }


    if (cartList.length === 0) {
        return (
            <div className='pokecart__empty'>
            <h1 className='poketitle'>SIN POKEMONES</h1>
            <div className='pokeball__container'>
                <img className='img-fluid' src={pokeball} alt="pokebola" />
            </div>
            <Link className='pokelink pokelink_toStore' to="/">Volver a la tienda</Link>
            </div>
        )
    }else{
        return (
            <div className='pokelist__container'>
                {cartList.map(prod=> 
                                    <p className='poketext pokelist'>
                                        <img onClick={() =>deleteItem(prod.id)} className='img-fluid poketrashcan' src={removeitem} alt="Eliminar"/>
                                        {prod.product} {prod.stock}u.
                                    </p>)}
                                    <p className='poketext'>
                                        Cantidad de unidades: {totalItems()}
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
                    placeholder='e-mail'
                    value={formData.email}/>
                    
                    <button onClick={()=> alert('Orden generada!')} className='pokebutton pokebutton__cart buy-btn'>Comprar</button>

                </form>
                                
                <button className='pokebutton pokebutton__cart resetCart' onClick={resetCart}> Vaciar </button>

            </div>
        )
    }
    
}

export default Cart