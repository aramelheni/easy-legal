import "./ChatContent.css"
import ChatMessage from "./ChatMessage";
function ChatContent({ chat }) {
    if (chat == undefined)
        return (<p>No Chat</p>);

    return (
        <div className="app-paper window">
            <div className="contact-name">
                <div className="beautify">
                    <p>{chat.ids[1] == 1? "zeineb" : chat.ids[1] == 2? "mouhib" : "mokni"}</p>

                </div>

            </div>
            <div className="line" />

            <div className="conversation beautify" >
                {
                    chat.messages.map(message=>(
                        <ChatMessage message={message} />
                    ))
                }
            </div>
            <div className="line" />
            <div className="text-input" >
                <div className="beautify">
                    <p>ahhhhhh</p>
                </div>
                <div>
                    <button className="send-button" > b </button>
                </div>

            </div>

        </div>
    );
}

export default ChatContent;