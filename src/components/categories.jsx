import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './categoryItem';
import { mobile } from "../responsive";

const Container=styled.div`
    margin:30px 0;
`
const Wrapper=styled.div`
    display:flex;
    padding:20px;
    justify-content: space-between;
    
    ${mobile({ padding:"0px", flexDirection:"column"})}
`;
 const Title = styled.h1`
    text-align: center;
    text-transform:uppercase;
    margin:10px 0;
    letter-spacing:4.5px;
    ${mobile({ fontSize:"20px",margin:"30px"})}
 `
const Categories = () => {
    return (  
        <Container>
            <Title>categories</Title>
            <Wrapper>
            {categories.map(item=>(
                <CategoryItem item={item}/>
            ))}
            </Wrapper>
        </Container>
    );
}
 
export default Categories;