import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

const CURRENCY = "USD";

const fromUSDToCent = amount => amount * 100;

class Stripe extends Component {
  constructor() {
    super();

    this.state = {
      orderComplete: false,
      orderNumber: "",
      order: [],
      lineitem: []
    };
  }

  successPayment = data => {
    const orderid = data.data[0].orderid;
    axios.post( "/api/lineitem", { orderid, cart: this.props.cart } ).then(response => {
      this.setState({ lineitem: response.data })
  });
    
     this.setState({ orderNumber: data.data[0].orderid, orderComplete: true });
    sessionStorage.clear();
  };

  errorPayment = data => { alert( "Payment Error" );
};

  onToken = ( amount, tax ) => token =>
    axios.post( "/api/payment", {
        source: token.id,
        currency: CURRENCY,
        email: token.email,
        tax: tax,
        amount: Math.ceil(fromUSDToCent( amount ))
      }).then( this.successPayment ).catch( this.errorPayment );

  render() {
    if ( this.state.orderComplete ) {
      return <Redirect to={ `/orderconfirmation/${ this.state.orderNumber }` } />;
    }

    const { tax, amount } = this.props;
    return (
      <div>
        <StripeCheckout
          name="A Glass of Harmony"
          tax
          amount={ fromUSDToCent( amount ) }
          token={ this.onToken( amount, tax ) }
          currency={ CURRENCY }
          stripeKey={ process.env.REACT_APP_STRIPE_PUBLISHABLE }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect( mapStateToProps )( Stripe );