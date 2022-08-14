import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

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
            <div>{album.collectionName}</div>
        </Link>
        )
            
    } );


    return (
        <div className="artist-view">
            {navButtons()}
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            {/* <p><a href={}>Check them out on Itunes</a></p> */}
            {renderAlbums}
        </div>
    );
};

export default ArtistView;