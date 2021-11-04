import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GridLayout } from "./components/GridLayout";
import { Grid } from "./models/Grid";
import styled from "styled-components";

const data: Grid = {
    floorplan: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
};

function App() {
    return (
        <Dashboard>
            <Container> bla </Container>
            <Container style={{ flex: 3 }}>
                <GridLayout grid={data} />
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
