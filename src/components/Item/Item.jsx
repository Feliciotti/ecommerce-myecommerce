import {Link} from 'react-router-dom'
import './Item.css'

function Item({prod}) {
    return (
        <div>
            <div key={prod.id} className='card__container'>
                <div className='mt-5 mb-5'>

                    <div >
                        <h2 className='poketitle'>
                            {`${prod.product} - ${prod.price}$`}
                        </h2>
                    </div>

                    <div >
                        <img src={prod.img} alt="Producto" className='pokeimg'/>                
                    </div>
                    
                    <Link to={`/detalles/${prod.id}`}>
                        <div className='mt-5 mb-5' >
                                <button className="poketitle pokebutton pokebutton__item">
                                    Detalles
                                </button>
                        </div>
                    </Link>

            </div>
        </div>
        </div>)
}

export default Item