import React, { useState, useEffect } from "react";
import EventCard from './EventCard';
import Filter from './Filter';

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
        lineHeight: '0px'
    };

    const FilterContainer = {
        marginBottom: '30px'
    };

    return (
        <div style={outerContainer}>
            <h2 style={containerTitle}>Popular near you</h2>
            <div style={FilterContainer}>
                <Filter></Filter>
            </div>
            <div style={listContainer}>
                {events.map(event => (
                    <EventCard title={event.event} imageUrl={event.img} location={event.location} date={event.date} time={event.time}></EventCard>
                ))}
            </div>
        </div>
    )
}

export default EventList;
