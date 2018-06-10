import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import AdminNav from '../../Admin/AdminNav';

const Nav = () => {
    return (
        <div className="Nav">
            <Link to="/"><h1>A Glass of Harmony</h1></Link>
            {/* <AdminNav /> */}
            <Link to="/products" ><div className="products">Products</div></Link>
            <Link to="/cart" >
                <div className="cart-icon">
                    Cart
                    <div>0</div>
                </div>
            </Link>
        </div>
    );
};

export default Nav;