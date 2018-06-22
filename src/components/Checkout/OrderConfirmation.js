import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { actions, clearCart } from '../../ducks/reducer';
import { connect } from 'react-redux';


class OrderConfirmation extends Component {
  constructor() {
    super();

    // this.props.clearCart()
  }

  componentDidMount = () => {
    this.props.clearCart();
  }

  render() {
    console.log('order confirmation - this.props', this.props)
    return (
      <div className="confirmation-body">
  
       
        <div className="order-confirmation">
        <div className="heading">
    
        <h1 > Thank you for your order!</h1>

        <h3> Your order number is : {this.props.match.params.orderNumber} </h3>
        
          <div>
          <Link to="/">
            <Button variant="raised" color="primary">
              Continue Shopping
            </Button>
          </Link>
        </div>
        </div>
        </div>
      </div>
     
    );
  }
}

const mapDispatchToProps = {
  ...actions,
  clearCart
  };
export default connect(null, mapDispatchToProps)(OrderConfirmation);