import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getProductos} from '../Helpers/ItemList.js'
import ItemList from '../ItemList/ItemList.jsx'

function ItemListContainer( {greetings}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { idProd } = useParams()

    useEffect(() => {
        if (idProd) {
                getProductos
            .then(resp => setProducts(resp.filter(prod=> prod.product === idProd)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        } else {
                getProductos
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

    }, [idProd])


    return (
        <div>
            {greetings}
            { loading ? 
                <h2>Cargando...</h2> 
                :  
                <ItemList productos={products} />
            }
        </div>
    )
}

export default ItemListContainer