import Item from "../item/Item"
import './itemList.css';
import ButtonWhatsApp from "../buttonWhatsApp/ButtonWhatsApp";


const ItemList = ({ productos }) => {
    return (
        <div className="item-list">
            {productos.map((producto) => <Item key={producto.id} producto={producto} />)}
            {<ButtonWhatsApp />}
        </div>
    )
}

export default ItemList