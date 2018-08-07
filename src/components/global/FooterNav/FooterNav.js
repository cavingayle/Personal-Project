import React from 'react';
import './FooterNav.css';
import { Link } from 'react-router-dom';

const FooterNav = () => {
    return (
        <div className="footer">
            <div> 
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