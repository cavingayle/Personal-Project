import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { getProducts, actions } from '../../ducks/reducer';
import './Products.css';
import { Select } from 'antd';
import 'antd/lib/select/style/index.css';
import img from '../../media/whitebrushstroke.png.png';

class Products extends Component {
    constructor( props ){
        super( props )
      }
      componentDidMount( props ){
        axios.get( '/api/shop' )
          .then( products => {
            this.props.getProducts( products.data )
          }).catch( err => { console.log( err ) })
          this.props.getCart()
      }
    
        render() {
          const { Option, OptGroup } = Select;
          const products = this.props.products ? this.props.products.map( ( e, i ) => {
            return <div key={ i } className='item'>
            <div>
                    <h1>{ e.productname }</h1>
                    <img className='img' src ={ e.productimage } alt={ e.productname }  />
                    <h3>{ e.productshortdesc } </h3>
                    <Select
                    defaultValue="Select Chain Size"
                    style={{ width: 200 }}>
               
                      <OptGroup label="Sizes">
                        <Option value="16">16 inch</Option>
                        <Option value="18">18 inch</Option>
                        <Option value="20">20 inch</Option>
                        <Option value="22">22 inch</Option>
                        <Option value="24">24 inch</Option>
                        <Option value={ true }>Keychain</Option>
                      </OptGroup>
                    </Select> 
                    <br/>
                    <span>${ e.productprice }</span>
                    <p>{e.productstock <=0 ? 'out-of-stock' : e.productstock >0 && e.productstock <= 10 ? 'limited-stock!' : 'in-stock'}</p>
                    <button onClick={ () => this.props.addToCart( { name: e.productname, id: e.productid, qty: 1, image: e.productimage, price: e.productprice } ) }>Add to Cart</button>
            </div>
                   </div>
          }): 'nothing to display'
            return (
              <div>
                <div className='header-img'>
                </div>
                <img className='brush2' src={ img } rel='brush stroke' />
                <div className='container'>
                { products }
                </div>
              </div>
    
            )
        }
    }
    
    const mapStateToProps = state => {
      return {
        products: state.products,
        cart: state.cart
      }
    }
    export default connect( mapStateToProps, { getProducts, ...actions })( Products )