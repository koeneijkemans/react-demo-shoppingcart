import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import './Add.css';

const InventoryAdd = () => {

    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState(0);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const onAddProduct = () => {
        dispatch({ type: 'INVENTORY/ADD_PRODUCT', payload: { name: name, price: price }});

        setName("");
        setPrice(0);

        navigate("/");
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
                <Link to="/">Terug naar winkel</Link>
            </div>
        </React.Fragment>
    )
}

export default InventoryAdd;