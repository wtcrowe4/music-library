import { useState, useEffect, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from './Spinner.js';

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
    const renderSongs = justSongs.map((song, i) => <li key={i}>{song.trackName}</li>)
    const album = albumData.length > 0 ? <h2>Album: {albumData[0].collectionName}</h2> : <h2>Loading...</h2>
    const artist = albumData.length > 0 ? albumData[0].artistName : null;
    const image = albumData.length > 0 ? albumData[0].artworkUrl100: null;
    const itunes = albumData.length > 0 ? albumData[0].collectionViewUrl: null;
    
    return (
        <div className="album-view">
            <div className="nav-bar">
                {navButtons()}
            </div>
            <Suspense fallback={<Spinner />}>
                <div className="album-view-content">
                    {album}
                    {artist}
                    <div className="album-view-image">
                        <a href={itunes}> <img src={image} alt={artist} /></a>
                    </div>
                    <div className="album-view-songs">
                        <ol>{renderSongs}</ol>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default AlbumView;