import {memo} from 'react'
import Item from '../Item/Item'

const ItemList = memo(
    ({ productos }) => {
        return (
            <>
                <div className='container'>
                    <div className='row row-5 d-flex justify-content-center'>

                        { productos.map((prod) => <Item prod= {prod} />)  }

                    </div>


                </div>
            </>
        )
    }, (oldProps, newProps)=> oldProps.prod.length === newProps.prod.length )
    

export default ItemList
