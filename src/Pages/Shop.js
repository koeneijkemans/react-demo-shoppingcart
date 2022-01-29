import ShoppingCart from "../Components/ShoppingCart/ShoppingCart"
import Product from "../Components/Product/Product"
import { useState } from 'react'
import './Shop.css'
import AddProduct from "./AddProduct"

const Shop = () => {

    const [ availableProducts, setAvailableProducts ] = useState([
        { id: 1, name: "Bitcoin", price: 40000 },
        { id: 2, name: "Auto blauw", price: 10000 },
        { id: 3, name: "Mok met kekke foto", price: 12.5 },
        { id: 4, name: "Foto van Tupac Shakur", price: 75 },
        { id: 5, name: "Laatste aflevering van BOOS", price: 0 },
      ])
      
    const [ shoppingCart, setShoppingCart ] = useState([])

    const [ showAddProduct, setShowAddProduct ] = useState(false);
    
    const addToCart = (product) => {
        setShoppingCart([...shoppingCart, product])
    }

    const addToInventory = (product) => {
        setAvailableProducts([...availableProducts, {...product, id: availableProducts.length + 1}]);
    }

    return (
        <div className='shop'>
            <ShoppingCart shoppingCart={shoppingCart} />

            <h2>Winkel</h2>
            <div className='products'>
            {
                availableProducts.map((p) => <Product key={'product_' + p.id} product={p} onAddToCart={addToCart} />)
            }
            </div>

            <a href="#" onClick={() => setShowAddProduct(!showAddProduct)}>Voeg product toe</a>
            { showAddProduct && <AddProduct addProductToInventory={addToInventory} /> }
        </div>
    )
}

export default Shop