import React from 'react'
import './ChatMessage.css'
import { useUserContext } from '../../../managers/User';

export default function ChatMessage({ message }) {
    const { content, senderId } = message;
    const date = new Date(message.date);
    const { getUserId } = useUserContext();
    const isLocal = getUserId() == senderId;
    return (
        <div className={"chat-message " + (isLocal ? "local-msg" : "party-msg")}>
            <div className={'message-box ' + (isLocal ? "local-msg" : "party-msg")}>
                <p className="message-content">{content}</p>
            </div>
            <p className="message-time">{date.toLocaleTimeString()}</p>
        </div>
    )
}
