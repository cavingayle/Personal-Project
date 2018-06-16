import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";


export default class OrderConfirmation extends Component {
  render() {
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