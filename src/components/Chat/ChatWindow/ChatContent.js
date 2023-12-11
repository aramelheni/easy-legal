import "./ChatContent.css"
import ChatMessage from "./ChatMessage";
import { useUserContext } from "../../../managers/User.js"
import { useEffect, useRef, useState } from "react";
import { socketio } from "../../../managers/Socket.js";
import Loader from "../../utilities/loader/Loader.js"
import apiUrl from "../../../apiConfig.js";
import axios from "axios";

function ChatContent({ chat, setChat }) {
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

        const messageData = {
            senderId: myId,
            content: message,
            date: new Date()
        }
        socketio.emit("chat message", chat._id, messageData);
        if (chat._id == null) {
            setIsLoading(true);
            axios.post(apiUrl + "/chats/addNew", {
                    ids: chat.ids,
                initialMessage: messageData
            }).then(response => {
                const { _id, messages } = response.data;
                console.log("Created a new chat", _id, messages)
                setChat({ ...chat, _id, messages });
                setIsLoading(false);
            }).catch(error => {
                console.log(error);
            });
        } else {
            //setMessages([message]);
        }
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
            console.log(response.data.messages);
            setIsLoading(false);
        }).catch(error => {
            console.log("Failed to retrieve messages for chat:", error);
            setIsLoading(false);
        });
        //axios.get(url)
    }, [chat.ids])


    const setMessages = (newMessages) => {
        setChat({ ...chat, messages: newMessages });
        requestAnimationFrame(() => {
            //scroll down to قاع الهامور
            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            }
        })
    }

    return (
        <div className="chat-content">
            {isLoading &&
                <Loader fit />
            }
            <div className="chat-top-bar">
                <p className="beautify">{chatTitle}</p>
            </div>

            <div className="chat-messages beautify" ref={messagesContainerRef} >
                {!isLoading &&
                    chat.messages.map((message, index) => (
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
        </div>
    );
}

export default ChatContent;