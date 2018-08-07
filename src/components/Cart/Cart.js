import React, { Component } from 'react';
import { getProducts, actions } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Login from '../Login/Login';
// import currency from 'currency.js';
import './Cart.css';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false
    }
  }
    
      componentDidMount = () => {
        axios.get('/api/user-data').then( res => {
          console.log('UserData',res.data)
          if(res.data.userid) {
            this.setState({
              loggedIn: true
            })
          }
        })
        this.props.getCart()
        console.log('this.state.loggedIn', this.state.loggedIn)
      }
      
      increment = ( product ) => {
        this.props.incrementProduct( product )
        this.props.getCart()
      }
    
      decrement = ( product ) => {
        this.props.decrementProduct( product )
        this.props.getCart()
      }
    
      delete = ( product ) => {
        this.props.removeFromCart( product )
        this.props.getCart()
      }

      render() {
        const {total, cart_total} = this.props
          const cart = this.props.cart ? this.props.cart.map( ( e, i ) => {
            return <div className= 'background' key={ i }>
            <div className="cartitem">
            <div className ="cartbody">
              <img className= 'cart-img img'src={ e.image } alt={ e.name }/> 
                  <p>{ e.name } </p>
                
                  <p>Color: { e.color } </p>
                  <p>Size: { e.size } </p>
                
                  </div>
                
                  <div className ="cartbody">
                  <div>
                    <button onClick={ () => e.qty-1 === 0 ? this.delete(e.id) : this.decrement(e.id) }>-</button>
                    { e.qty }
                    <button onClick={ () => this.increment( e.id ) }>+</button>
                    </div>
                    <br />
    
                  <span onClick={ () => this.delete( e.id )}> </span>
                  <p><b> Price: ${ e.price }</b> </p>
              </div>
              </div>
              </div>
              
          }) : 'Your cart is empty!'
            return (

                <div>
                    { cart }
                    <div><b>Order SubTotal: ${ cart_total ? cart_total : total } </b></div>
    
                    <br />
                     
                    {!this.state.loggedIn && <Button onClick={()=> Login(this.props.cart, this.props.cart_total) }fullWidth={true} variant="raised" color="secondary"> Check Out </Button>}
                    </div>
            )
        }
    }
    const mapStateToProps = state => {
      return {
        cart: state.cart,
        cart_total: state.cart_total
      }
    }
    
    const mapDispatchToProps = {
      getProducts,
      ...actions
    }
    
    export default connect( mapStateToProps, mapDispatchToProps )( Cart )