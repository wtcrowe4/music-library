//Components
import GalleryItem from "./GalleryItem";
//Context
import { useContext } from 'react';
import { DataContext } from "../context/DataContext.js";

const Gallery = () => {
    const data = useContext(DataContext);
    const display = data.map((item, index) => {
        return <GalleryItem key={index} data={item} />
    });
    return (
        <div className="gallery">
            {display}
        </div>
    );
};

export default Gallery;