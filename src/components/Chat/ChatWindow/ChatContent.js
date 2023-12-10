import "./ChatContent.css"
import ChatMessage from "./ChatMessage";
import { useUserContext } from "../../../managers/User.js"
import { useEffect, useRef, useState } from "react";
import { socketio } from "../../../managers/Socket.js";
import apiUrl from "../../../apiConfig.js";
import axios from "axios";

function ChatContent({ chat }) {
    const [isLoading, setIsLoading] = useState(true);
    const { getUserId } = useUserContext();
    const myId = getUserId();

    //Generate chat title
    let chatTitle = "";
    chat.ids?.forEach(targetUser => {
        if (targetUser._id != myId) {
            chatTitle += targetUser.firstName + " " + targetUser.lastName;
        }
    });

    //Messages
    const messagesContainerRef = useRef();
    const [messages, setMessagesState] = useState([]);

    //Message field
    const [message, setMessage] = useState("");
    const onMessageChange = (e) => {
        const message = e.target.value;
        setMessage(message);
    }
    const handleSubmitMessage = (e) => {
        e.preventDefault();
        if (message == null || message.length == 0)
            return;

        socketio.emit("chat message", chat._id, myId, message);
        setMessage("");
    };

    useEffect(() => {
        setIsLoading(true);
        // socketio.on('chat message', (chatId, senderId, message) => {
        //     if (chatId._id == chat._id) {
        //         setMessages(messages => [...messages, message])
        //     }
        // })
        //Retrieve chat messages
        const encodedIds = chat.ids.map(user => encodeURIComponent(user._id)).join(',');
        const url = apiUrl + "/chats/" + encodedIds + "/messages";
        axios.get(url).then(response => {
            console.log("Received messages:", response.data);
            setMessages(response.data.messages)
            setIsLoading(false);
        }).catch(error => {
            console.log("Failed to retrieve messages for chat.");
            setIsLoading(false);
        });
        //axios.get(url)
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
            <div className="chat-top-bar">
                <p className="beautify">{chatTitle}</p>
            </div>

            <div className="chat-messages beautify" ref={messagesContainerRef} >
                {!isLoading ?
                    <>{
                        messages.map((message, index) => (
                            <ChatMessage key={index} message={message} />
                        ))
                    }</> :
                    <>
                        <p>Sneaking on your messages...</p>
                    </>
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
        </div>
    );
}

export default ChatContent;