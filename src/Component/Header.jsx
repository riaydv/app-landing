import React from 'react';
import Navbar from'./Navbar';

function Header() {
    return (
        <div id='main'>
         <Navbar/>
         <div className='name'>
            <h1><span>Launch your app</span> with confidence and creativity</h1>
            <p className='details'>Lorem ispsum dolor sit and constructor bandwidth</p>
            <a href='#' className='cv-btn'>Download</a>
            </div>   
        </div>
    )
}

export default Header;