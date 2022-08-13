import { useState, useEffect } from 'react';

let AlbumView = () => {
    const [albumData, setAlbumData] = useState([]);

    return (
        <div className="album-view">
            <p>Album Data Goes Here</p>
        </div>
    );
};

export default AlbumView;