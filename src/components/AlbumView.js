import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

let AlbumView = () => {
    const [albumData, setAlbumData] = useState([]);
    const { id } = useParams();

    return (
        <div className="album-view">
            <p>The ID passed was {id}</p>
            <p>Album Data Goes Here</p>
        </div>
    );
};

export default AlbumView;