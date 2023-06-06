import Item from './Item';
import './Items.css';

const Items = (props) => {
    return (
        <div className="items">
            {props.items.map((item) => (
                <Item name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                size={item.size}></Item>
            ))}
        </div>
    );
};

export default Items;