// import { hover } from "@testing-library/user-event/dist/hover";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Body = styled.div`

`;

const Text1 = styled.div`
    text-align: center;
    margin-top: 100px;
    font-size: 1.5cm;
    /* background-color: #071726; */
    font-family: 'papyrus', cursive;
`;

const Text2 = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    /* background-color: aliceblue; */
    margin: auto;
    /* width: 60%; */
    text-align: center;
    width: 900px;
    font-family: 'Courier New', cursive;
    /* display: inline-block; */
`;

const Form = styled.form`
    /* text-align: center; */
`;

const Wrapper = styled.div`
    text-align: center;
    /* display: flex; */
    /* justify-content: center; */
    /* margin: 0 auto; */
    /* align-items: center; */
    /* position: absolute;
    left: 30%;
    right: 50%; */
`;

const Name = styled.div`
    text-align: left;
    display: flex;
    justify-content: center;
`;

const First = styled.div`
    
`;

const Last = styled.div`
    
`;

const NameLabel = styled.label`
    
`;

const Label = styled.label`
    text-align: left;
`;

const NameInput = styled.input`
    width: 300px;
    height: 30px;
`;

const Input = styled.input`
    width: 640px;
    height: 30px;
`;

const Button = styled.button`
    
`;

function Contact() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [subjectt, setSubjectt] = useState('');
    const [message, setMessage] = useState('');

    const send = () => {
        Axios.post('http://localhost:3001/contact', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            subjectt: subjectt,
            message: message,
        }).then((response) => {
            console.log(response.data);
        });
    };

    return(
        <Container>
            <Navigation />
            <Body>
                <Text1>let's connect</Text1>
                <Text2>Feel free to reach out if you're interested in working together, being friends, or discussing the best coffee spots! You can also email me at&nbsp;
                    <Link style={{
                        color: "black",
                        textDecoration: "underline", 
                        textDecorationColor: "#926122", 
                    }}
                        // to='javascript:void(0)'
                        onClick={() => window.location = 'mailto:pratibhapradhaninterview@gmail.com'}>
                        pratibhapradhaninterview@gmail.com
                    </Link>. All fields are required!
                </Text2>
                <Form>
                    <Wrapper>
                        <Name>
                            <First>
                                <NameLabel>First name : </NameLabel>
                                <br/>
                                <NameInput 
                                    type="text" 
                                    required
                                    // placeholder="First name"
                                    onChange={(e) => {
                                        setFirstname(e.target.value);
                                    }}
                                />
                            </First>
                            {/* <br/> */}
                            &emsp;&emsp;
                            <Last>       
                                <NameLabel>Last name : </NameLabel>
                                <br/>
                                <NameInput
                                    type="text" 
                                    required
                                    // placeholder="Email ID"
                                    onChange={(e) => {
                                        setLastname(e.target.value);
                                    }}
                                />
                            </Last>
                        </Name>
                        <Label>Email : </Label>
                        <br/>
                        <Input 
                            type="text" 
                            required
                            // placeholder="Username"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <br/>
                        <Label>Subject : </Label>
                        <br/>
                        <Input
                            type="text" 
                            required
                            // placeholder="Password"
                            onChange={(e) => {
                                setSubjectt(e.target.value);
                            }}
                        />
                        <br/>
                        <Label>Message : </Label>
                        <br/>
                        <Input
                            style={{
                                height: '300px'
                            }}
                            type="text" 
                            required
                            // placeholder="Password"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                        <br/>
                        <Button onClick={send}>SEND</Button>
                        <br/>
                        {}
                    </Wrapper>
                    
                </Form>
            </Body>
        </Container>
    )
}

export default Contact;