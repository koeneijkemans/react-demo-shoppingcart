import ShoppingCart from "../Components/ShoppingCart/ShoppingCart"
import Product from "../Components/Product/Product"
import { useState } from "react"
import { useSelector } from 'react-redux'
import './Shop.css'
import AddProduct from "./AddProduct"

const Shop = () => {

    const availableProducts = useSelector(state => state.products)

    const [ showAddProduct, setShowAddProduct ] = useState(false);

    return (
        <div className='shop'>
            <ShoppingCart />

            <h2>Winkel</h2>
            <div className='products'>
            {
                availableProducts.map((p) => <Product key={'product_' + p.id} product={p} />)
            }
            </div>

            <a href="#" onClick={() => setShowAddProduct(!showAddProduct)}>Voeg product toe</a>
            { showAddProduct && <AddProduct /> }
        </div>
    )
}

export default Shop