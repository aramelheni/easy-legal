import AppPaper from '../../utilities/app_paper/AppPaper';
import ChatItem from './ChatItem';
import "./ChatList.css"
import { useEffect, useState } from 'react';

export default function ChatList({ chats, onSelectChat, onAddContactPressed, isAddContactVisible }) {
    useEffect(() => {

    }, []);

    const handleAddContact = () => {
        onAddContactPressed();
    }

    return (<>
        <AppPaper color="rgb(247, 247, 247)">
            <div className="chat-list">
                <div className="contacts-header">
                    <h1>Chats</h1>
                    <div className="contacts-add" onClick={handleAddContact}>
                        <img src="/icons/add-contact.png" />
                    </div>
                </div>
                <div className="chat-list-content">
                    {
                        chats.map((chat, index) => (
                            <ChatItem key={index} chat={chat} onSelect={onSelectChat} />
                        ))
                    }
                </div>
            </div>
        </AppPaper>
    </>);
}