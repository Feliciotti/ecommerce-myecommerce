import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../Item/ItemDetail.jsx'
import { doc, getDoc, getFirestore} from 'firebase/firestore'

function ItemDetailContainer( {greetings}) {

    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
     
     useEffect(() => {
        const db = getFirestore()

        const queryDb = doc(db, 'products', id)

        getDoc(queryDb)
        .then(resp => setProducts( { id: resp.id, ...resp.data() } ) )
        .catch(err => (err))
        .finally(() => setLoading(false))
    
    }, [id])

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