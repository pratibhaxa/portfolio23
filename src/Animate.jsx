import * as React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%);
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    background: white;
    border-radius: 30px;
    width: 150px;
    height: 150px;
`;

const Animate = () => {
    return(
        <Container>
            <Box>
                <motion.div
                    animate={{
                        rotate: [0, 200, 200, 0],
                        x: [0, 200, 200, 0, -200, -200, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1
                    }}
                ></motion.div>
            </Box>
        </Container>
    )
}

export default Animate;