import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection:"column"})}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin:20px 0;
`;
const SocialContainer = styled.div`
display:flex;
`;
const SocialICon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=> props.color};
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:20px;

`;
const Center = styled.div`
  flex: 1;
  padding:20px;
  ${mobile({ display:"none"})}
`;
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    text-transform:capitalize;
    margin-bottom:10px;
`
const Right = styled.div`
  flex: 1;
  padding:20px;
`;
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>wearFINA.</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          fugiat, beatae quos eum soluta facere eaque, recusandae reprehenderit,
          dolore illum odio incidunt repudiandae. Quia numquam voluptatibus aut
          ullam eligendi illum!
        </Desc>
        <SocialContainer>
            <SocialICon color="3B5999">
                <Facebook/>
            </SocialICon>
            <SocialICon color="E4405F">
                <Twitter/>
            </SocialICon> 
            <SocialICon color="55ACEE">
                <Instagram/>
            </SocialICon>
            <SocialICon color="E60023">
                <Pinterest/>
            </SocialICon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>men fashion</ListItem>
            <ListItem>woman fashion</ListItem>
            <ListItem>my account</ListItem>
            <ListItem>order tracking</ListItem>
            <ListItem>terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}}/> 12 virginia street, victoria island Lagos
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}}/> + 234000000000
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/> contact@ incoqnito.dev
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
