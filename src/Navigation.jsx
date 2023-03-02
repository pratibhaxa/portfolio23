import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationContainer = styled.div`
    /* background-color: #e8fee7; */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5%;
    /* background: rgb(168,159,151);
    background: linear-gradient(158deg, rgba(168,159,151,1) 0%, rgba(120,108,98,1) 51%); */
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
    margin: 20px;
    margin-left: 200px;
    margin-top: 60px;
`;

const LText = styled.div`
    cursor: pointer;
    color: black;
    font-size: xx-large;
    font-family: 'papyrus', cursive;
    
    &:hover {
        color: #926122;
        transition: 0.5s;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-left: 60px;
    margin-right: 200px;
    margin-top: 35px;
    
`;

const RText = styled.div`
    margin: 20px;
    margin-left: 25px;
    cursor: pointer;
    /* font-size: 4mm; */
    /* font-family: 'papyrus', cursive;
    font-weight: bolder; */
    // when hovered over
    &:hover {
        text-decoration: underline;
        text-decoration-color: black;
        /* color: #926122; */
        /* transition: 0.5s; */
    }
`;

function Navigation() {
    return (
        <NavigationContainer>
            <Left>
                {/* <LText>~ Pratibha Pradhan ~</LText> */}
                <Link to='/' style={{textDecoration: "none"}}>
                    <LText 
                        style={{
                            textDecoration: "none",
                            // color: "#2C2C2C", 
                            fontFamily: 'papyrus',
                        }}>Pp.</LText>
                </Link>
            </Left>
            <Right>
                <RText>
                {/* id="rtext" onMouseOver={mouseover()} onMouseOut={mouseout()} */}
                    <Link to='/'
                        style={{
                            textDecoration: "none", 
                            textDecorationColor: "#926122", 
                            color: "#2C2C2C", 
                            fontFamily: "Courier New"
                        }}>HOME</Link>
                </RText>
                <RText>
                    <Link to='/projects' 
                        style={{
                            textDecoration: "none", 
                            textDecorationColor: "#926122", 
                            color: "#2C2C2C", 
                            fontFamily: "Courier New",
                        }}>PROJECTS</Link>
                </RText> 
                <RText>
                    <Link to='/about' 
                        style={{
                            textDecoration: "none", 
                            textDecorationColor: "#926122", 
                            color: "#2C2C2C", 
                            fontFamily: "Courier New"
                        }}>ABOUT</Link>
                </RText>   
                <RText>
                    <Link to='/contact' 
                        style={{
                            textDecoration: "none", 
                            textDecorationColor: "#926122", 
                            color: "#2C2C2C", 
                            fontFamily: "Courier New"
                        }}>CONTACT</Link>
                </RText>
            </Right>
        </NavigationContainer>
    )
}

export default Navigation;