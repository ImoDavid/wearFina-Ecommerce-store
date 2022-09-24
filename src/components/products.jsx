import styled from "styled-components";
import { popularproducts } from '../data';
import Product from './product';

const Container= styled.div`
    display:flex;
    flex-wrap: wrap;
    margin: 0px;
    justify-content:space-between;

`

const Products = () => {
    return (  
        <Container>
            {popularproducts.map((item)=>(
                <Product item = {item} key={item.id}/>
            ))}
        </Container>
    );
}
 
export default Products;