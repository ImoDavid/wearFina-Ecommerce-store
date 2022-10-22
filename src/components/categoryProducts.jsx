import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCate } from "../features/products/productSlice";
import { mobile } from "../responsive";
import Product from "./product";
import _ from "lodash";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #9a5b8d;
  padding: 10px;
`;
const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin: 10px 0;
  letter-spacing: 4.5px;
  ${mobile({ fontSize: "20px", margin: "25px" })}
`;

const CategoryProducts = ({ category, sortValue  }) => {
  const { curCate } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCat(category) {
      try {
        const res = await axios(
          `https://fakestoreapi.com/products/category/${category}`
        );
        dispatch(getCate(res.data));
      } catch (err) {
        return err;
      }
    }
    fetchCat(category);
  }, [category,sortValue]);
  
    const sorted = _.orderBy(curCate, ['price'], sortValue);
  
  if (sortValue !== "newest"){

    return (
      <Container>
        <Title>{`${category} products`}</Title>
        <Wrapper>
          { sorted.map((item) => (
              <Product item={item} key={item.id} />
            ))
          }
        </Wrapper>
      </Container>
    );
  }else{
    return (
      <Container>
        <Title>{`${category} products`}</Title>
        <Wrapper>
          { curCate.map((item) => (
              <Product item={item} key={item.id} />
            ))
          }
        </Wrapper>
      </Container>
    );
  }
};

export default CategoryProducts;
