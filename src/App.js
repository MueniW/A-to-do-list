import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    "Shopping",
    "Make Calls",
    "Meetings",
    "Book Club",
    "Generate Reports",
  ]);

  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>Wife's To-Do List</h1>
      <div className="list-box">
        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
              <button className="delete-button" onClick={() => handleDeleteItem(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export default App;
