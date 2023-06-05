import "./ItemImage.css";

const ItemImage = (props) => {
    return (
        <div className="image">
            <img src={props.image} />
        </div>
    )
};

export default ItemImage;