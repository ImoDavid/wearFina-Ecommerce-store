import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Pagination, } from "swiper";
import "swiper/swiper-bundle.min.css";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "50vh" })}
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  ${mobile({ flexDirection: "column" })}
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right ,
    rgb(255, 255, 255) 0%,
    rgb(255, 255, 255) 70%,
    ${(props) => props.bg}
  );

  ${mobile({ height: "50vh"})}
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 80%;

  ${mobile({
    width: "100%",
    objectFit: "contain",
    display: "flex",
    justifyContent: "center",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  text-transform: uppercase;
  ${mobile({ padding: "20px" })}
`;
const Title = styled.h1`
  font-size: 70px;

  ${mobile({ fontSize: "20px" })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "12px", margin: "20px 0" })}
`;

const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  ${mobile({ fontSize: "15px", padding: "5px" })}
`;

const Slider = () => {

  return (
    <Container>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <Wrapper>
          {sliderItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Slide bg={item.bg}>
                <ImgContainer>
                  <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc> {item.desc}</Desc>
                  <Button> shop now</Button>
                </InfoContainer>
              </Slide>
            </SwiperSlide>
          ))}
    
        </Wrapper>
      </Swiper>
    </Container>
  );
};

export default Slider;
