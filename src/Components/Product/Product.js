import './Product.css'
import { useDispatch } from 'react-redux';

const Product = ( { product } ) => {

    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch({ type: 'CART/ADD_PRODUCT', payload: product});
    }

    return (
        <div className='product'>
            <span>{product.name}</span>
            <span>€{product.price}</span>
            <span className='button' onClick={() => addToCart(product) }>Toevoegen aan winkelwagentje</span>
        </div>
    )
}

export default Product