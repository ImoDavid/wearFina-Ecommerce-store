import styled from 'styled-components';
import {useSelector, useDispatch} from "react-redux";
import { Link,NavLink } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { setLoading } from '../features/cart/cartSlice';
import { mobile } from "../responsive";
import { Person, } from '@material-ui/icons';
import CartItem from './cartItem';

const Container = styled.div`
position:relative;
height:60px;
${mobile({ height: "50px"})}

`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({ padding: "10px 0"})}
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Language = styled.span`
font-size:14px;
cursor:pointer;

${mobile({ display: "none"})}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
${mobile({ display: "none"})}
`
const Center = styled.div`
flex:1;
text-align:center;
${mobile({marginLeft:"20px"})}`


const Logo = styled.h1`
font-weight:700;
${mobile({ fontSize: "24px"})}
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({ justifyContent: "center"})}
`
const MenuItem = styled.div`
text-decoration:none ;
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({ fontSize: "12px", marginLeft:"10px"})}`

const MenuContainer = styled.div`
display: block;
${mobile({ display:"none"})}`

const IconContainer = styled.div`
display:none;
${mobile({ display:"flex",marginLeft:"10px"})}
`
const CartContainer = styled.div`
position:absolute;
width:100%;
top:0;
height:550vh;
background-color:#262525c6;
z-index:10;  
`;
const CartContent = styled.div`
position:fixed;
width:35%;
height:100%;
top:0;
right:0;
background-color:#fff;
overflow:auto;
`;

const CartHeader = styled.div`
  display:flex;
  height:50px;
  align-items:center;
  justify-content:space-between;
  padding:10px;
  box-shadow: 1px 0px 16px 0px rgba(168,158,158,0.75);
  margin-bottom:5px;
`;
const Product = styled.div`
    display:block;
`;
const TopButton = styled.button`
    display:flex;
    align-items: center;
    width:100px;
    padding:8px 0;
    font-weight:300;
    cursor:pointer;
    border:${props=>props.type === "filled" ? "none" : "1px solid teal"};
    background-color:${props=>props.type === "filled" ? "black" : "transparent"};
    color:${props=>props.type === "filled" ? "white" : "teal"};
`;


const Title = styled.div`
    font-size:30px;
    font-weight:700;
    text-align: left;
    padding:30px 10px;
`;
const Text = styled.p`
    margin:auto;
`;

const NavBar = () => {
const {cartItems, amount, isLoading} = useSelector((state) => state.cart);
const dispatch = useDispatch();
return ( 
    <Container>
            <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                     <Input/>
                     <SearchIcon style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo><Link  className="navLink" to="/">wearFINA.</Link></Logo></Center>
            <Right>
             <MenuContainer>
             <MenuItem>
             <NavLink className="navLink" to="/register">REGISTER</NavLink>
             </MenuItem>
             </MenuContainer>
             <MenuContainer>
             <MenuItem>
             <NavLink to="/login" className="navLink">SIGN IN</NavLink>
             </MenuItem>
             </MenuContainer>
             <IconContainer>
             <MenuItem>
             <NavLink to="/login" className="navLink"><Person/></NavLink>
             </MenuItem>
             </IconContainer>
             <MenuContainer>
             <MenuItem>
             <Badge badgeContent={amount} 
             color="primary">
            <ShoppingCartOutlinedIcon onClick={()=>{dispatch(setLoading(!isLoading))}}/>
            </Badge>
             </MenuItem>
             </MenuContainer>
             <IconContainer>
             <MenuItem>
             <Badge badgeContent={amount} 
             color="primary">
            <NavLink to="/cart" className="navLink"><ShoppingCartOutlinedIcon/></NavLink>
            </Badge>
             </MenuItem>
             </IconContainer>
            </Right>
            </Wrapper>
            { isLoading &&  
            <CartContainer>
            <CartContent>
            <CartHeader>
            <Title>shopping cart</Title>   
            <TopButton type="" onClick={()=> {dispatch(setLoading(!isLoading))}}><Text> close</Text></TopButton>
            </CartHeader>
            <Product>
            {cartItems.map((item)=>(
                <CartItem item = {item} key={item.id}/>
                ))} 
            </Product>
                </CartContent>
            </CartContainer>
    }
        </Container>
     );
}
 
export default NavBar;