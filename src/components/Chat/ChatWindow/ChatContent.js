import "./ChatContent.css"
import ChatMessage from "./ChatMessage";
import { useUserContext } from "../../../managers/User.js"
import { useEffect, useRef, useState } from "react";
import { socketio } from "../../../managers/Socket.js";
import Loader from "../../utilities/loader/Loader.js"
import apiUrl from "../../../apiConfig.js";
import axios from "axios";

function ChatContent({ chat, setChat, onChatIdGenerated }) {
    //Is true when the chat panel is loading the messages
    const [isLoading, setIsLoading] = useState(true);
    //Get my ID
    const { getUserId } = useUserContext();
    const myId = getUserId();
    const chatIdRef = useRef(chat._id);

    //Generate the chat title from the names of the participants
    let chatTitle = "";
    chat.ids.forEach(targetUser => {
        if (targetUser._id !== myId) {
            chatTitle += targetUser.firstName + " " + targetUser.lastName;
        }
    });

    //Reference for the messages flexbox container. We use this to scroll down when a new messages pops up.
    const messagesContainerRef = useRef();

    //The content of the message input field
    const [message, setMessage] = useState("");
    //Runs when the user changes the content of the message input field (for example, writes a new character)
    const onMessageChange = (e) => {
        const message = e.target.value;
        setMessage(message);
    }
    //Runs when the user sends a message
    const handleSubmitMessage = (e) => {
        e.preventDefault();
        if (message == null || message.length === 0)
            return;

        if (chatIdRef.value == null) //Attempt to create a new chat
        {
            setIsLoading(true);
            axios.post(apiUrl + "/chats/add", {
                ids: chat.ids.map(user => user._id),
                nature: "private"
            }).then(response => {
                const { _id, messages } = response.data;
                socketio.emit("chat message", _id, myId, message);
                // chatIdRef.value = _id;
                // setChat({ ...chat, _id });
                onChatIdGenerated(_id);
                // setMessages(messages);
                // setIsLoading(false);

            }).catch(error => {
                console.log(error);
            });
        } else {
            socketio.emit("chat message", chatIdRef.value, myId, message);
        }

        //Reset inputfield
        setMessage("");
    };

    useEffect(() => {
        chatIdRef.value = chat._id;
        socketio.on('chat message', (chatId, messageData) => {
            console.log(`Received a message(${messageData}) for this chat <${chatId} VS ${chatIdRef.value}`)
            if (chatId === chatIdRef.value) {
                addMessage(messageData)
            }
        })

        //Retrieve chat messages
        setIsLoading(true);
        // const encodedIds = chat.ids.map(user => encodeURIComponent(user._id)).join(',');
        // const url = apiUrl + "/chats/" + encodedIds + "/messages";
        const url = apiUrl + "/chats/" + chatIdRef.value + "/messages";
        axios.get(url).then(response => {
            setMessages(response.data.messages)
            setIsLoading(false);
        }).catch(error => {
            console.log("Failed to retrieve messages for chat:", error);
            setIsLoading(false);
        });

        //Disconnect socketio
        return () => {
            socketio.off('chat message');
        };
    }, [chat.ids])

    const addMessage = (message) => {
        console.log("Will add a message:", message);
        setChat(oldChat => { return { ...oldChat, messages: [...oldChat.messages, message] } });
        requestAnimationFrame(() => {
            //scroll down to قاع الهامور
            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            }
        })
    }

    const setMessages = (newMessages) => {
        console.log("Will set messages to:", newMessages);
        setChat(oldChat => { return { ...oldChat, messages: newMessages } });
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
                {(!isLoading && chat.messages) &&
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
                        <img src="/icons/send.png" alt="Send Message" />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChatContent;