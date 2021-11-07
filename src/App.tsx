import React from "react";
import styled from "styled-components";
import { GridLayout } from "./components/GridLayout/GridLayout";
import "./App.css";

function App() {
    return (
        <Dashboard>
            <Container> bla </Container>
            <Container style={{ flex: 3 }}>
                <GridLayout />
            </Container>
        </Dashboard>
    );
}

const Dashboard = styled.div`
    height: 100%;
    padding: 0 10rem;
    display: flex;
    gap: 2rem;
`;

const Container = styled.div`
    flex: 1;
    padding: 5rem 0;
`;

export default App;
