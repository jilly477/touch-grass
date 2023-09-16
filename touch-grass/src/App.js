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
    <div>
      <div className="container">
        {/* Title Section */}
        {/* Filter section */}
        <EventList></EventList>
        {/* footer...? */}
      </div>
    </div>
  );
}

export default App;
