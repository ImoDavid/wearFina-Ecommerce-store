import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinyrgb&dpr=2&h=650&w=940") center;
    background-size:cover;
`;
const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color:white;
    ${mobile({ width:"75%"})}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight:300;
`;
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
    ${mobile({ flexDirection:"column"})}
`;
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0 0;
    padding:10px;
`;
const Agreement = styled.span`
    font-size:12px;
    margin:20px 0;
`;
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    color:white;
    cursor:pointer;
    background-color:teal;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
            placeat.
          </Agreement>
          <Button>Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;