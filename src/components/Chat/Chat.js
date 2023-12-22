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
    //All the chats I participated in
    const [chats, setChats] = useState([]);
    //The currently open chat
    const [chat, setChat] = useState({
        _id: null,
        nature: "private",
        ids: [],
        messages: []
    });
    //Get my user info
    const { getUser } = useUserContext();
    const sessionUser = getUser();

    //Get chats I've participated in from the server
    const fetchChats = async () => {
        return await axios.get(apiUrl + "/chats/for/" + sessionUser._id);
    }

    //Once the component is loaded, run this code
    useEffect(() => {
        //Get the list of chats from the server
        fetchChats().then(result => {
            const chats = result.data.chats;
            setChats(chats);
        })
    }, []);

    //Is called when a chat is selected from the ChatList
    const onSelectChat = (newChat) => {
        //Make sure thet chat isn't already open
        if(newChat._id === chat._id && chat._id != null)
            return;

        setChat(newChat);
    }

    //Is true when the "add a new contact" panel is open
    const [isAddingContact, setIsAddingContact] = useState(false);
    //Opens the "add a new contact" panel
    const onAddContactPressed = () => {
        setIsAddingContact(!isAddingContact);
    }
    //Runs when a new contact is selected from the "add a new contact" panel
    const onSelectNewChat = (user) => {
        setIsAddingContact(false);
        //Create a chat for the new contact
        const chat = {
            _id: null,
            nature: "private",
            ids: [sessionUser, user],
            messages: [],
        }
        //Add the chat to the list of chats I've participated in
        setChats([...chats, chat]);
        //Select the chat
        onSelectChat(chat);
    }

    //Runs when a new chat is created in the database
    const onChatIdGenerated = (newChatId) => {
        //Read again all the chats from the server
        fetchChats().then(result => {
            const newChats = result.data.chats;
            setChats(newChats);
            //Since we deleted the old list of chats and fetched it again from the server, we need to
            //reselect the chat that was already open, when can do that by using the chat id
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