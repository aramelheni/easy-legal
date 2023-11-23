import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ChatContent from './ChatContent.js';
import ContactList from './contacts/ContactList.js';
import { useState } from 'react';
import "./Chat.css"

function Chat() {
    const [chat, setChat] = useState({
        messages: [
            {
                senderId: 0,
                content: "Hi",
                date: new Date()
            },
            {
                senderId: 0,
                content: "winek",
                date: new Date()
            },
            {
                senderId: 1,
                content: "hani",
                date: new Date()
            }
        ]
    });

    return (
        <div className="chat-section">
            <div className="contacts">
                <ContactList />
            </div>
            <div className="chat">
                <ChatContent /> 
            </div>
        </div >
    );
}

export default Chat;