import './Image.css'
const Image = (props) => {
    const {url, alt} = props;
    return (
        <img className="image" src={url} alt={alt} />
    );
}

export default Image;