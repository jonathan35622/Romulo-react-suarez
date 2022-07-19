import React from "react";
import Item from "./Item";

const ItemList = ({ produc}) => {

    return (

    <div>
         {produc.map((product, i) => <Item key={i} product={product} txt={"ALGUNOS ID DE PRODUCTOS"}/>)}
        </div>
    );
};




export default ItemList;