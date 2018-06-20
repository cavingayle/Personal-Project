import React, { Component } from 'react';
import { getProducts, actions } from '../../../ducks/reducer';
import { connect } from 'react-redux';
import './Nav.css';
import { Link } from 'react-router-dom';
import AdminNav from '../../Admin/AdminNav';
import Login from '../../Login/Login';

class Nav extends Component {
    render() {
    return (
        <div className="Nav">
            <Link onClick={()=> Login(this.props.cart) } to="/login" ><div> Login </div></Link>
            <Link to="/"><h1>A Glass of Harmony</h1></Link>
            { <AdminNav className= "AdminNav" /> }
            <Link to="/products" ><div className="products">Products</div></Link>
            <Link to="/cart" >
                <div className="cart-icon">
                    Cart
                    <div>{ this.props.cart.length }</div>
                </div>
            </Link>
        </div>
    );
};
}

const mapStateToProps = state => {
    return {
      cart: state.cart,
      total: state.cart_total
    }
  }
  
  const mapDispatchToProps = {
    getProducts,
    ...actions
  }
  
  export default connect( mapStateToProps, mapDispatchToProps )( Nav )