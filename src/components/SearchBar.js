//Context
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext.js';

<<<<<<< HEAD
const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

=======
const SearchBar = () => {
    let { term, handleSearch } = useContext(SearchContext);
    
>>>>>>> withContext
    return (
        <div className="search-bar">
<<<<<<< HEAD
        <form>
            <input ref={term} type="text" placeholder="Search for music..." />  {/*props.handleSearch(e, e.target.value) */}
            <button onClick={e => handleSearch(e, term.current.value)}>Search</button>
=======
        <form onSubmit={(e)=> props.handleSearch(e, searchTerm)}>
            <input type="text" placeholder="Search for music..." onChange={(e)=>props.handleSearch(e, e.target.value)} />  {/*setSearchTerm(e.target.value) */}
            <button type="submit">Search</button>
>>>>>>> withRouter
        </form>
        {/* {message ? <h2>{message}</h2> : null} */}
        
        {/*Button to clear Context data */}
        {/* <button onClick={}>Clear</button> */}
        
        </div>
    );
};

export default SearchBar;