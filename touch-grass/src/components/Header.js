import React, { useState, useEffect } from "react";
import logo from "../images/touch-grass.png";
import location from "../images/curr_loc.jpg";

const Header = () => {

    const container = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginLeft: '140px',
        marginTop: '50px' 
    };

    const locationStyle = {
        marginLeft: '700px'
    };

    return (
        <div>
            <div style={container}>
                <img src={logo}></img>
                <img style={locationStyle} src={location}></img>
            </div>
        </div>
    );
}

export default Header;
