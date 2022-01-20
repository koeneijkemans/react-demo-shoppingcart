import './Product.css'

const Product = ( { product, onAddToCart } ) => {
    return (
        <div className='product'>
            <span>{product.name}</span>
            <span>€{product.price}</span>
            <span className='button' onClick={() => onAddToCart(product) }>Toevoegen aan winkelwagentje</span>
        </div>
    )
}

export default Product