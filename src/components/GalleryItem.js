import { useState } from 'react';

function GalleryItem(props){
    let [view, setView] = useState(true);

    const simpleView = () => {
        return (
            <div className="gallery-item-simple">
                <h3>{props.data.trackName}</h3>
                <h4>{props.data.collectionName}</h4>
            </div>
        );
    };
    
    const detailedStyle = {'backgroundImage':`url(${props.data.artworkUrl100})`};
    // let date = props.data.releaseDate.getDate()
    const detailedView = () => {
        return (
            <div className="gallery-item-detailed" style={detailedStyle}>
                <h3>{props.data.trackName}</h3>
                <h4>{props.data.collectionName}</h4>
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
