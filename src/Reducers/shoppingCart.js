const initialCart = [];

const cartReducer = ( state = initialCart, action ) => {
    switch (action.type) {
        case 'CART/ADD_PRODUCT':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default cartReducer;