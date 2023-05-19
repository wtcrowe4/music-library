import { useState, useEffect, Suspense } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Spinner from './Spinner.js';

let ArtistView = () => {
    const [artistData, setArtistData] = useState([]);
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
            const response = await fetch(`http://localhost:4000/album/${id}`);
            const resData = await response.json();
            setArtistData(resData.results);
        }
        fetchData();
    } , [id]);
    
    const justAlbums = artistData.filter(album => album.collectionType === 'Album');
    const renderAlbums = justAlbums.map((album, i) => {
        return (
        <Link to={`/album/${album.collectionId}`} key={i}>
            {album.collectionName}
        </Link>
        )
    } );
    const artist = artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>;
    const itunes = artistData.length > 0 ? artistData[0].artistLinkUrl : null;
    
    return (
        <div className="artist-view">
            <div className="nav-bar">
                {navButtons()}
            </div>
            <Suspense fallback={<Spinner />}>   
                <div className="artist-view-content">
                    <div className="artist-view-artist">
                            <a href={itunes}> {artist} </a>
                    </div>
                    <div className="artist-view-songs">
                        {renderAlbums}
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default ArtistView;