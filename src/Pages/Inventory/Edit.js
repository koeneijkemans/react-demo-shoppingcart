import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router";
import './Edit.css';

const InventoryEdit = () => {

    let { id } = useParams();

    const selectedProduct = useSelector(state => state.products.find(p => p.id == id));

    const [ name, setName ] = useState(selectedProduct.name);
    const [ price, setPrice ] = useState(selectedProduct.price);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const onAddProduct = () => {
        dispatch({ type: 'INVENTORY/EDIT_PRODUCT', payload: { id: id, name: name, price: price }});

        navigate("/");
    }

    return (
        <React.Fragment>
            <h2>Product bewerken</h2>
            <div className="addProduct-form">
                <div>
                    <label htmlFor="product_name">Naam:</label>
                    <input id="product_name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="product_price">Prijs:</label>
                    <input id="product_price" type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value))}></input>
                </div>
                <input id="product_add_button" type="submit" onClick={() => onAddProduct()} value="Bewerken"></input>
            </div>
        </React.Fragment>
    )
}

export default InventoryEdit;