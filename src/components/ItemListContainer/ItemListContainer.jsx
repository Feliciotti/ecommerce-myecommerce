import {useState, useEffect} from 'react'
import {ItemList} from '../Helpers/ItemList.js'

function ItemListContainer( {greetings}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ItemList
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, [])


    return (
        <div>
            {greetings}
            { loading ? 
                <h2>Cargando...</h2> 
                :  
               products.map((prod) =>   <div className='col-md-4'>
                                            <div className="card w-100 mt-5">
                                                <div className="card-header">
                                                    {`${prod.product} - ${prod.material}`}
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.img} alt="Producto" className='w-10'/>
                                                    <br />
                                                    {prod.price}
                                                </div>
                                            </div>
                                        </div>)
            }
        </div>
    )
}

export default ItemListContainer