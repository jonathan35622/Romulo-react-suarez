import React from "react";
import Item from "./Item";

const ItemList = ({ items}) => {
    return (
    <div>
        {items.map( ({id, naame, price}) => (
            <Item
            id={id}
            naame={naame}
            price={`$${price}`}            
            />
            ))}
    </div>
    );
};

export default ItemList;