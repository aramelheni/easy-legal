import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContactItem from './ContactItem';
import "./ContactList.css"

export default function ContactList() {
    const contacts = [{
        name: "zeineb",
        lastname: "ben dhiaf",
        status: 1,
        phone_number: "29188811"
    },
    {
        name: "mouhib",
        lastname: "bouzamitta",
        status: 0,
        phone_number: "50262927"
    },
    {
        name: "mouhib",
        lastname: "bouzamitta",
        status: 0,
        phone_number: "50262927"
    }]

    return (<>
        <div className="contact-list app-paper">
            <div className="contacts-title">
                <h1 className="contacts-title">Contacts</h1>
                <div className="horizontal-line-primary"/>
            </div>
            <div className="list">
                {
                    contacts.map((contact, index) => (
                        <ContactItem key={index} {...contact} />
                    ))
                }
            </div>
        </div>
    </>);
}