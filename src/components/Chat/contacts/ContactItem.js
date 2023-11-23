import Container from 'react-bootstrap/Container';
import "./ContactItem.css"

function ContactItem({ name, lastname, status, picture }) {
    const handleSelectContact = (event) => {
        console.log(name);
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