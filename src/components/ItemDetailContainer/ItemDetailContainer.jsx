import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getProductos} from '../Helpers/ItemList.js'

function ItemDetailContainer( {greetings}) {

    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

     // no necesito if
     
    useEffect(() => {
        getProductos
        .then(resp => setProducts(resp.find(prod => prod.id === parseInt(id))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, [id])

    console.log(products)
    return (
        <div>
            {greetings}
            { loading ? 
                <h2>Cargando...</h2> 
                :  
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

                    </div>
                </div>

                                            
            }
        </div>
    )
}


export default ItemDetailContainer