import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../Contador/ItemCount";
import './Item.css'
import '../Helpers - css/Links.css'
import './ItemDetail.css'

const ItemDetail = ({products}) => {

    const {cartList, cartAdd} = useCartContext()

    const [goCart, setGoCart] = useState(false)

    const onAdd = (quantityToAdd) =>{
        console.log(quantityToAdd)
        cartAdd( { ...products, stock: quantityToAdd } )

        setGoCart(true)

    }

    console.log(cartList)

    return (
        <div className='col-md-4 pokedetail'>
                    <div className="card detail__container">

                        <div>
                            <h2 className="poketitle">
                                {`${products.product} - ${products.price}$`}
                            </h2>
                        </div>

                        <div className='img-text-detail__container'>
                            <img src={products.img} alt="Producto" className='w-50'/>

                            <div className="poketext-detail__container">
                                <p className="poketext pokedetail">
                                    {products.desc}
                                </p>
                            </div>


                        </div>
                        {!goCart ? (
                        <ItemCount stock={products.stock} onAdd={onAdd}/>
                        ) : (
                        <Link className="pokelink goToCart-btn" to="/cart">Ir al carrito </Link>)}

                    </div>
        </div>
    )
}

export default ItemDetail;