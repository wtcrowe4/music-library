import { useState } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    // const [message, setMessage] = useState('');
    // const [data, setData] = useState([]);
    
    // const handleChange = (e) => {
    //     setSearch(e.target.value);
    // }
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setMessage('');
    //     if (search === '') {
    //     setMessage('Please enter a search term.');
    //     } else {
    //     setData([]);
    //     props.search(search);
    //     };
    // };



    return (
        <div className="search-bar">
        <form onSubmit={(e)=> props.handleSearch(e, searchTerm)}>
            <input type="text" placeholder="Search for music..." onChange={(e)=>setSearchTerm(e.target.value)} />  {/*props.handleSearch(e, e.target.value) */}
            <button type="submit">Search</button>
        </form>
        {/* {message ? <h2>{message}</h2> : null} */}
        <form onSubmit={(e)=>setSearchTerm('')}><button>Clear</button></form>
        </div>
    );
};

export default SearchBar;