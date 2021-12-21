import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../Contador/ItemCount";

const ItemDetail = ({products}) => {

    const [goCart, setGoCart] = useState(false)

    const onAdd = (quantityToAdd) =>{
        console.log(quantityToAdd)
        setGoCart(true)
    }

    return (
        <div className='col-md-4'>
                    <div className="card w-100 mt-5">

                        <div className="card-header">
                            {products.product}
                        </div>

                        <div className="card-body">
                            <img src={products.img} alt="Producto" className='w-50'/>
                            <br />

                            {products.price}
                            <br />
                            {products.desc}
                        </div>
                        {!goCart ? (
                        <ItemCount stock={products.stock} onAdd={onAdd}/>
                        ) : (
                        <Link to="/cart">Ir al carrito </Link>)}

                    </div>
        </div>
    )
}

export default ItemDetail;