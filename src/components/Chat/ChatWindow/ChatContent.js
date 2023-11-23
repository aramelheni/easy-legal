import "./ChatContent.css"
import ChatMessage from "./ChatMessage";
function ChatContent() {
    return (
        <div className="app-paper window">
            <div className="contact-name">
                <div className="beautify">
                    <p>blabla</p>

                </div>

            </div>
            <div className="line" />

            <div className="conversation beautify" >
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
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