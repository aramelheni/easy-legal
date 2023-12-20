import ChatContent from './ChatWindow/ChatContent.js';
import ChatList from './contacts/ChatList.js';
import { useEffect, useState } from 'react';
import "./Chat.css"
import LookupUsers from '../user_lookup/LookupUsers.js';
import AppPaper from '../utilities/app_paper/AppPaper.js';
import { useUserContext } from '../../managers/User.js';
import apiUrl from '../../apiConfig.js';
import axios from 'axios';

function Chat() {
    const [chats, setChats] = useState([]);
    const [chat, setChat] = useState({
        _id: null,
        nature: "private",
        ids: [],
        messages: []
    });
    const { getUser } = useUserContext();
    const sessionUser = getUser();

    const fetchChats = async () => {
        return await axios.get(apiUrl + "/chats/for/" + sessionUser._id);
    }

    useEffect(() => {
        fetchChats().then(result => {
            const chats = result.data.chats;
            console.log("received chats:", chats);
            setChats(chats);
        })
    }, []);

    const onSelectChat = (chat) => {
        setChat(chat);
    }

    //Add contact
    const [isAddingContact, setIsAddingContact] = useState(false);
    const onAddContactPressed = () => {
        setIsAddingContact(!isAddingContact);
    }
    const onSelectNewChat = (user) => {
        setIsAddingContact(false);

        const chat = {
            _id: null,
            nature: "private",
            ids: [sessionUser, user],
            messages: [],
        }
        setChats([...chats, chat]);
        onSelectChat(chat);
    }

    const onChatIdGenerated = (newChatId) => {
        fetchChats().then(result => {
            const newChats = result.data.chats;
            setChats(newChats);
            newChats.forEach(newChat => {
                if (newChat._id === newChatId) {
                    onSelectChat(newChat);
                }
            });
        }).catch(error => {
            console.log("Error fetching chats:", error);
        });
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
                    isAddingContact || chats.length === 0 || chat.ids.length === 0 ?
                        <AppPaper unpadded color="rgb(247, 247, 247)">
                            <LookupUsers onSelectUser={onSelectNewChat} />
                        </AppPaper>
                        :
                        <ChatContent chat={chat} setChat={setChat} onChatIdGenerated={onChatIdGenerated} />
                }
            </div>
        </div >
    );
}

export default Chat;