// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import CoffeeShop from '../components/CoffeeShop';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);

  useEffect(() => {
    const fetchCoffeeShops = async () => {
      try {
        const response = await api.get('/coffeeshops');
        setCoffeeShops(response.data);
        setFilteredShops(response.data);
      } catch (error) {
        console.error('Error fetching coffee shops:', error);
      }
    };

    fetchCoffeeShops();
  }, []);

  const handleSearch = (query) => {
    const result = coffeeShops.filter(shop => shop.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredShops(result);
  };

  return (
    <div className="home">
      <h1>Coffee Shops</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="coffee-shops">
        {filteredShops.map(shop => (
          <CoffeeShop key={shop._id} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default Home;
