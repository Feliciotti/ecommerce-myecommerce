import React from 'react'
import Item from '../Item/Item'

function ItemList({ productos }) {
    return (
        <>
            <div className='container'>
                <div className='row row-5 d-flex justify-content-center'>

                    { productos.map((prod) => <Item prod= {prod} />)  }

                </div>


            </div>
        </>
    )
}

export default ItemList
