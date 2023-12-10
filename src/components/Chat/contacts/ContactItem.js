import Container from 'react-bootstrap/Container';
import "./ContactItem.css"

function ContactItem({ name, id, lastname, status, picture, onChatSelected }) {
    const handleSelectContact = (event) => {
        onChatSelected(id);
    }

    return (
        <button className="contact-item" onClick={handleSelectContact}>
            {
                (status ? <div className="status-on" /> : <div className="status-off" />)
            }
            <p className="name">{name} {lastname}</p>
        </button>
    );
}

export default ContactItem;