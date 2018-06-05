import axios from 'axios';

const INITIAL_STATE = {
    cart: [],
    // loading: false,
    // loaded: false,
    // error: null,
    // empty: true,
    // newQuantity: false
    products: [],
    product: [],
    categories: [],
    cartTotal: 0,
    user: {
        name:  '',
        email:  '',
        address:  '',
        phone:  '',
        location: ''
      }

};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const GET_USER = 'GET_USER';
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCT = 'GET_PRODUCT';
const GET_CART = 'GET_CART';
const CART_TOTAL = 'CART_TOTAL'
const INCREMENT_QTY = 'INCREMENT_QTY';
const DECREMENT_QTY = 'DECREMENT_QTY';
const CATEGORIES = 'CATEGORIES';

export const actions = {

    getCart: () => {
        return( dispatch, getState ) => {
            return(
                axios.get( '/api/user' ).then( res => {
                    dispatch({
                        type: GET_CART,
                        payload: [res.data.cart, res.data.cart[0] ? res.data.cart.map( e=> e.total ).reduce( ( a, b ) => a + b ) : 0]
                    })}).catch( err => console.error( err ))    
            )
        }
    },

    cartTotal: () => {
        return ( dispatch, getState ) => {
          let cart = [ ...getState().cart ]
          let total = cart[0] ?  cart.map( e => e.total ).reduce( (a, b) => a + b ) : 0
    
          return dispatch({
            type: CART_TOTAL,
            payload: total
          })
        }
    },

    addToCart: ( product ) => {
        return ( dispatch, getState ) => {
          let cart = [ ...getState().cart ]
        //   console.log(cart)
          let index = cart.findIndex( e => e.id === product.id )
        //   console.log('the index value is', index)
          if( index !== -1 ){
            cart[index].qty+=1
            cart[index].total = cart[index].qty*cart[index].price
          } else {
            cart[cart.length] = product
          }
          axios.post( '/api/cartToSession', cart ).then( ()=> {
            return dispatch({
              type: ADD_TO_CART,
              payload: cart
            })
          })
        }
    },


    removeFromCart: ( product ) => {
        return (dispatch, getState ) => {
        let cart = [ ...getState().cart ]
        let index = cart.findIndex( e => e.id === product )
        cart.splice( index, 1 )
        axios.post( '/api/cartToSession', cart ).then( ()=> {
            return dispatch({
            type: REMOVE_FROM_CART,
            payload: cart
            })
        })
        }
    },

    incrementProduct: ( product ) => {
        return ( dispatch, getState ) => {
            let cart = [ ...getState().cart ]
            let index = cart.findIndex( e => e.id === product )
            cart[index].qty -= 1
            cart[index].total = cart[index].qty*cart[index].price

            axios.post('/api/cartToSession', cart ).then( () => {
                return dispatch ({
                    type: INCREMENT_QTY,
                    payload: cart
                })
            })
        }
    }

}

function reducer( state=INITIAL_STATE, action ){
    switch( action.type ){

        case ADD_TO_CART:
        return{ ...state, cart: action.payload }

        case REMOVE_FROM_CART:
        return{ ...state, cart: action.payload }

        case GET_USER:
        return{ ...state, user: action.payload }

        case GET_PRODUCTS:
        return{ ...state, products: action.payload }

        case GET_PRODUCT:
        return{ ...state, product: action.payload }

        case CATEGORIES:
        return{ ...state, category: action.payload }

        case INCREMENT_QTY:
        return { ...state, cart: action.payload }

        case DECREMENT_QTY:
        return { ...state, cart: action.payload }

        case CART_TOTAL:
        return { ...state, cart_total: action.payload}
    
        case GET_CART:
        return { ...state, cart: action.payload[0], cart_total: action.payload[1]}

        default:
            return state
    }
}

// export function addToCart( product ) {
//     return {
//         type: ADD_TO_CART,
//         payload: product
//     };
// }

// export function removeFromCart( product ) {
//     return {
//         type: REMOVE_FROM_CART,
//         payload: product
//     };
// }

export function getProducts( products ) {
    return {
        type: GET_PRODUCTS,
        payload: products
    };
}

export function getProduct( product ) {
    return {
        type: GET_PRODUCT,
        payload: product
    };
}

export function getCategories( category ) {
    return {
        type: CATEGORIES,
        payload: category
    };
}

export function getUser( user ) {
    return {
        type: GET_USER,
        payload: user
    };
}

export default reducer;