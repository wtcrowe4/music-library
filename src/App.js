import { useEffect, useState, Suspense } from 'react';
import { createResource as fetchData } from './helper.js';
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';
import Spinner from './components/Spinner.js';
import './App.css';

function App() {
  let [search, setSearch] = useState('');
  let [message, setMessage] = useState('');
  let [data, setData] = useState(null);

  useEffect(() => {
    if(search) {
      setData(fetchData(search));
      setMessage('');
    } else {
      setMessage('Please enter a search term.');
    }  
  }, [search]);

  const handleSearch = (e, term) => {
      e.preventDefault();
      const fetchTerm = term.charAt(0).toUpperCase() + term.slice(1);
      setSearch(fetchTerm);
  }
  
  const renderGallery = () => {
    if(data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      );
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Library</h1>
      </header>
      <div className="content">
        <SearchBar handleSearch={handleSearch}/>
        {message ? <h2>{message}</h2> : null}
        {renderGallery()}
      </div>
    </div>
  );
}

export default App;
