import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemsListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([]);
   
    const getProducts = () => {   

      fetch('https://fakestoreapi.com/products/')
        .then( (res)=>
          res.json())
        .then((res)=> setProducts(res))
                
    }
    
    useEffect(()=>{
        getProducts()
    }, []);


    return(
        <div>
             {greeting}
             <ItemCount
          stock={5}
          initial={1}
          onAdd={(n) => alert(`agregados ${n} productos`)} />
            <ItemList produc={products}/>
        </div>
    )
    
};

export default ItemsListContainer;