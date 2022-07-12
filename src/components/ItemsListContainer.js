import React from "react";
import ItemCount from "./ItemCount";
import products from "../products.json";
import ItemList from "./ItemList";

const ItemsListContainer = ({greeting}) =>{
    return<div className="ItemsList">
        {greeting}
        <ItemCount
         stock={5}
         initial={1}
         onAdd={(n) => alert(`agregados ${n} productos`)} />
         <ItemList items={products}/>
        </div>

};

export default ItemsListContainer;