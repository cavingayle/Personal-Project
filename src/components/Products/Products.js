import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Products extends Component {
    render() {
        return (
            <Link to="/product" ><div>Products</div></Link>
        );
    }
}