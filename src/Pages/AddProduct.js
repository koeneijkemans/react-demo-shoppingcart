import React, { useState } from "react";
import reactDom from "react-dom";
import './AddProduct.css';

const AddProduct = ( {addProductToInventory} ) => {

    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState(0);
    
    const onAddProduct = () => {
        addProductToInventory( { name: name, price: price } );

        setName("");
        setPrice(0);
    }

    return (
        <React.Fragment>
            <h2>Product toevoegen</h2>
            <div className="addProduct-form">
                <div>
                    <label htmlFor="product_name">Naam:</label>
                    <input id="product_name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="product_price">Prijs:</label>
                    <input id="product_price" type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value))}></input>
                </div>
                <input id="product_add_button" type="submit" onClick={() => onAddProduct()} value="Toevoegen"></input>
            </div>
        </React.Fragment>
    )
}

export default AddProduct;