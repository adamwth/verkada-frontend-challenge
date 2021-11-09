import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Editor } from "../components/Editor/Editor";
import { getSavedGrids } from "../models/Storage";
import * as S from "./App.styles";

function App() {
    const [grids, setGrids] = useState(getSavedGrids());
    const gridsList = Object.entries(grids).sort((a, b) => a[1].ts - b[1].ts);
    const [selectedGrid] = useState(0);
    useEffect(() => {
        const onStorageChange = () => {
            setGrids(getSavedGrids());
        };
        window.addEventListener("storage", onStorageChange);
        return () => {
            window.removeEventListener("storage", onStorageChange);
        };
    }, []);
    return (
        <ThemeProvider theme={S.theme}>
            <S.Dashboard>
                <S.Container>
                    <Editor gridStorage={gridsList[selectedGrid][1]} />
                </S.Container>
            </S.Dashboard>
        </ThemeProvider>
    );
}

export default App;
