import Product from './Components/Product/Product'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import { useSelector } from 'react-redux' 
import './App.css'

function App() {
 
  const availableProducts = useSelector(state => state.products);

  const shoppingCart = useSelector(state => state.shoppingCart);

  return (
    <div className="App">
      <ShoppingCart shoppingCart={shoppingCart} />

      <h2>Winkel</h2>
      <div className='products'>
        {
          availableProducts.map((p) => <Product key={'product_' + p.id} product={p} />)
        }
      </div>
      
    </div>
  );
}

export default App;
