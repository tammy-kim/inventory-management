import InventoryForm from "./InventoryForm";
import "./NewItem.css";

const NewItem = (props) => {
    
    const saveItemHandler = (inputItem) => {
        const item = {
            ...inputItem
        };

        props.addItem(item);
    };

    return <div className="new-item">
        <InventoryForm saveItem={saveItemHandler}>
        </InventoryForm>
    </div>
};

export default NewItem;