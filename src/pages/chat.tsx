import React, { useState, useEffect } from 'react'

const chat = () => {

    const [message, setMessage] = useState<string>()

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
        console.log(message)
    }



    const handleSubmit = () => {
        fetch('/api/chat/message', {
            method: 'POST',           
            body: JSON.stringify({ message })
        })
    }

    return (
    <div>
        El chat 😈

        <div className="box">
            Mensajes recientes:     
        </div>
        <form action="submit" onSubmit={handleSubmit} >
            <input type="text" className="chat-input" onChange={ (e) => handleInputChange(e)} />
            <input type="button" value="Send"  />
        </form>
        
    </div>
  )
}

export default chat