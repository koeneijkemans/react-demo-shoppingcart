import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () =>{

    const shoppingCart = useSelector(state => state.shoppingCart);

    const groupProductsById = (accumulator, nextProduct) => {
        if (!accumulator[nextProduct.id]) {
            accumulator[nextProduct.id] = {...nextProduct, count: 1};
        } else {
            accumulator[nextProduct.id] = Object.assign(nextProduct, { count: accumulator[nextProduct.id].count + 1} )
        }

        return accumulator
    }

    return (
        <div>
            <h2>Winkelwagen</h2>
            {
                <ul className='detailedShoppingList'>
                {
                    shoppingCart.reduce(groupProductsById, []).map((p) => 
                        <li key={"cart_"+p.id}>{p.name} - {p.count} - €{(p.count * p.price)}</li>
                    )
                }
                </ul>
            }

            <Link to="/">Terug naar winkel</Link>
        </div>
    )
}

export default Cart;