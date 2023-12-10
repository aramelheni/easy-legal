import ChatContent from './ChatWindow/ChatContent.js';
import ChatList from './contacts/ChatList.js';
import { useEffect, useState } from 'react';
import "./Chat.css"
import axios from 'axios';
import apiUrl from '../../apiConfig.js';
import LookupUsers from '../user_lookup/LookupUsers.js';
import AppPaper from '../utilities/app_paper/AppPaper.js';
import { useUserContext } from '../../managers/User.js';

function Chat() {
    const [chats, setChats] = useState([]);
    const [chat, setChat] = useState({
        targetIds: [],
        messages: []
    });
    const { getUser } = useUserContext();
    const sessionUser = getUser();

    useEffect(() => {
        
    }, []);

    const setMessages = (messages) => {
        console.log("chat was", chat, "and will become", { ...chat, messages });
        setChat({ ...chat, messages })
    }

    const onSelectChat = (chat) => {
        setChat(chat);
    }

    //Add contact
    const [isAddingContact, setIsAddingContact] = useState(false);
    const onAddContactPressed = () => {
        setIsAddingContact(!isAddingContact);
    }
    const onSelectNewContact = (user) => {
        setIsAddingContact(false);

        const chat = {
            ids: [sessionUser, user],
            messages: []
        }
        setChats([...chats, chat]);
        onSelectChat(chat);
    }

    return (
        <div className="chat-section">
            <div className="contacts">
                <ChatList
                    chats={chats}
                    onSelectChat={onSelectChat}
                    onAddContactPressed={onAddContactPressed}
                    isAddContactVisible={isAddingContact}
                />
            </div>
            <div className="chat">
                {
                    isAddingContact || chats.length==0?
                        <AppPaper unpadded color="rgb(247, 247, 247)">
                            <LookupUsers onSelectUser={onSelectNewContact} />
                        </AppPaper>
                        :
                        <ChatContent chat={chat} setMessages={setMessages} />
                }
            </div>
        </div >
    );
}

export default Chat;