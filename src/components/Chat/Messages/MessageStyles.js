import styled from 'styled-components'

export const MessageSent = styled.div`
    background: #253B44;
    border-radius: 20px;
    padding: 5px 20px;
    color: white;
    display: inline-block;
    max-width: 80%;
`
  
export const MessageText = styled.p`
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 1.8rem;
    word-wrap: break-word;
    justify-content: flex-start;
`
  
export const MessageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column-reverse;
    padding: 0 5%;
    margin-top: 3px;
    align-items: flex-start;
`
  
export const SentText = styled.p`
    display: flex;
    align-items: center;
    font-family: Helvetica;
    letter-spacing: 0.3px;
    padding-left: 10px;
    font-size: 1.6rem;
    background: #F3F3F3;
    justify-content: flex-end;
    
`
export const MessageRecieved = styled.div`
    display:flex;
    justify-content: flex-end;
    background: #FF8D86;
    border-radius: 20px;
    padding: 5px 20px;
    color: white;
    width: auto;
    text-align: left;
`
  
export const MessageReceivedContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column-reverse;
    padding: 0 5%;
    margin-top: 3px;
    align-items: flex-end;
`