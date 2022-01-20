import Product from './Components/Product/Product'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import { useState } from 'react'
import './App.css'

function App() {

  const [availableProducts, setAvailableProducts] = useState([
    { id: 1, name: "Bitcoin", price: 40000 },
    { id: 2, name: "Auto blauw", price: 10000 },
    { id: 3, name: "Mok met kekke foto", price: 12.5 },
    { id: 4, name: "Foto van Tupac Shakur", price: 75 },
    { id: 5, name: "Laatste aflevering van BOOS", price: 0 },
  ])
  
  const [shoppingCart, setShoppingCart] = useState([])
  
  const addToCart = (product) => {
    setShoppingCart([...shoppingCart, product])
  }

  return (
    <div className="App">
      <ShoppingCart shoppingCart={shoppingCart} />

      <h2>Winkel</h2>
      <div className='products'>
        {
          availableProducts.map((p) => <Product key={'product_' + p.id} product={p} onAddToCart={addToCart} />)
        }
      </div>
      
    </div>
  );
}

export default App;
