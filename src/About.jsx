import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import photo from './images/photo.jpg';
import { Link } from "react-router-dom";

const  Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;
`;

const Body = styled.div`
    
`;

const ImageContainer = styled.div`
    margin-top: 100px;
    display: flex;
    height: 650px;
`;

const Image = styled.img`
    
`;

const ImageText = styled.div`
    margin-top: 150px;
`;

const Resume = styled.div`
    margin-top: 100px;
    text-align: right;
    margin-right: 150px;
`;

const ImageText1 = styled.div`
    margin-left: 120px;
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
    margin-top: 100px;
    font-size: x-large;
    font-family: 'papyrus', cursive;
`;

const TableContainer = styled.div`
    margin-top: 20px;
    /* font-size: large; */
    font-size: 4.5mm;
    font-family: 'Courier New', cursive;
    color: #2C2C2C;
    display: flex;
    justify-content: center;
    
`;

const Table = styled.table`
    align-self: center;
    width: 80%;
    margin-left: 300px;
`;

const Tr = styled.tr`
    
`;

const Td = styled.td`
    padding: 20px;
`;

function About() {
    return(
        <Container>
            <Navigation />
            <Body>
                <ImageContainer>
                    <Image src = {photo} />
                    <ImageText>
                        
                        <ImageText1>hi, i'm pratibha!</ImageText1>
                        <ImageText2>I am a Front-end Developer who's passionate about building digital experiences that nurture community, inclusivity, and knowledge. I am a graduate of Kalinga Institute of Industrial Technology, Bhubaneswar (Tier 1 College) and I have experience of 1.8 years at Accenture, Bengaluru. 
                            <br/><br/>Whether the internet or the outdoors, I love exploring, and I apply this open mindset to my projects. I am happiest when I am using my passions to help you pursue yours! If you're interested in working together,&nbsp;
                            <Link to='/contact' 
                                style={{
                                    textDecoration: "underline", 
                                    textDecorationColor: "#926122", 
                                    color: "#2C2C2C", 
                                    fontFamily: "Courier New"
                                }}>get in touch here!</Link>
                        </ImageText2>
                        <Resume>
                            <Link to='https://drive.google.com/file/d/14Kgn1vJkKRX5kqT03FO1W9C36wohEGE7/view?usp=sharing' 
                                target="_blank"
                                style={{
                                    textDecoration: "underline", 
                                    textDecorationColor: "#926122", 
                                    color: "#2C2C2C", 
                                    fontSize: "0.7cm",
                                    fontFamily: "Courier New"
                                }}>view my Resume</Link>
                            {/* view my Resume */}
                            {/* https://drive.google.com/file/d/14Kgn1vJkKRX5kqT03FO1W9C36wohEGE7/view?usp=sharing */}
                        </Resume>
                    </ImageText>
                </ImageContainer>
                <Tagline1>MY SKILLS</Tagline1>
                <TableContainer>
                    <Table>
                        <Tr>
                            <Td>HTML5</Td>
                            <Td>React JS</Td>
                            <Td>Javascript</Td>
                        </Tr>
                        <Tr>
                            <Td>CSS3</Td>
                            <Td>MySQL</Td>
                            <Td>RESTful APIs</Td>
                        </Tr>
                        <Tr>
                            <Td>Netlify</Td>
                            <Td>jQuery</Td>
                            <Td>node JS</Td>
                        </Tr>
                    </Table>
                </TableContainer>
            </Body>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Container>
    )
}

export default About;