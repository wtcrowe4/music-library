//Components
import { useState, useRef } from 'react';
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';
//Context
import { DataContext } from './context/DataContext.js';
import { SearchContext } from './context/SearchContext.js';
//Styling
import './App.css';

function App() {
  let [message, setMessage] = useState('');
  let [data, setData] = useState([]);
  let searchInput = useRef('');

//API call to get data from iTunes API
const handleSearch = (e, term) => {
    e.preventDefault();
    const fetchTerm = term.charAt(0).toUpperCase() + term.slice(1);
    const fetchData = async () => {
      document.title = `${fetchTerm} Music Library`;
      const response = await fetch(`https://itunes.apple.com/search?term=${fetchTerm}`);  
      const resData = await response.json();
      console.log(resData); 
      if (resData.results.length > 0) {
          setData(resData.results);
          setMessage('');
      } else {
          setMessage('No results found');
      }
  }
  fetchData();
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Library</h1>
      </header>
      <div className="content">
        <SearchContext.Provider value={{
            term: searchInput,
            handleSearch: handleSearch
        }}>
          <SearchBar />
        </SearchContext.Provider>
        {message ? <h2>{message}</h2> : null}
        <DataContext.Provider value={data}>
          <Gallery />
        </DataContext.Provider>
      </div>
    </div>
  );
}

export default App;
