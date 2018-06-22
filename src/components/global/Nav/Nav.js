import React, { Component } from 'react';
import { getProducts, actions } from '../../../ducks/reducer';
import { connect } from 'react-redux';
import './Nav.css';
import { Link } from 'react-router-dom';
import AdminNav from '../../Admin/AdminNav';
import Login from '../../Login/Login';

class Nav extends Component {
    constructor() {
        super();

    }
    componentDidMount(){
        console.log('hit')
    }
    render() {
    return (
        <div className="Nav">
            <div>
                <div className="left-nav">
                    <Link className="login" onClick={()=> Login(this.props.cart) } to="/login" ><div className="login"> Login </div></Link>
                    <div><Link to="/"><h1 className="title" >A Glass of Harmony</h1></Link></div>
                </div>
                <div className="menu">
                    { <AdminNav className= "ant-dropdown-link" /> }
                    <Link className="products" to="/products" ><div className="products">Products</div></Link>
                    <Link className="cart" to="/cart" >
                        <div className="cart-icon">
                            Cart
                            <div>{ this.props.cart.length }</div>
                        </div>
                    </Link>
                </div>
            </div>
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