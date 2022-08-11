import GalleryItem from "./GalleryItem";

const Gallery = (props) => {
    const display = props.data.map((item, index) => {
        return <GalleryItem key={index} data={item} />
    });
    return (
        <div className="gallery">
            {display}
        </div>
    );
};

export default Gallery;