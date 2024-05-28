import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/search?q=phone');
      setData(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
   
    filterData();
  }, [searchQuery, data]);

  const filterData = () => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSearchChange = event => {
    setSearchQuery(event.target.value); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {/* Render filtered data */}
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
