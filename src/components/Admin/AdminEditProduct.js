import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { getProducts, actions } from '../../ducks/reducer';


class AdminEditProduct extends Component {
    constructor( props ){
        super( props )
      }
      componentDidMount( props ){
        axios.get( '/api/shop' )
          .then( products => {
            this.props.getProducts( products.data )
            console.log( '--------products', products.data )
          }).catch( err => { console.log( err ) })
      }

      // deleteProduct( id ) {
      //   axios.delete( `/api/shop/${ id }` ).then( res => {
      //       this.props.getProducts( res.data )
      //   }).catch( err => { console.log( err ) })
      // }

    render() {
          const products = this.props.products ? this.props.products.map( ( e, i ) => {
            // console.log('----------e', e);
            return <div key={ i } className='item'>
            <div>
                    <h1>{ e.productname }</h1>
                    <h2> { e.productcartdesc } </h2>
                    <img src ={ e.productimage } alt={e.productname}  />
                    <h3>{ e.productshortdesc } </h3>
                    <span>${ e.productprice }</span>

                    <p>{ e.productstock }</p>
                    <button onClick={ () => this.props.deleteProduct( e.productid ) } >Delete Product</button>
            </div>
                   </div>
          }): 'nothing to display'
        return (
            <div>
                { products }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      products: state.products,
      cart: state.cart
    }
  }
  export default connect( mapStateToProps, { getProducts, ...actions })( AdminEditProduct )