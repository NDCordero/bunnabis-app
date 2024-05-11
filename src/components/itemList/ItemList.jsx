import Item from "../item/Item";
import './itemList.css';
import ButtonWhatsApp from "../buttonWhatsApp/ButtonWhatsApp";


const ItemList = ({ productos }) => {
    return (
        <div>
            <div className="item-list">
                {productos.map((producto) => <Item key={producto.id} producto={producto} />)}

            </div>
            {<ButtonWhatsApp />}
        </div>
    )
}

export default ItemList