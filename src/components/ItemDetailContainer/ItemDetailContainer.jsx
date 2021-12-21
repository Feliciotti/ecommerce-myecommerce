import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getProductos} from '../Helpers/ItemList.js'
import ItemDetail from '../Item/ItemDetail.jsx'


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
                <ItemDetail products={products} />
            }
        </div>
    )
}


export default ItemDetailContainer