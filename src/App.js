//React Imports
import { useEffect, useState, Suspense } from 'react';  //useRef,
import { createResource as fetchData } from './helper.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';
import AlbumView from './components/AlbumView.js';
import ArtistView from './components/ArtistView.js';
import Spinner from './components/Spinner.js';
//Context
//import { DataContext } from './context/DataContext.js';
//import { SearchContext } from './context/SearchContext.js';
//Styling
import './App.css';







function App() {
  let [message, setMessage] = useState('');
  let [search, setSearch] = useState('');
  let [data, setData] = useState(null);
  //let searchInput = useRef('');


  // useEffect(() => {
  //   if(search) {
  //     const fetchData = async () => {
  //         document.title = `${search} Music Library`;
  //         const response = await fetch(`https://itunes.apple.com/search?term=${search}`);  
  //         const resData = await response.json();
  //         if (resData.results.length > 0) {
  //             setData(resData.results);
  //             setMessage('');
  //         } else {
  //             setMessage('No results found');
  //         }
  //     }
  //     fetchData();
  //   }
  // });

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
    setMessage('');
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
       
      {/* <div className="content">
        <SearchContext.Provider value={{
            term: searchInput,
            handleSearch: handleSearch
        }}>
          <SearchBar />
        </SearchContext.Provider>
        {message ? <h2>{message}</h2> : null} */}

        {/* <DataContext.Provider value={data}>
          <Gallery />
        </DataContext.Provider> */}

      <Router>
        <Routes>
          <Route path='/' element={
            // <Fragment> Gets undefined error
              <div className="content">
                <SearchBar handleSearch={handleSearch}/>
                {renderGallery()}
              </div>
            // </Fragment>
          } />
          <Route path='/album/:id' element={<AlbumView/>} />
          <Route path='/artist/:id' element={<ArtistView/>} />
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
