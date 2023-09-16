import React from 'react';
import Filter from './components/Filter';
import './App.css';

// components
import EventList from './components/EventCard';

const EventsData = [
  {},
  {},
  {}
]

function App() {
  return (
      <div className="container">
        {/* Title Section */}
        <Filter />
        <EventList></EventList>
        {/* footer...? */}

      </div>
  );
}

export default App;
