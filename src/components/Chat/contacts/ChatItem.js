import "./ChatItem.css"
import { useUserContext } from "../../../managers/User.js"

function ChatItem({ chat, onSelect }) {
    const {getUserId} = useUserContext();
    const myId = getUserId();

    let title;
    chat.ids.forEach(user=>{
        if(user._id !== myId){
            title = user.firstName + " " + user.lastName;
        }
    });
    const handleSelect = (event) => {
        onSelect(chat);
    }

    return (
        <button className="contact-item" onClick={handleSelect}>
            {
                //(status ? <div className="status-on" /> : <div className="status-off" />)
                <div className="status-off" />
           }
            <p className="name">{title}</p>
        </button>
    );
}

export default ChatItem;