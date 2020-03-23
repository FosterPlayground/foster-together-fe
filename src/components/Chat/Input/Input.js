import React from 'react';
import { TextEntry, Inputs, Send } from './InputStyle'


const Input = ({ setMessage, sendMessage, message }) => (
  <TextEntry >
    <Inputs
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <Send className="sendButton" onClick={e => sendMessage(e)}>Send</Send>
  </TextEntry>
)

export default Input;