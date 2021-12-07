import {useState} from 'react'

function ItemCount() {

    const min = 1
    const max = 5

    const [ value, setValue ] = useState(min)

    //let count = 0
    const handleSuma=()=>{
        value < max &&
            setValue(value + 1)
    }
    const handleResta=()=>{
        value > min &&
            setValue(value - 1)
    }

    return(
        <div>
            <p>{value}</p>
            <button onClick={handleSuma}> + </button>
            <button onClick={handleResta}> - </button>
        </div>
    );
}

export default ItemCount;