import spinnerGIF from '../spinner.gif';

const Spinner = () => {
    return (
        <div className="spinner">
        <img src={spinnerGIF} alt="Loading..." />
        </div>
    );
}

export default Spinner;