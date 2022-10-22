import styled from "styled-components";
import Announcement from "../components/announcement";
import NavBar from "../components/navbar";
import CategoryProducts from "../components/categoryProducts";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import { mobile } from "../responsive";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;
const Option = styled.option``;


const ProductList = () => {
const [sortValue, setsortValue] = useState(null);
  const params = useParams();
  const { category } = params;
 
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select disabled>
            <Option disabled>color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select disabled>
            <Option disabled>size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => {
             const selectedValue = e.target.value;
             setsortValue(selectedValue);
          }}>
            <Option>newest</Option>
            <Option value={"asc"}>price (asc)</Option>
            <Option value={"desc"}>price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <CategoryProducts category={category} sortValue={sortValue}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
