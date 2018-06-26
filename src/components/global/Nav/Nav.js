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
            isAdmin: false,
            isTop: true
        }

        if(!this.state.userData){
                axios.get( '/api/user-data' ).then( res => {
                    console.log('res.data', res.data)
                    this.setState({
                        userData: res.data.name
                    })
                }).catch( err => { console.log( err ) })
            }
        
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 600;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
          });

          this.props.getUser()
              axios.get( '/api/user-data' ).then( res => {
                  // console.log('res.data', res.data)
                  this.setState({
                      isAdmin: res.data.isAdmin
                  })
              }).catch( err => { console.log( err ) })
    }

    onScroll = (isTop) => {
        this.setState({ isTop });
      }

    // componentDidUpdate() {
    //     console.log('Did update hit')
    //     // this.props.getUser()
    //     axios.get( '/api/user-data' ).then( res => {
    //         // console.log('res.data', res.data)
    //         this.setState({
    //             isAdmin: res.data.isAdmin
    //         })
    //     }).catch( err => { console.log( err ) })
    // }

    render() {
        console.log('window.scrollY', window.scrollY)
        // 
        // console.log('this.state.isAdmin', this.state.isAdmin, 'str')

        let condition = this.state.isTop ? 'underline up': 'underline down'
        let condition2 = this.state.isTop ? 'cart-icon up' : 'cart-icon down'
        console.log('this.state.isTop', this.state.isTop)
    return (
        <div className="Nav">
            <div>
                <div className="left-nav">
                   {this.state.userData
                   ? 
                   <Link className='logout auth' onClick={()=> Logout() } to='/logout' ><div className={condition}> Logout </div></Link> 
                   : 
                   <Link className="login auth" onClick={()=> Login( this.props.cart ) } to="/login" ><div className={condition}> Login </div></Link>}
                    <div><Link to="/"><h1 className="title" >A Glass of Harmony</h1></Link></div>
                </div>
                <div className="menu">
                    {this.state.isAdmin && <AdminNav className= "ant-dropdown-link" /> }
                    <Link className="products" to="/products" ><div className={condition}>Products</div></Link>
                    <Link className="cart" to="/cart" >
                        <div className={condition2}>
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