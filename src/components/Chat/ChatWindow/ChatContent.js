import "./ChatContent.css"
import ChatMessage from "./ChatMessage";
import { useUserContext } from "../../../managers/User.js"
import { useEffect, useRef, useState } from "react";
import { socketio } from "../../../managers/Socket.js";

function ChatContent({ chat }) {
    const { getUserId } = useUserContext();
    const myId = getUserId();

    let chatTitle = "Empty Chat";
    chat.targetIds.forEach(targetUser => {
        if (targetUser._id != myId) {
            chatTitle += targetUser._id;
        }
    });

    //Messages
    const messagesContainerRef = useRef();
    const [messages, setMessagesState] = useState([]);

    //Message field
    const [message, setMessage] = useState("");
    const handleSubmitMessage = (e) => {
        e.preventDefault();
        if (message == null || message.length == 0)
            return;

        socketio.emit("chat message", chat._id, myId, message);
        setMessage("");
    };
    const onMessageChange = (e) => {
        const message = e.target.value;
        setMessage(message);
    }

    useEffect(() => {
        socketio.on('chat message', (chatId, senderId, message) => {
            if (chatId._id == chat._id) {
                setMessages(messages => [...messages, message])
            }
        })
    }, [])


    const setMessages = (newMessages) => {
        setMessagesState(newMessages);
        requestAnimationFrame(() => {
            //scroll down to قاع الهامور
            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            }
        })
    }

    return (
        <div className="chat-content">
            {chat && <>
                <div className="chat-top-bar">
                    <p className="beautify">{chatTitle}</p>
                </div>

                <div className="chat-messages beautify" ref={messagesContainerRef} >
                    {
                        messages.map((message, index) => (
                            <ChatMessage key={index} message={message} />
                        ))
                    }
                </div>
                <form className="chat-bottom-bar" onSubmit={handleSubmitMessage}>
                    <input
                        className="chat-message-field"
                        type="text"
                        placeholder="Write your message..."
                        value={message}
                        onChange={onMessageChange}
                    />
                    <div className="bottom-bar-buttons">
                        <button className="send-button" type="submit">
                            <img src="/icons/send.png" />
                        </button>
                    </div>
                </form>
            </>}
        </div>
    );
}

export default ChatContent;