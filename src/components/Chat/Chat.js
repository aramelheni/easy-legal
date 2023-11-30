import ChatContent from './ChatWindow/ChatContent.js';
import ContactList from './contacts/ContactList.js';
import { useEffect, useState } from 'react';
import "./Chat.css"
import axios from 'axios';
import apiUrl from '../../apiConfig.js';

function Chat() {
    const [chat, setChat] = useState();

    useEffect(() => {

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