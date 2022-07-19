import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{

const [element, setElement] = useState([]);


const getItem = () =>{

    setTimeout(fetch('https://fakestoreapi.com/products/')
    .then((res) =>
        res.json()
    )
    .then(data  => setElement(data)),2000);
    
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