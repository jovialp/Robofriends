import React, { useState, useEffect } from 'react';

import CardList from './CardList';
import Searchbox from './Searchbox';

import { robots } from './robots';

// Style
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRobots, setFilteredRobots] = useState(robots);

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  useEffect(() => {
    setFilteredRobots(
      robots.filter((robo) =>
        robo.name.toLowerCase().includes(searchTerm?.toLowerCase() || '')
      )
    );
  }, [searchTerm]);

  return (
    <div className="tc">
      <h1>Robo-Friends</h1>
      <Searchbox handleSearch={handleSearch} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
