import Dropdown from 'react-dropdown';
import React, { useState } from 'react';
import 'react-dropdown/style.css';

const options = [
  'Concert','Sports','Pop-up','Carnival','19+', 'Women only', 'BIPOC'
];
const defaultOption = options[0];

function Filter() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="react-dropdown">
      <h2>Dropdown Menu Example</h2>
      
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Filters</option>
        <option value="option1">Concert</option>
        <option value="option2">Sports</option>
        <option value="option3">Pop-up</option>
        <option value="option4">Carnival</option>
        <option value="option5">19+</option>
        <option value="option6">Women only</option>
        <option value="option7">BIPOC</option>
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default Filter;
