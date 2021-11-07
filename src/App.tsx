import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Editor } from "./components/Editor";
import { getSavedGrids } from "./models/Storage";

function App() {
    const [grids, setGrids] = useState(getSavedGrids());
    const gridsList = Object.entries(grids).sort((a, b) => a[1].ts - b[1].ts);
    const [selectedGrid, setSelectedGrid] = useState(0);
    useEffect(() => {
        const onStorageChange = () => {
            console.log("localstorage changed");
            setGrids(getSavedGrids());
        };
        window.addEventListener("storage", onStorageChange);
        return () => {
            window.removeEventListener("storage", onStorageChange);
        };
    }, []);
    return (
        <Dashboard>
            <Container> bla </Container>
            <Container style={{ flex: 3 }}>
                <Editor gridData={gridsList[selectedGrid][1]} />
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
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 5rem 0;
`;

export default App;
