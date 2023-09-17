import React, { useState, useEffect } from "react";

const SearchSection = () => {

    const OuterContainer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    };

    const TitleStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '150px',
        paddingTop: '100px'
    };

    const TitleText = {
        fontFamily: 'Copperplate, Fantasy',
        fontSize: '150px',
        lineHeight: '0px'
    };

    const MessageStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '800px'
    };

    const MessageText = {
        color: 'rgb(30, 130, 76)',
        fontSize: '50px',
        fontFamily: 'Lucida Console',
        textAlign: 'center',
    };

    const ScrollStyle = {
        display: 'flex',
        height: '300px'
    };

    return (
        <div>
            <div style={OuterContainer}>
                <div style = {TitleStyle}>
                    <p style={TitleText}>Welcome!</p>
                </div>
                <div style={MessageStyle}>
                    <p style={MessageText}>Fun events near you, for you. Go outside and touch some grass</p>
                </div>
                <div style={ScrollStyle}>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;