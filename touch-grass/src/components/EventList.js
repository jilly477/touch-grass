import React, { useState, useEffect } from "react";
import EventCard from './EventCard';

const EventList = ({events}) => {

    const listContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    };

    const outerContainer = {
        margin: '40px 140px'
    };

    const containerTitle = {
        fontFamily: 'Copperplate, Fantasy',
        fontSize: '70px',
        limeHeight: '0px'
    }

    return (
        <div style={outerContainer}>
            <h2 style={containerTitle}>Popular near you</h2>
            <div style={listContainer}>
                {events.map(event => (
                    <EventCard title={event.event} imageUrl={event.img} desc={event.description} date={event.date} time={event.time}></EventCard>
                ))}
            </div>
        </div>
    )
}

export default EventList;
