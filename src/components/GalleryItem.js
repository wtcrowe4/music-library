import { useState } from 'react';
import { Link } from 'react-router-dom';

function GalleryItem(props){
    let [view, setView] = useState(false);

    const simpleView = () => {
        return (
            <div className="gallery-item-simple">
                <h3>{props.data.trackName}</h3>
                <h4><Link to={`/artist/${props.data.artistId}`}>{props.data.artistName}</Link></h4>
                <h4><Link to={`/album/${props.data.collectionId}`}>{props.data.collectionName}</Link></h4>
            </div>
        );
    };
    
    const detailedStyle = {'backgroundImage':`url(${props.data.artworkUrl100})`};
    // let date = props.data.releaseDate.getDate()
    const detailedView = () => {
        return (
            <div className="gallery-item-detailed" style={detailedStyle}>
                <h3>{props.data.trackName}</h3>
                <h4><Link to={`/artist/${props.data.artistId}`}>{props.data.artistName}</Link></h4>
                <h5><Link to={`/album/${props.data.collectionId}`}>{props.data.collectionName}</Link></h5>
                <h5>{props.data.primaryGenreName}</h5>
                <h5>{props.data.releaseDate}</h5>
            </div>
        );
    };
    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            {view ? detailedView() : simpleView()}
        </div>
    );
};

export default GalleryItem;
