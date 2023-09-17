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

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const filter = (index) => {
  };

  
  return (
    <div className="react-dropdown">
      <button className="Filter" onClick={filter} >
            Music</button>
      <button className="Filter" onClick={filter} >
            Outdoors</button>
      <button className="Filter" onClick={filter} >
            Food</button>
      <button className="Filter" onClick={filter} >
            Sports</button>
      <button className="Filter" onClick={filter} >
            Show</button>
    <div class="dropdown">  
      <select  class="dropdown__items" value={newItem} onChange={(e) => setNewItem(e.target.value)} onClick = {addItem}>
        <label class="dropdown__face" for="dropdown">
          <div class="dropdown__arrow"></div>
        </label> 
        <option value="" class="dropdown__items">View all filters</option>
        <option value="Music" class="dropdown__items">Music</option>
        <option value="Outdoors" class="dropdown__items">Outdoors</option>
        <option value="Food" class="dropdown__items">Food</option>
        <option value="Sports" class="dropdown__items">Sports</option>
        <option value="Show" class="dropdown__items">Show</option>
        <option value="Pop-up" class="dropdown__items">Pop-up</option>
        <option value="Carnival" class="dropdown__items">Carnival</option>
        <option value="19+" class="dropdown__items"> 19+</option>
        <option value="Women" class="dropdown__items">Women</option>
        <option value="BIPOC" class="dropdown__items">BIPOC</option>
      </select>
      <ul>
        {items.map((item, index) => (
          <p>
            <button className="Filter" onClick={() => removeItem(index) } >
            {item}</button>
          </p>
        ))}
      </ul>
      </div>
    </div>
    
  );
}

export default Filter;
