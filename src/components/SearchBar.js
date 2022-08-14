import { useState } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="search-bar">
        <form onSubmit={(e)=> props.handleSearch(e, searchTerm)}>
            <input type="text" placeholder="Search for music..." onChange={(e)=>props.handleSearch(e, e.target.value)} />  {/*setSearchTerm(e.target.value) */}
            <button type="submit">Search</button>
        </form>
        {/* {message ? <h2>{message}</h2> : null} */}
        <form onSubmit={(e)=>setSearchTerm('')}><button>Clear</button></form>
        </div>
    );
};

export default SearchBar;