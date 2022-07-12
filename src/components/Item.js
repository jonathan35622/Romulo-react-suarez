import React from "react";

const Item = ({ id, naame , price}) => {
    return(
        <div>
            <p>{id}</p>
            <h2>{naame}</h2>
            <p>{price}</p>
        </div>
    )
};

export default Item;