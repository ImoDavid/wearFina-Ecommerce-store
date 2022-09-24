import { SearchOutlined, ShoppingCartOutlined, } from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:3;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: regb(0,0,0,0.2);
    transition:all 0.5s ease;
    `;

const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfb;
position:relative;

&:hover ${Info}{
    opacity:1
}
`;
const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:#fff;
    position:absolute;
    `;
const Image = styled.img`
    height:75%;
    z-index:2;
    `;
const Icon = styled.div`
     width:40px;
     height:40px;
     border-radius:50%;
     background-color:#fff;
     display: flex;
     align-items:center;
     justify-content:center;
     margin:10px;
     cursor:pointer;
     transition:all 0.5s ease;
     
     &:hover{
        transform:scale(1.1);
    }
`;

const Product = ({item}) => {
    return ( 
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
            </Info>
        </Container>
     );
}
 
export default Product;