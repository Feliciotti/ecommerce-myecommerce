import React from "react";

const CartDetail = ({products}) => {
    return (
        <div>
            <p>{products.name}</p>
            <p>{products.price}</p>
        </div>
    )
}

export default CartDetail;