import styled from "styled-components";
import { popularproducts } from '../data';
import { useSelector } from "react-redux";
import Product from './product';
import { mobile } from "../responsive";
import { useEffect } from "react";




const Container = styled.div``;

const Wrapper= styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    background-color:#9a5b8d;
    padding:10px;
`
const Title = styled.h1`
text-align: center;
text-transform:uppercase;
margin:10px 0;
letter-spacing:4.5px;
${mobile({ fontSize:"20px",margin:"25px"})}
`

const Products = () => {
    const {products} = useSelector((state) => state.products);

    return (  
        <Container>
            <Title>featured products</Title>
            <Wrapper>
            {products.map((item)=>(
                <Product item = {item} key={item.id}/>
            ))}
            </Wrapper>

        </Container>
    );
}
 
export default Products;