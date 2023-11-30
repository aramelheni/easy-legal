import React from 'react'
import './ChatMessage.css'
export default function ChatMessage({message}) {
    return (
        <div className='chat-box'>

            <p>{message.content}</p>
        </div>
    )
}
