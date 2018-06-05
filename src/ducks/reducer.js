const INITIAL_STATE = {
    cart: null,
    loading: false,
    loaded: false,
    error: null,
    empty: true,
    newQuantity: false
};

const ADD_TO_CART = "ADD_TO_CART";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state, cart: action.payload
            };
        default: return state;
    }
};

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    };
}