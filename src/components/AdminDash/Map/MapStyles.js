import styled from 'styled-components'

export const FilterDiv = styled.div`
width: 20vw;
height: 100vh;
background-color: F9F9F9;
`

export const MapContain = styled.div`
height: 100vh;
width: 60vw;
background-color: black;
`

export const PageContain = styled.div`
display: flex;
`

export const InfoDiv = styled.div`
width: 20vw;
height: 100vh;
background-color: F9F9F9;
display: flex;
flex-direction: column;
align-items: center;
padding-left: 1%;
padding-top: 2%;
`
export const UserName = styled.div`
font-size:4rem;
padding-top: 2%;
`

export const IconContain = styled.div`
display: flex; 
align-items: center;
justify-content: center;
font-size: 1.2rem;
flex-wrap: wrap;
`

export const Icon = styled.img`
padding: 5px;
height: 50px;
`

export const Buttons = styled.button`
width: 80%;
height: 5%;
margin-top: 1%;
background: white;
border: none;
font-size: 3rem;
background-color: ${props => props.selected === props.current ? "#91BCCF" : "white"};
border: 1px solid black;

&:hover{
    color: blue;
}
`

export const ButtonHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2vh;
`

export const Header = styled.h1`
font-size: 3rem;
`

export const Image = styled.img`
width: 20%;
`

export const HeaderHolder = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`