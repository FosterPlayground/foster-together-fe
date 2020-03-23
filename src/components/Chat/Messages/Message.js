import React from 'react';
import {MessageSent, MessageContainer, MessageText, SentText,  MessageRecieved, MessageReceivedContainer} from './MessageStyles'


const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <MessageContainer>
          <MessageSent>
          <MessageText>{text}</MessageText>
          </MessageSent>
          <p className="sentText pr-10">{trimmedName}</p>
        </MessageContainer>
        )
        : (
          <MessageReceivedContainer>
            <MessageRecieved>
              <MessageText>{text}</MessageText>
            </MessageRecieved>
            <p className="sentText pl-10 ">{user}</p>
          </MessageReceivedContainer>
        )
  );
}

export default Message;