import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GridLayout } from "./components/GridLayout";
import {
    Direction,
    Grid,
    processCameras,
    Square,
    SquareType,
} from "./models/Grid";
import styled from "styled-components";

const data = {
    width: 10,
    height: 10,
    floorplan: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 1, "v", 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, "v", 1, 0, 0, 0, 0, 1, 1],
        [1, 0, 0, 1, ">", 0, 0, 0, "<", 1],
        [1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, "<", 1, 0, 1],
        [1, 1, 0, 0, 0, 0, "<", 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
};

const floorplan: Square[][] = data.floorplan.map((row) =>
    row.map((val) => {
        const type = val === 1 ? SquareType.Wall : SquareType.Space;
        let cameraDirection;
        switch (val) {
            case "^":
                cameraDirection = Direction.Up;
                break;
            case ">":
                cameraDirection = Direction.Right;
                break;
            case "v":
                cameraDirection = Direction.Down;
                break;
            case "<":
                cameraDirection = Direction.Left;
                break;
        }
        return {
            type,
            covered: 0,
            cameraDirection,
        };
    })
);

const grid = {
    ...data,
    floorplan: processCameras(floorplan),
};

function App() {
    return (
        <Dashboard>
            <Container> bla </Container>
            <Container style={{ flex: 3 }}>
                <GridLayout grid={grid} />
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
