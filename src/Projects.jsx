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

const Project1 = styled.div`
    
`;

// const Project2 = styled.div`
    
// `;

function Projects() {
    return(
        <Container>
            <Navigation />
            <Body>
                <Project1>

                </Project1>
                <Project1>

                </Project1>
            </Body>
        </Container>
    )
}

export default Projects;