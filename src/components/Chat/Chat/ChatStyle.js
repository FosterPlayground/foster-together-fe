import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #A1A1A1;
flex-direction: column;
`

export const InnerContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: white;
border-radius: 8px;
height: 70vh;
width: 70vw;
margin-top: 10%;
`

export const Banner = styled.div`
width: 100%;
height: 14%;
background-color: #375762;
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
border-bottom: 2px solid black;
`

export const FosterTogether = styled.img`
padding: 5%;
`

export const Header = styled.h1`
color: white;
font-size: 3.2rem;
text-align: center;
width: 60%;
`

export const MediumContainer = styled.div`
display: flex; 
align-items: center;
width: 100%;
height: 100%;
`

export const SideBar = styled.div`
width: 20vw;
background-color: #375762;
color: white;
height: 100%;
margin-right: 5%;
border-right: 2px solid black;
display: flex;
align-items: center;
`

export const Message = styled.h1`
color: white;
font-size: 2rem;
padding: 5%;
`