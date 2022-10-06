import { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import { sliderItems } from '../data';
import { mobile } from "../responsive";

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    ${mobile({ height: "50vh"})}
    
`;

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    display:flex;
    align-items:center;
    justify-content: center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${(props)=> props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    border-radius: 50%;
    z-index: 2;
    ${mobile({ height: "25px", width:"25px"})}
`
const Wrapper = styled.div`
    display:flex;
    height:100%;
    transition:all 1.5s ease;
    transform:translateX(${(props)=> props.slideIndex * - 100}vw);
`
const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color: ${props=> props.bg}; 

    ${mobile({ height: "50vh"})}
`
const ImgContainer = styled.div`
    height:100%;
    flex:1;
    display:flex;
    
`
const Image = styled.img`
height:80%;
 
${mobile({width:"100%", objectFit:"cover",display:"flex",justifyContent:"center"})}
`
const InfoContainer = styled.div`
    flex:1;
    padding:50px;
    text-transform: uppercase;
    ${mobile({ padding: "20px"})}
`
const Title = styled.h1`
    font-size:70px;

    ${mobile({ fontSize: "20px"})}
`

const Desc = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
    ${mobile({ fontSize: "12px", margin:"20px 0",})}
`

const Button = styled.button`
    padding:10px;
    background-color: transparent;
    font-size:20px;
    cursor:pointer;
    ${mobile({ fontSize: "15px",padding:"5px"})}
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "right"){
            
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }else{
            
            setSlideIndex(slideIndex > 2 ? slideIndex + 1 : 0);
        }

    }

    return ( 
        <Container> 
            <Arrow direction="left" onClick={()=> handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/> 
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc> {item.desc}</Desc>
                    <Button> shop now</Button>
                </InfoContainer>
                </Slide>

                ))}
                
            </Wrapper>
             <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>
     );
}
 
export default Slider;