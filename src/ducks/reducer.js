import axios from 'axios';

const INITIAL_STATE = {
    cart: [],
    products: [],
    product: [],
    categories: [],
    cart_total: 0,
    total: 0,
    user: {
        name:  '',
        email:  '',
        address:  '',
        phone:  '',
        location: ''
      }

};

const CLEAR_CART = 'CLEAR_CART';
const SET_CART = 'SET_CART';
const SET_TOTAL = 'SET_TOTAL';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';
const GET_USER = 'GET_USER';
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCT = 'GET_PRODUCT';
const GET_CART = 'GET_CART';
// const CART_TOTAL = 'CART_TOTAL'
const INCREMENT_QTY = 'INCREMENT_QTY';
const DECREMENT_QTY = 'DECREMENT_QTY';
const CATEGORIES = 'CATEGORIES';

export const actions = {

    getCart: () => {
        return( dispatch, getState ) => {
            if(getState().cart[0]){
                let cart = [ ...getState().cart ]
                let total = cart.reduce( ( a, b ) => a + b.price * b.qty, 0 )
             
            return(
                axios.get( '/api/user-data' ).then( res => {
                    dispatch({
                        type: GET_CART,
                        payload: total
                    })}).catch( err => console.error( err ))    
            )
        }
        }
    },

    editProduct: ( id, key, val ) => {
        return ( dispatch, getState ) => {
            let products = [ ...getState().products ]
            let index = products.findIndex( e => {
                return e.productid === id
            })
            products[index][key] = val;
            
                // make database call to update the product property val & key
                axios.put(`/api/shop/${ id }`, products[index] )
                    .then( () => {
                    }).catch( err => { console.log( err ) })
                    return dispatch({
                        type: EDIT_PRODUCT,
                        payload: products
                    })
        }
    },

    deleteProduct: ( id ) => {
        return ( dispatch, getState ) => {
            let products = [ ...getState().products ]

            let index = products.findIndex( e => {
            return e.productid === id
        })
        products.splice( index, 1 );
        axios.delete( `/api/shop/${ id }` ).then( res => {

        }).catch( err => { console.log( err ) })
                return dispatch({
                    type: DELETE_PRODUCT,
                    payload: products
                })
    }
    },

    addToCart: ( product ) => {
        return ( dispatch, getState ) => {
          let cart = [ ...getState().cart ]
          let index = cart.findIndex( e => e.id === product.id )
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
        return ( dispatch, getState ) => {
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
            cart[index].qty += 1
            cart[index].total = cart[index].qty*cart[index].price

            axios.post( '/api/cartToSession', cart ).then( () => {
                return dispatch ({
                    type: INCREMENT_QTY,
                    payload: cart
                })
            })
        }
    },

    decrementProduct: ( product ) => {
        return ( dispatch, getState ) => {
          let cart = [ ...getState().cart ]
          let index = cart.findIndex( e => e.id === product )
            cart[index].qty -=1
            cart[index].total = cart[index].qty*cart[index].price
    
          axios.post( '/api/cartToSession', cart ).then( ()=> {
            return dispatch({
              type: DECREMENT_QTY,
              payload: cart
            })
          })
        }
      }

}

function reducer( state=INITIAL_STATE, action ){
    switch( action.type ) {

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

        case GET_CART:
        return { ...state, cart_total: action.payload }

        case DELETE_PRODUCT:
        return { ...state, products: action.payload }

        case EDIT_PRODUCT:
        return { ...state, products: action.payload }

        case SET_CART:
        return { ...state, cart: action.payload }

        case SET_TOTAL:
        return { ...state, total: action.payload }

        case CLEAR_CART:
        return { ...state, cart: [], cart_total: 0, total: 0 }
    
        // case GET_CART:
        // return { ...state, cart: action.payload[0], cart_total: action.payload[1]}

        default:
            return state
    }
}

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

export function setCart( cart ) {
    return {
        type: SET_CART,
        payload: cart
    };
}

export function setTotal( total ) {
    return {
        type: SET_TOTAL,
        payload: total
    };
}

export function clearCart( ) {
    return {
        type: CLEAR_CART
    };
}

export default reducer;