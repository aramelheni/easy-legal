import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ChatContent from './ChatContent.js';
import ContactList from './contacts/ContactList.js';
import { useEffect, useState } from 'react';
import "./Chat.css"
import axios from 'axios';
import apiUrl from '../../apiConfig.js';

function Chat() {
    const [chat, setChat] = useState({
        messages: []
    });

    useEffect(() => {
        axios.get(apiUrl + "/users/chat/0/1")
            .then((response) => {
                setChat(response.data.chat);
            }).catch((error) => {
                console.log("error getting chat: ", error)
            });
    }, []);

    const selectChatHandler = (targetId) => {
        axios.get(apiUrl + "/users/chat/0/" + targetId)
            .then((response) => {
                setChat(response.data.chat);
            }).catch((error) => {
                console.log("error getting chat: ", error)
            });
    }

    return (
        <div className="chat-section">
            <div className="contacts">
                <ContactList selectChatHandler={selectChatHandler} />
            </div>
            <div className="chat">
                <ChatContent chat={chat} />
            </div>
        </div >
    );
}

export default Chat;