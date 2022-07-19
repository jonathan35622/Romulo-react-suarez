import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () =>{

const [element, setElement] = useState([]);


const getItem = () =>{

    fetch('https://fakestoreapi.com/products/')
    .then((res) =>
        res.json()
    )
    .then(data  => setElement(data))
}


useEffect( () =>{
    getItem()
}, [])

return(
    <div>
        <ItemDetail item={element}/>
    </div>
)

}

export default ItemDetailContainer;