import React from 'react'
import './ChatMessage.css'
export default function ChatMessage({message}) {
    return (
        <div className='message-box'>
            <p className="message-content">{message.content}</p>
        </div>
    )
}
