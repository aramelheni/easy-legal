import ContactItem from './ContactItem';
import "./ContactList.css"
import { useEffect, useState } from 'react';

export default function ContactList({ onChatSelected, onAddContactPressed }) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        
    }, []);

    const handleAddContact = ()=>{
        onAddContactPressed();
    }

    return (<>
        <div className="contact-list app-paper">
            <div className="contacts-header">
                <h1>Contacts</h1>
                <div className="contacts-add" onClick={handleAddContact}>
                    <img src="/icons/add-contact.png"/>
                </div>
            </div>
            <div className="list">
                {
                    contacts.map((contact, index) => (
                        <ContactItem key={index} {...contact} onChatSelected={onChatSelected} />
                    ))
                }
            </div>
        </div>
    </>);
}