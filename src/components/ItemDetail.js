import React from "react";

const ItemDetail = ({ item }) => {

    return(
        <div>
        {item.length ? item.map((el => 
        <div key={el.id}>{el.description}
        <img className="size" src={el.image}></img>
        <p>{el.price}</p>

       
        </div>
        
        )): <h3>No hay resultados</h3>}
    </div>
    )
  
}

export default ItemDetail;
