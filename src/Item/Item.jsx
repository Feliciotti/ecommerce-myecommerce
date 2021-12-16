import {Link} from 'react-router-dom'

function Item({prod}) {
    return (
        <div key={prod.id} className='col-md-4'>
            <div className="card w-100 mt-5">

                <div className="card-header">
                    {`${prod.product} - ${prod.color}`}
                </div>

                <div className="card-body">
                    <img src={prod.img} alt="Producto" className='w-50'/>
                    <br />
                    {prod.price}
                </div>
                
                <Link to={`/detalles/${prod.id}`}>
                    <div className="card-footer">
                            <button className="btn btn-outline-secondary btn-block">
                                Más detalles
                            </button>
                    </div>
                </Link>

            </div>
        </div>)
}

export default Item