import Item from "../item/Item"
import { Link } from 'react-router-dom';
import './itemList.css';
import ButtonWhatsApp from "../buttonWhatsApp/ButtonWhatsApp";


const ItemList = ({ productos }) => {
    return (
        <div className="item-list">
            {productos.map((producto) => <Item key={producto.id} producto={producto} />)}
            {/* {<Link className="whatsapp-link" to="https://api.whatsapp.com/send?phone=5493364312059" target="_blank" rel="noopener noreferrer">
                <img className="whatsapp-logo" src="../images/whatsapplogo.png" alt="Contactanos por WhatsApp" />
            </Link>} */}
            {<ButtonWhatsApp />}
        </div>
    )
}

export default ItemList