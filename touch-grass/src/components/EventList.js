import React, { useState, useEffect } from "react";
import EventCard from './components/EventCard';

const EventList = ({events}) => {
    return (
        <div>
            {events.map( event => (
                <EventCard></EventCard>
            ))}
        </div>
    )
}

export default EventList;
