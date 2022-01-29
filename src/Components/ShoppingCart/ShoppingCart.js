import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ShoppingCart.css'

const ShoppingCart = () => {

    const shoppingCart = useSelector(state => state.shoppingCart);

    return (
        <div>
            <span>Winkelwagentje ({shoppingCart.length} producten, total € { shoppingCart.map(p => p.price).reduce((a,b) => a + b, 0) })</span>        
            <Link to="cart">Naar winkelwagen</Link>
        </div>
    )
}

export default ShoppingCart