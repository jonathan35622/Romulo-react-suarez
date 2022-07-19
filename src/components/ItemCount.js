import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    
    const incrementar = () =>{
        setCount(count + 1)
    };

    const decrementar = () =>{
        setCount(count - 1);
    }
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={count > 0 && decrementar}>-</button>
            <button onClick={count < stock && incrementar}>+</button>
            <button>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;
