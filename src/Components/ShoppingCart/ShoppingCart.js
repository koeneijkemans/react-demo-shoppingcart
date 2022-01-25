import { useState } from 'react'
import { useSelector } from 'react-redux';
import './ShoppingCart.css'

const ShoppingCart = () => {

    const [ showDetails, setShowDetails ] = useState(false);

    const shoppingCart = useSelector(state => state.shoppingCart);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    const groupProductsById = (accumulator, nextProduct) => {
        if (!accumulator[nextProduct.id]) {
            accumulator[nextProduct.id] = {...nextProduct, count: 1};
        } else {
            accumulator[nextProduct.id] = Object.assign(nextProduct, { count: accumulator[nextProduct.id].count + 1} )
        }

        return accumulator
    }

    return (
        <div onClick={toggleDetails}>
            {
                showDetails ?
                (
                    <div>
                        <span>Winkelwagentje met inhoud</span>
                        {
                            <ul className='detailedShoppingList'>
                            {
                                shoppingCart.reduce(groupProductsById, []).map((p) => 
                                    <li key={"cart_"+p.id}>{p.name} - {p.count} - €{(p.count * p.price)}</li>
                                )
                            }
                            </ul>
                        }
                    </div>
                ) :
                (
                    <span>Winkelwagentje ({shoppingCart.length} producten, total € { shoppingCart.map(p => p.price).reduce((a,b) => a + b, 0) })</span>
                )
            }
        </div>
    )
}

export default ShoppingCart