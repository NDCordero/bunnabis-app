import Item from "../item/Item"
import './itemList.css'

const ItemList = ({ productos }) => {
    return (
        <div className="item-list">
            {productos.map((producto) => <Item key={producto.id} producto={producto} />)}
            <a className="whatsapp-link" href="https://web.whatsapp.com/send?phone=543364312059" target="_blank" rel="noopener noreferrer">
                        <img className="whatsapp-logo" src="../images/whatsapplogo.png" alt="WhatsApp" />
                    </a>
        </div>
    )
}

export default ItemList