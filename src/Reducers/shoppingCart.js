const initialCart = [];

const cartReducer = ( state = initialCart, action ) => {
    switch (action.type) {
        case 'CART/ADD_PRODUCT':
            return [...state, action.payload];
        case 'INVENTORY/EDIT_PRODUCT':
            return state.map(p =>  p.id == action.payload.id ? action.payload : p)
        default:
            return state;
    }
}

export default cartReducer;