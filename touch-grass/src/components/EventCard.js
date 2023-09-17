import React, { useState, useEffect } from "react";

const EventCard = ({title, imageUrl, location, date, time}) => {
    const [isTouched, setIsTouched] = useState(false);

    const onButtonClicked = {

    }

    // styling
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '360px',
        height: '360px',
        borderRadius: '50px',
        margin: '10px',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        marginBottom: '50px' 
    };

    const infoBox = {
        backgroundColor: 'rgba(30, 130, 76, 0.75)',
        width: '400px',
        height: '120px',
        borderBottomRightRadius: '50px',
        borderBottomLeftRadius: '50px'
    }

    const textStyle = {
        color: 'white',
        marginLeft: '25px',
        lineHeight: '10px'
    }

    return (
        <div>
            <div style={backgroundStyle}>
                <div style={infoBox}>
                    <h2 style={textStyle} >{title}</h2>
                    <p style={textStyle}>{date} @ {time}</p>
                    <p style={textStyle}>{location}</p>
                </div>
            </div>
        </div>
    )
}

export default EventCard;
