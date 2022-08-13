import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

let ArtistView = () => {
    const [artistData, setArtistData] = useState([]);
    const { id } = useParams();

    return (
        <div className="artist-view">
            <p>The ID passed was {id}</p>
            <p>Artist Data Goes Here</p>
        </div>
    );
};

export default ArtistView;