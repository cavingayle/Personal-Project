import React, { Component } from 'react';
import '../../Styling/Admin.css';
import { withData } from './AdminDataContainer';

class AdminOrders extends Component {

  render() {

    let newArray = this.props.orders.map(key => {
            return(
                <div className= 'data-container background'>
                    <p> Order ID: { key.orderid }</p>
                    <p> Username: { key.username }</p>
                    <p> Order Date: { key.orderdate }</p>
                    <p> Order Amount: { key.orderamount }</p>
                    <p> Order Products: { key.productname }</p>
                    <br/>
                </div>
            )
    })

    return (
        <div className='data-outer-container'>
            { newArray }
        </div>

      
    );
  }
}

export default withData('/api/allOrders')(AdminOrders)