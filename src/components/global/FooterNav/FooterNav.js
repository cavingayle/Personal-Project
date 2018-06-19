import React from 'react';
import { Link } from 'react-router-dom';

const FooterNav = () => {
    return (
        <div>
            <div> 
                <h2> Customer Care </h2> 
                <br/>
                <ul>
                    <Link to="/contact"><li> Contact Us </li></Link>
                    <li> Terms & Conditions </li>
                    <li> Privacy Policy </li>
                    <li> FAQ </li>
                    <li> Size Guide </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterNav;