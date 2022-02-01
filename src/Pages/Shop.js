import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import Product from "../Components/Product/Product";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {

    const availableProducts = useSelector(state => state.products)

    return (
        <div className='shop'>
            <ShoppingCart />

            <h2>Winkel</h2>
            <div className='products'>
            {
                availableProducts.map((p) => <Product key={'product_' + p.id} product={p} />)
            }
            </div>

            <Link to="inventory/add">Voeg product toe</Link>
        </div>
    )
}

export default Shop