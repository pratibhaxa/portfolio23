import styled from "styled-components";
import Navigation from "./Navigation";

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

function Projects() {
    return(
        <Container>
            <Navigation />
        </Container>
    )
}

export default Projects;