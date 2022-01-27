import {useState} from 'react'
import '../Helpers - css/Buttons.css'

const ItemCount = ({stock, onAdd}) => {
    const [value, setNumber] = useState(1);

    const add = () => {
        value !== stock && setNumber(value + 1)
    };

    const substract = () => {
        value !== 0 && setNumber(value - 1)
    }

    return(
        <div className='counter-btns'>

            <div className='add-remove-btns__container'>

                <button className='add-remove-btn' onClick={substract}> - </button>
                <p className='counter-value'>{value}</p>
                <button className='add-remove-btn' onClick={add}> + </button>

            </div>

            <div>
                <button className="poketitle pokebutton pokebtnAdd"
                disabled={value === 0} onClick={ ()=> onAdd(value)}>
                Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount;