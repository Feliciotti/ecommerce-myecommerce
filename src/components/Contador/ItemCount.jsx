import {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [value, setNumber] = useState(1);

    const add = () => {
        value !== stock && setNumber(value + 1)
    };

    const substract = () => {
        value !== 0 && setNumber(value - 1)
    }

    return(
        <div>
            <p>{value}</p>
            <button onClick={add}> + </button>
            <button onClick={substract}> - </button>
            <br/>
            <button disabled={value === 0} onClick={ ()=> onAdd(value)}> Agregar al carrito </button>
        </div>
    );
}

export default ItemCount;