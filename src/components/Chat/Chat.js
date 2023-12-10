import ChatContent from './ChatWindow/ChatContent.js';
import ContactList from './contacts/ContactList.js';
import { useEffect, useState } from 'react';
import "./Chat.css"
import axios from 'axios';
import apiUrl from '../../apiConfig.js';

function Chat() {
    const [chat, setChat] = useState({
        targetIds: [],
        messages: []
    });

    useEffect(() => {

    }, []);

    const setMessages = (messages) => {
        console.log("chat was",chat,"and will become", { ...chat, messages });
        setChat({ ...chat, messages })
    }

    const selectChatHandler = (targetId) => {
        axios.get(apiUrl + "/users/chat/0/" + targetId)
            .then((response) => {
                //setChat(response.data.chat);
            }).catch((error) => {
                console.log("error getting chat: ", error)
            });
    }

    //Add contact
    const [isAddingContact, setIsAddingContact] = useEffect(false);
    const onAddContactPressed = ()=>{
        setIsAddingContact(!isAddingContact);
    }

    return (
        <div className="chat-section">
            <div className="contacts">
                <ContactList selectChatHandler={selectChatHandler} onAddContactPressed={onAddContactPressed} />
            </div>
            <div className="chat">
                <ChatContent chat={chat} setMessages={setMessages} />
            </div>
        </div >
    );
}

export default Chat;