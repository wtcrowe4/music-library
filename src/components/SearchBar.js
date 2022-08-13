//Context
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext.js';

const SearchBar = () => {
    let { term, handleSearch } = useContext(SearchContext);
    
    return (
        <div className="search-bar">
        <form>
            <input ref={term} type="text" placeholder="Search for music..." />  {/*props.handleSearch(e, e.target.value) */}
            <button onClick={e => handleSearch(e, term.current.value)}>Search</button>
        </form>
        {/* {message ? <h2>{message}</h2> : null} */}
        
        {/*Button to clear Context data */}
        {/* <button onClick={}>Clear</button> */}
        
        </div>
    );
};

export default SearchBar;