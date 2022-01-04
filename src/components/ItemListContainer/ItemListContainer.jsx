import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.jsx'
import { collection, getDocs, getFirestore} from 'firebase/firestore'

function ItemListContainer( {greetings}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { idProd } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const queryCollection = collection(db, 'products')

        getDocs(queryCollection)
        .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    
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