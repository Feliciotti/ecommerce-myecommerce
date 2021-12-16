import {useState, useEffect} from 'react'
import {getDescription} from '../Helpers/ItemDetail.js'

function ItemDetailContainer( {greetings}) {

    const {id} = useParams()
    const [description, setDescription] = useState([])
    const [loading, setLoading] = useState(true)

     // no necesito if
     
    useEffect(() => {
        getDescription
        .then(resp => setDescription(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, [])


    return (
        <div>
            {greetings}
            { loading ? 
                <h2>Cargando...</h2> 
                :  
                description.map((prod) =>   <div className='col-md-4'>

                                                <div className="card w-100 mt-5">

                                                    <div className="card-header">
                                                        {`${prod.product}`}
                                                    </div>

                                                    <div className="card-body">
                                                        <img src={prod.img} alt="Producto" className='w-50'/>
                                                        <br />

                                                        {prod.price}
                                                        <br />
                                                        {prod.desc}
                                                    </div>

                                                </div>
                                            </div>)

                                            
            }
        </div>
    )
}


export default ItemDetailContainer