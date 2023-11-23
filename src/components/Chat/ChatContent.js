function ChatContent({ chat }) {
    return (<div className="app-paper">
        {
            chat.messages.map((message, index) => (
                <div key={index}>
                    <p>{message.content}</p>
                </div>
            ))
        }
    </div >);
}

export default ChatContent;