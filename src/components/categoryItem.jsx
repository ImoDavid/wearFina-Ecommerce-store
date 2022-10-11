import styled from 'styled-components';
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';


const Container = styled.div`
  flex:1;  
  margin:3px;
  height: 70vh;
  padding: 10px;
  position:relative;
    
`
const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height:"30vh"})}
   
`
const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h3`
    color:#fff;
    margin-bottom: 20px;
`
const Button = styled.button`
    border:none;
    padding:10px;
    background-color: #fff;
    color:gray;
    cursor:pointer;
    font-weight:600;
`

const CategoryItem = ({item}) => {
    

    return ( 
        <Container >
            
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>
                    <Link className="navLink" to={`/${item.cate}`}>
                    SHOP NOW</Link></Button>
           
            </Info>
        </Container>
     );
}
 
export default CategoryItem;