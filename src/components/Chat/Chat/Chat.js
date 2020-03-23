import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import {
  Header,
  Container,
  InnerContainer,
  FosterTogether,
  Banner,
  MediumContainer,
  SideBar,
  Message
} from './ChatStyle'

let socket

const Chat = ({ location }, props) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'http://localhost:5000/'

  console.log(location)

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setRoom(room)
    setName(name)

    socket.emit('join', { name, room }, error => {
      if (error) {
        alert(error)
      }
    })
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message])
    })

    return () => {
      socket.emit('disconnect')

      socket.off()
    }
  }, [messages])

  const sendMessage = event => {
    event.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <Container>
      <Banner>
        <FosterTogether src={require('../../../images/logo.svg')} />
        <Header> Get to know your match!</Header>
      </Banner>
      <MediumContainer>
        <SideBar>
         <Message> We want to give everyone a chance to have a quick chat with and build a new relationship in a place everyone feels safe and comfortable. </Message>
        </SideBar>
        <InnerContainer>
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </InnerContainer>
      </MediumContainer>
    </Container>
  )
}

export default Chat
