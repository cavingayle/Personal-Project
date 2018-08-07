import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getProducts, actions, setCart, setTotal } from '../../ducks/reducer';
import axios from 'axios';
import Cart from '../Cart/Cart';
import StripeCheckout from './StripeCheckout';
import '../../Styling/Checkout.css';

class Checkout extends Component {
    constructor( props ) {
        super( props );
        let data = sessionStorage.getItem( 'sessionItem' )
        let parsedData = JSON.parse( data );
        this.state = {
            email: '',
            address: '',
            zip_code: '',
            state: '',
            city: '',
            phone: '',
            username: '',      
            cart: this.props.cart,
            total: parsedData.total
            
        };

    }

    componentDidMount = () => {
        let data = sessionStorage.getItem( 'sessionItem' )
        const parsedData = JSON.parse( data );
        this.props.setCart( parsedData.cart )
        this.props.setTotal( parsedData.total );
        setTimeout(() => { if( !this.props.cart.length ) {
          return this.props.history.push( '/' )
        }}, 1000 )
    }

    shippingDetails() {
      const { email, address, zip_code, state, city, phone } = this.state;
      axios.post( '/api/shippingDetails', {
          email,
          address,
          zip_code,
          state,
          city,
          phone
        })
        .then(res => {
          console.log('Value from express ' + JSON.stringify(res.data));
        });
    }

    render() {

        const { total } = this.state;
        return (
            <div className='checkout_main_body'>
        <div className='checkout_body_form '>
          <div className='checkout_summary'>
            <h3 className= 'checkout-title'> Shipping Details </h3>
            <div className='checkout_box'>
              <TextField
                required
                label='E-mail address'
                margin='normal'
                value={ this.state.email }
                onChange={ e => {
                  this.setState( { email: e.target.value } );
                }}
              />
              <br />
              <TextField
                required
                label='Phone number'
                value={ this.state.phone }
                onChange={ e => this.setState({ phone: e.target.value })}
                margin='normal'
              />
              <br />
              <TextField
                required
                label='Enter your Address'
                value={ this.state.address }
                onChange={ e => this.setState({ address: e.target.value })}
                margin='normal'
              />
              <br />

              <TextField
                required
                label='City'
                value={ this.state.city }
                onChange={ e => this.setState({ city: e.target.value })}
                margin='normal'
              />
              <br />
              <TextField
                required
                label='Zip Code'
                value={ this.state.zip_code }
                onChange={ e => this.setState({ zip_code: e.target.value })}
                margin='normal'
              />
              <br />
              <br />
              <div className='checkout_third_wrapper'>
                <select
                  value={ this.state.state }
                  onChange={ e => this.setState({ state: e.target.value })}
                >
                  <option value='State'>State</option>
                  <option value='AL'>Alabama</option>
                  <option value='AK'>Alaska</option>
                  <option value='AZ'>Arizona</option>
                  <option value='AR'>Arkansas</option>
                  <option value='CA'>California</option>
                  <option value='CO'>Colorado</option>
                  <option value='CT'>Connecticut</option>
                  <option value='DE'>Delaware</option>
                  <option value='DC'>District Of Columbia</option>
                  <option value='FL'>Florida</option>
                  <option value='GA'>Georgia</option>
                  <option value='HI'>Hawaii</option>
                  <option value='ID'>Idaho</option>
                  <option value='IL'>Illinois</option>
                  <option value='IN'>Indiana</option>
                  <option value='IA'>Iowa</option>
                  <option value='KS'>Kansas</option>
                  <option value='KY'>Kentucky</option>
                  <option value='LA'>Louisiana</option>
                  <option value='ME'>Maine</option>
                  <option value='MD'>Maryland</option>
                  <option value='MA'>Massachusetts</option>
                  <option value='MI'>Michigan</option>
                  <option value='MN'>Minnesota</option>
                  <option value='MS'>Mississippi</option>
                  <option value='MO'>Missouri</option>
                  <option value='MT'>Montana</option>
                  <option value='NE'>Nebraska</option>
                  <option value='NV'>Nevada</option>
                  <option value='NH'>New Hampshire</option>
                  <option value='NJ'>New Jersey</option>
                  <option value='NM'>New Mexico</option>
                  <option value='NY'>New York</option>
                  <option value='NC'>North Carolina</option>
                  <option value='ND'>North Dakota</option>
                  <option value='OH'>Ohio</option>
                  <option value='OK'>Oklahoma</option>
                  <option value='OR'>Oregon</option>
                  <option value='PA'>Pennsylvania</option>
                  <option value='RI'>Rhode Island</option>
                  <option value='SC'>South Carolina</option>
                  <option value='SD'>South Dakota</option>
                  <option value='TN'>Tennessee</option>
                  <option value='TX'>Texas</option>
                  <option value='UT'>Utah</option>
                  <option value='VT'>Vermont</option>
                  <option value='VA'>Virginia</option>
                  <option value='WA'>Washington</option>
                  <option value='WV'>West Virginia</option>
                  <option value='WI'>Wisconsin</option>
                  <option value='WY'>Wyoming</option>
                </select>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className='checkout_body_form'>
          <div className='checkout_summary'>
            <h3 className= 'checkout-title'> Cart Summary </h3>
            <div className='checkout_box'>
              <Cart total={ this.state.total } />
              <div>
                <div>
                  <span>Shipping( Flat Rate ):</span>$5.00
                </div>
              </div>
              <div>
                <div>
                  <span>Tax:</span> ${(  total * 0.06 ).toFixed( 2 ) }
                </div>
              </div>
              <div className='minicart_ordersubtotals'>
                <div>Order Total:</div>
                <div>${(  total * 1.06 + 5 ).toFixed( 2 ) } </div>
              </div>
            </div>

            <div>
              <div
                className='checkout_button_tocart'
                onClick={ () => this.shippingDetails() }
              >
                <StripeCheckout
                  cart={ this.props.cart }
                  tax={ ( total * 0.06 ).toFixed( 2 ) }
                  amount={ ( total * 1.06 + 5 ).toFixed( 2 ) }
                  zip_code={ true }
                  token={ this.onToken }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        total: state.total
        };
    };
            
const mapDispatchToProps = {
    ...actions,
    setCart,
    setTotal
    };
    
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);