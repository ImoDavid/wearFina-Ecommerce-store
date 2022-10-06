import styled from 'styled-components';
import { Link,NavLink } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { PowerOffOutlined } from '@material-ui/icons';

const NavBar = () => {

const Container = styled.div`
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
${mobile({ display:"flex",marginLeft:"30px"})}
`

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
             <NavLink to="/login" className="navLink"><PowerOffOutlined/></NavLink>
             </MenuItem>
             </IconContainer>
             
             <MenuItem>
             <Badge badgeContent={4} 
             color="primary">
            <ShoppingCartOutlinedIcon/>
            </Badge>
             </MenuItem>
            </Right>
            </Wrapper>
        </Container>
     );
}
 
export default NavBar;