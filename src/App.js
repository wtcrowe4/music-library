import { useEffect, useState } from 'react';
import { BrowerRouter as Router, Route, Link } from 'react-router-dom';
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';
import AlbumView from './components/AlbumView.js';
import ArtistView from './components/ArtistView.js';
import './App.css';

function App() {
  let [search, setSearch] = useState('');
  let [message, setMessage] = useState('');
  let [data, setData] = useState([]);

  useEffect(() => {
    if(search) {
    const fetchData = async () => {
        document.title = `${search} Music Library`;
        const response = await fetch(`https://itunes.apple.com/search?term=${search}`);  
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
}, [search]);

const handleSearch = (e, term) => {
    e.preventDefault();
    const fetchTerm = term.charAt(0).toUpperCase() + term.slice(1);
    setSearch(fetchTerm);
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Library</h1>
      </header>
      <div className="content">
        <SearchBar handleSearch={handleSearch}/>
        {message ? <h2>{message}</h2> : null}
        <Gallery data={data} />
        <AlbumView />
        <ArtistView />
      </div>
    </div>
  );
}

export default App;
