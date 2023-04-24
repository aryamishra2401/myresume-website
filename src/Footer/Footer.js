import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='Footer'>
            <span style={{fontWeight: 600}}>&copy; {(new Date().getFullYear())}</span>
            <span style={{marginLeft: "2%"}}>Website created by Arya Mishra</span>
        </div>
    );
}

export default Footer;