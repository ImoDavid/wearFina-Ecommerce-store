import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    height:60vh;
     background-color:#fcf5f5;
     display: flex;
     align-items:center;
     justify-content:center;
     flex-direction:column;
     ${mobile({ height:"50vh"})}
`
const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
    text-transform: uppercase;
    ${mobile({ fontSize:"50px"})}
`
const Desc = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom: 20px;
    text-transform: capitalize;
    ${mobile({ textAlign:"center",
     fontSize:"20px",
     padding:"0 45px"})}
`
const InputContainer = styled.div`
width:50%;
height:40px;
background-color:#fff;
display: flex;
justify-content:space-between;
border:1px solid lightgray;

`
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`
const Button = styled.button`
    flex:1;
    color:#fff;
    background-color:teal;
    border:none;
    `


const Newsletter = () => {
    return (  
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favourite products.</Desc>
            <InputContainer>
                <Input placeholder="email here"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    );
}
 
export default Newsletter;