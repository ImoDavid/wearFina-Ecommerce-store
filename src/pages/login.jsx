import styled from "styled-components";
import { useDispatch} from "react-redux";
import { login } from "../features/authUser/authuserSlice";
import {useState} from "react";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinyrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: white;
  background-color: teal;
  cursor: pointer;
`;
const Anchor = styled.a`
  margin: 10px 0;
  font-size: 12px;
  text-decoration: underline;
`;
const Login = () => {
  const url = 'https://fakestoreapi.com/auth/login';
  const config = {
    headers: {
       "Access-Control-Allow-Origin": "/",
      // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json',
    
      // 'Access-Control-Allow-Origin': 'http://localhost:3000',
      // 'Access-Control-Allow-Credentials': 'true'
    
    }
  };
  const dispatch= useDispatch();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user,pwd)
   //dispatch(login({user,pwd}))
    try{
      const res = await axios.post(url,JSON.stringify({email:user,password:pwd}),config)
      // {
      //   headers:{'Access-Control-Allow-Origin': 'http://localhost:3000',
      //   'Access-Control-Allow-Credentials': 'true'
      // },
      //   //  headers:{'content-Type': 'application/json'},
      //   //  withCredentials:false
      // }
      setUser('');
      setPwd('');
      alert(JSON.stringify(res?.data));
    }catch(err){
      alert(err)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input 
          placeholder="username"
          type="text"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
           />
          <Input placeholder="password"
           type="password"
           id="password"
           onChange={(e) => setPwd(e.target.value)}
           value={pwd}
           required />
        
            <Button>Log in</Button>
          
          <Anchor>FORGOT PASSWORD?</Anchor>
          <Link className="navLink" to="/register">
            <Button>SIGN UP</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
