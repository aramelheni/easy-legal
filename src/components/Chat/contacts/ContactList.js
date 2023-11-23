import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContactItem from './ContactItem';
import "./ContactList.css"

export default function ContactList({selectChatHandler}) {
    const contacts = [{
        name: "zeineb",
        id: 1,
        lastname: "ben dhiaf",
        status: 1,
        phone_number: "29188811"
    },
    {
        name: "mouhib",
        id: 2,
        lastname: "bouzamitta",
        status: 0,
        phone_number: "50262927"
    },
    {
        name: "mokni",
        id: 3,
        lastname: "bennour",
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
                        <ContactItem key={index} {...contact} selectChatHandler={selectChatHandler} />
                    ))
                }
            </div>
        </div>
    </>);
}