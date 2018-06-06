import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        return (
            <div>
                <h2>Product Page</h2>
                <Link to="/products"><button>Back</button></Link>
            </div>
        );
    }
}