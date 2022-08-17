<<<<<<< HEAD
//Components
import { useState, useRef } from 'react';
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';
//Context
import { DataContext } from './context/DataContext.js';
import { SearchContext } from './context/SearchContext.js';
//Styling
=======
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';
import AlbumView from './components/AlbumView.js';
import ArtistView from './components/ArtistView.js';
>>>>>>> withRouter
import './App.css';

function App() {
  let [message, setMessage] = useState('');
  let [data, setData] = useState([]);
  let searchInput = useRef('');


  useEffect(() => {
    if(search) {
      const fetchData = async () => {
          document.title = `${search} Music Library`;
          const response = await fetch(`https://itunes.apple.com/search?term=${search}`);  
          const resData = await response.json();
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
<<<<<<< HEAD
}, [search]);

const handleSearch = (e, term) => {
    e.preventDefault();
    const fetchTerm = term.charAt(0).toUpperCase() + term.slice(1);
    setSearch(fetchTerm);

=======
>>>>>>> withRouter


}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Library</h1>
      </header>
<<<<<<< HEAD
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
=======
      {message ? <h2>{message}</h2> : null}
      <Router>
        <Routes>
          <Route path='/' element={
            // <Fragment> Gets undefined error
              <div className="content">
                <SearchBar handleSearch={handleSearch}/>
                <Gallery data={data} />
              </div>
            // </Fragment>
          } />
          <Route path='/album/:id' element={<AlbumView/>} />
          <Route path='/artist/:id' element={<ArtistView/>} />
          
        </Routes>
      </Router>
>>>>>>> withRouter
    </div>
  );
}

export default App;
