import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { mobile } from "../responsive";

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
`;

const Logo = styled.h1`
font-weight:700;
${mobile({ fontSize: "24px"})}
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({ flex:2,justifyContent: "center"})}
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({ fontSize: "12px", marginLeft:"10px"})}
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
            <Center><Logo>wearFINA.</Logo></Center>
            <Right>
             <MenuItem>REGISTER</MenuItem>
             <MenuItem>SIGN IN</MenuItem>
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