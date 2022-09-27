import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/announcement";
import NavBar from "../components/navbar";


const Container = styled.div``;
const Wrapper = styled.div`
    padding:20px;
`;
const Title = styled.div`
    font-weight:300;
    text-align: center;
`;
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
`;
const TopButton = styled.div`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${props=>props.type === "filled" && "none"};
    background-color:${props=>props.type === "filled" ? "black" : "transparent"};
    color:${props=>props.type === "filled" ? "white" : "black"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin: 0px 10px;
`;
const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
`;
const Info = styled.div`
flex:3;
`;

const Product = styled.div`
    display:flex;
    justify-content:space-between;
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
const PriceDetail = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size:24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;
`;

const Summary = styled.div`
    flex:1;    
`;

const Cart = () => {
    return (
        <Container>
            <NavBar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
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
                </Bottom>
            </Wrapper>

        </Container>
      );
}
 
export default Cart;