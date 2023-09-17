import React from 'react';
import Filter from './components/Filter';
import MyCalendar from './components/Calendar';
import SearchBar from './components/SearchBar';
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
        <MyCalendar />
        <SearchBar />
        
        <EventList></EventList>
        {/* footer...? */}

      </div>
  );
}

export default App;
