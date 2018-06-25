import React, { Component } from 'react';
import { getUser, actions } from '../../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './Nav.css';
import AdminNav from '../../Admin/AdminNav';
import Login from '../../Login/Login';
import Logout from '../../Logout/Logout';

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            userData: '',
            isAdmin: false
        }
        
    }

    componentDidUpdate(){
        // console.log('Did update hit')
        // this.props.getUser()
        axios.get( '/api/user-data' ).then( res => {
            // console.log('res.data', res.data)
            this.setState({
                isAdmin: res.data.isAdmin
            })
        }).catch( err => { console.log( err ) })
    }

    render() {
        if(!this.state.userData){
            axios.get( '/api/user-data' ).then( res => {
                // console.log('res.data', res.data)
                this.setState({
                    userData: res.data.name
                })
            }).catch( err => { console.log( err ) })
        }
        // console.log('this.state.isAdmin', this.state.isAdmin, 'str')
    return (
        <div className="Nav">
            <div>
                <div className="left-nav">
                   {this.state.userData
                   ? 
                   <Link className="logout auth"onClick={()=> Logout() } to='/logout' ><div className='underline'> Logout </div></Link> 
                   : 
                   <Link className="login auth" onClick={()=> Login( this.props.cart ) } to="/login" ><div className='underline'> Login </div></Link>}
                    <div><Link to="/"><h1 className="title" >A Glass of Harmony</h1></Link></div>
                </div>
                <div className="menu">
                    {this.state.isAdmin && <AdminNav className= "ant-dropdown-link" /> }
                    <Link className="products" to="/products" ><div className='underline'>Products</div></Link>
                    <Link className="cart " to="/cart" >
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
    getUser,
    ...actions
  }
  
  export default connect( mapStateToProps, mapDispatchToProps )( Nav )