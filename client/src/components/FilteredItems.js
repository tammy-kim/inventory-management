import React, { useState, useEffect } from 'react';
import "./FilteredItems.css";

const FilteredItems = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const url = selectedSize ? `http://localhost:3001/items?size=${selectedSize}` : 'http://localhost:3001/items';
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      } else {
        console.error('Error fetching items:', response.status);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleFilter = () => {
    fetchItems();
  };

  return (
    <div className="filter-container">
      <div>
        <label htmlFor="size">Filter by Size:</label>
        <select
          id="size"
          value={selectedSize}
          onChange={e => setSelectedSize(e.target.value)}
        >
          <option value="">All</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div>
        <h2>Filtered Items:</h2>
        {items.length > 0 ? (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default FilteredItems;