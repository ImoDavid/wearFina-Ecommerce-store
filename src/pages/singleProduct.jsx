import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Newsletter from "../components/newsletter";
import { mobile } from "../responsive";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";


const Container = styled.div``;
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({ flexDirection:"column", padding:"10px"})}
`;
const ImgContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
    width:100%; 
    height:90vh;
    object-fit:contain;
    ${mobile({ height:"40vh"})}
`;
const InfoContainer = styled.div`
flex:1;
padding: 0 50px;
${mobile({ padding:"10px"})}
`;
const Title = styled.h1`
    font-weight:200;
`;
const Desc = styled.p`
    margin:20px 0;
`;
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`;

const FilterContainer = styled.div`
    width:50%;
    display:flex;
    justify-content:space-between;
    ${mobile({ width:"100%"})}
`;
const Filter = styled.div`
    display:flex;
    align-items:center;
    margin:20px 0;
`;
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`;
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color: ${(props)=> props.color};
    margin:0px 5px;
    cursor:pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width:50%;
    ${mobile({ width:"100%"})}
`;
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`;
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:25%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 5px;
    border:1px solid teal;

`;
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color:#f8f4f4;
    }
`;

const SingleProduct = () => {
    const {products} = useSelector((state) => state.products);

    const params = useParams();
    const Id = params.id - 1;

  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ImgContainer>
          <Image src={products[Id].image}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{products[Id].title}</Title>
          <Desc>{products[Id].description}</Desc>
          <Price>${products[Id].price}</Price>
          <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                </Filter>
                <Filter>
                    <FilterTitle>size</FilterTitle>
                    <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    <FilterSizeOption>XXL</FilterSizeOption>
                    </FilterSize>
                </Filter>
          </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
