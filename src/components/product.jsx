import { mobile } from "../responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";
import truncateText from "../utils/truncateText";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  height: 200px;
  display: flex;
  background-color: #fff;
  overflow:hidden;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.01);
  }
  ${mobile({
    height: "250px",
    minWidth: "150px",
  })}
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "column", margin: "0 auto" })}
`;

const Image = styled.img`
  height: 60%;
  padding: 5px;
  ${mobile({ height: "25%", marginBottom: "5px" })}
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
  ${mobile({ margin: "20px" })}
`;

const Title = styled.h4`
  margin-bottom: 30px;
  font-weight: 300;
  font-size: 18px;
  text-transform: capitalize;
  ${mobile({ marginBottom: "10px", fontSize: "16px" })}
`;
const Price = styled.h1`
  font-size: 16px;
`;

const Product = ({ item }) => {
  return (
    <Container>   
      <Wrapper>
        <Image src={item.image} />
      <Link className="navLink" to={`/product/${item.id}`}>
        <Info>
          <Title>{truncateText(item.title, 20)}</Title>
          <Price>${item.price}</Price>
        </Info>
          </Link>
      </Wrapper>
    </Container>
  );
};

export default Product;
