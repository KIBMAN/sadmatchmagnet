import { useState } from 'react'


const ChatInput=()=>{
    const [textArea,serTextArea]=useState(null)
    return (
      <div className="chat-input">
        <textarea value={textArea} onChange={(e)=>serTextArea(e.target.value)}/>
        <button className="secondary-button">Submit</button>
      </div>
    )
  }
  
  export default ChatInput