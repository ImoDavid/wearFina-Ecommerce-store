import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Add, Remove, } from "@material-ui/icons";
import { increase,decrease,removeItem} from "../features/cart/cartSlice"
import truncateText from "../utils/truncateText";

const Container = styled.div`
  margin: 5px;
  min-height: 250px;
  display: flex;
  background-color: #fff;
  transition: all 0.2s;
  margin: 10px 0;
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  padding: 10px;
  
`;
const TopSection = styled.div`
  display: flex;
  padding:10px;
`;
const Image = styled.img`
  height: 100px;
  
`;
const Title = styled.h4`
  font-weight: 700;
  font-size: 16px;
  text-transform: capitalize;
  margin: 10px 20px;
`;
const PriceDetail = styled.div`
    display:flex;
    align-items: center;
    padding:10px;
    `;

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    border:1px solid grey;
    border-radius: 10%;
    box-shadow: 1px 10px 16px 0px rgba(168,158,158,0.75);
`;
const Border = styled.span`
  padding:0 5px;
  color:grey;
`;
const ProductAmount = styled.div`
    color:black;
    font-size:20px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:700;
    margin-left:20px;
`;
 const Hr = styled.hr`
  color:red;
  margin:10px 0 20px 0;
 `;
 const CartButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding:10px;
 `;
 const CartButton = styled.button`
 width:150px;
 padding:8px;
 font-weight:700;
 cursor:pointer;
 border-radius:5px;
 border:${props=>props.type === "filled" ? "none" : "1px solid grey"};
 background-color:${props=>props.type === "filled" ? "black" : "transparent"};
 color:${props=>props.type === "filled" ? "white" : "black"};
 margin-bottom:30px;
`;


const CartItem = ({ item }) => {
    const dispatch = useDispatch();
  
  return (
    <Container>
      <Wrapper>
        <TopSection>
        <Image src={item.image} />
        <Title>{truncateText(item.title, 20)}</Title>
        </TopSection>
        <PriceDetail>
          <ProductAmountContainer>
           <Border><Add onClick={()=>dispatch(increase(item))} /></Border> 
            <Border><ProductAmount>{item.amount}</ProductAmount></Border>
            <Border><Remove onClick={()=>dispatch(decrease(item))} /></Border>
          </ProductAmountContainer>
          <ProductPrice>${item.price}</ProductPrice>
        </PriceDetail>
        <Hr></Hr>
        <CartButtons>
        <CartButton type="">save for later</CartButton>
        <CartButton type="" onClick={()=>dispatch(removeItem(item.id))}>remove item</CartButton>
        </CartButtons>
      </Wrapper>
    </Container>
  );
};

export default CartItem;
