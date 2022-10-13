import styled from "styled-components";
import Announcement from "../components/announcement";
import CartItem from "../components/cartItem";
import NavBar from "../components/navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowBackOutlined } from "@material-ui/icons";


const Container = styled.div``;
const Wrapper = styled.div`
   background-color: #f5f2f2;
`;
const Title = styled.div`
    font-weight:700;
    text-align: left;
    padding:30px 10px;
`;
const Text = styled.p`
    margin-left:5px;
`;
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:20px;
    background-color: #fff;
`;
const TopButton = styled.button`
    display:flex;
    align-items: center;
    width:150px;
    padding:8px 0;
    font-weight:300;
    cursor:pointer;
    border-radius:10px;
    border:${props=>props.type === "filled" ? "none" : "1px solid teal"};
    background-color:${props=>props.type === "filled" ? "black" : "transparent"};
    color:${props=>props.type === "filled" ? "white" : "teal"};
    margin-bottom:30px;
`;

const TopTexts = styled.div``;
const Bottom = styled.div`
    display:flex;
    flex-direction: column;
    padding:30px 10px;
`;

const Product = styled.div`
    display:block;
`;
const Cart = () => {
    const {cartItems, amount, total} = useSelector((state) => state.cart);
    const navigate = useNavigate()
    return (
        <Container>
            <NavBar/>
            <Announcement/>
            <Wrapper>
            <Title>shopping cart</Title>
            <Top>
            <TopTexts>subtotal ( {amount} items)</TopTexts>
            <TopTexts>${total}</TopTexts>
            </Top>
            <Bottom>
            <TopButton type="" onClick={()=> {navigate("/home")}}> <ArrowBackOutlined/><Text> continue shopping</Text></TopButton>
            <Product>
            {cartItems.map((item)=>(
                <CartItem item = {item} key={item.id}/>
            ))} 
            </Product>
            </Bottom>          
            </Wrapper>

        </Container>
      );
}
 
export default Cart;




