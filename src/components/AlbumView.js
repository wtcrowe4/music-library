import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

let AlbumView = () => {
    const [albumData, setAlbumData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const navButtons = () => {
        return (
            <div className="nav-buttons">
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        );
    }
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/song/${id}`);
            const resData = await response.json();
            setAlbumData(resData.results);
        } 
        fetchData();
    } , [id]);
    
    const justSongs = albumData.filter(song => song.wrapperType === 'track');
    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>{song.trackName}</div>)
    } );

    return (
        <div className="album-view">
            {navButtons()}
            {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <h2>Loading...</h2>}
            {renderSongs}
        </div>
    );
};

export default AlbumView;