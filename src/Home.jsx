import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import homeImage from './images/homeImage3.jpg';
import { Link } from "react-router-dom";

const  Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Body = styled.div`
    
`;

const ImageContainer = styled.div`
    margin-top: 100px;
    display: flex;
`;

const Image = styled.img`
    &:hover {
        /* width: 30px; */
    }
`;

const ImageText = styled.div`
    margin-top: 200px;
`;

const ImageText1 = styled.div`
    margin-left: -120px;
    font-size: 20mm;
    font-family: 'papyrus', cursive;
    
`;

const ImageText2 = styled.div`
    /* margin-top: 200px; */
    margin-left: 90px;
    font-size: 5mm;
    font-family: 'Courier New', cursive;
`;

const Tagline1 = styled.div`
    text-align: center;
    margin-top: 50px;
    font-size: x-large;
    font-family: 'papyrus', cursive;
`;

const Tagline2 = styled.div`
    text-align: center;
    margin-top: 20px;
    /* font-size: large; */
    font-size: 4.5mm;
    font-family: 'Courier New', cursive;
    color: #2C2C2C;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        text-decoration-color: black;
        /* color: #926122; */
        /* transition: 0.5s; */
    }
`;

function Home() {
    return(
        <Container>
            <Navigation />
            <Body>
                <ImageContainer>
                    <Image src = {homeImage} />
                    <ImageText>
                        <ImageText1>Pratibha Pradhan</ImageText1>
                        <ImageText2>FRONT-END DEVELOPER & DESIGNER</ImageText2>
                    </ImageText>
                </ImageContainer>
                <Tagline1>using my passion to help you pursue yours</Tagline1>
                <Tagline2>
                    <Link to="/about"
                        style={{
                            textDecoration: "none", 
                            textDecorationColor: "#926122", 
                            color: "#2C2C2C", 
                            fontFamily: "Courier New"
                            }}>LEARN MORE</Link>
                </Tagline2>
            </Body>
        </Container>
    )
}

export default Home;