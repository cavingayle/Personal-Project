import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { getProducts, actions } from '../../ducks/reducer';
import { Button } from 'antd';
import 'antd/lib/button/style/index.css';
import '../../Styling/Admin.css';


class AdminEditProduct extends Component {
    constructor( props ){
        super( props )

        this.state= {
          loading: false
        }
      }
      componentDidMount( props ){
        axios.get( '/api/shop' )
          .then( products => {
            this.props.getProducts( products.data )
            this.setState({
              loading: true
            })
          }).catch( err => { console.log( err ) })
      }

    render() {
          const products = this.props.products ? this.props.products.map( ( e, i ) => {
            return <div key={ i } className='item'>
            <div>
          {/* create variable to hold the value of the updated text */}
                    <h1 onClick={ f => f.target.contentEditable=true} onBlur={ f => this.props.editProduct( e.productid, 'productname', f.target.innerText ) }>{ e.productname }</h1>
                    <h2 onClick={ f => f.target.contentEditable=true} onBlur={ f => this.props.editProduct( e.productid, 'productcartdesc', f.target.innerText ) }> { e.productcartdesc } </h2>
                    <img className= 'img'src ={ e.productimage } alt={e.productname} onClick={ f => f.target.contentEditable=true} onBlur={ f => this.props.editProduct( e.productid, 'productimage', f.target.innerText ) } />
                    <h3 onClick={ f => f.target.contentEditable=true} onBlur={ f => this.props.editProduct( e.productid, 'productshortdesc', f.target.innerText ) }>{ e.productshortdesc } </h3>
                    <span onClick={ f => f.target.contentEditable=true} onBlur={ f => this.props.editProduct( e.productid, 'productprice', f.target.innerText ) }>${ e.productprice }</span>

                    <p onClick={ f => f.target.contentEditable=true} onBlur={ f => this.props.editProduct( e.productid, 'productstock', f.target.innerText ) }>{ e.productstock }</p>
                    <Button type='primary' onClick={ () => this.props.deleteProduct( e.productid ) } >Delete Product</Button>
            </div>
                   </div>
          }): 'nothing to display'
        return (
            <div className='container background'>
                { this.state.loading ? products : <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' />}
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