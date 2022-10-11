import styled from "styled-components";
import Announcement from "../components/announcement";
import CartItem from "../components/cartItem";
import NavBar from "../components/navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowBackOutlined } from "@material-ui/icons";


const Container = styled.div``;
const Wrapper = styled.div`
    // background-color: red;
    //height:100vh;
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
const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin: 0px 10px;
`;
const Bottom = styled.div`
    display:flex;
    flex-direction: column;
    padding:30px 10px;
`;
const Info = styled.div`
flex:3;
`;

const Product = styled.div`
    display:block;
    
    
 
`;
const ProductDetail = styled.div`
    flex:2;
    display:flex;

`;
const Image = styled.img``;
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;

    `;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    color:${(props)=> props.color};

`;
const ProductSize = styled.span``;

const Summary = styled.div`
    flex:1;    
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
            <TopTexts>subtotoal ( {amount} items)</TopTexts>
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
{/* <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>shopping bag(2)</TopText>
                        <TopText>your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                            <Image src=""/>

                            <Details>
                                <ProductName><b>Product:</b> THUNDER BOOTS</ProductName>
                                <ProductId><b>ID:</b>93222733654</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>size</b> 37.5</ProductSize>
                            </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>summary</Summary>
                </Bottom> */}




