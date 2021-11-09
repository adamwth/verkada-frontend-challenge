import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Editor } from "../components/Editor/Editor";
import { useGrids } from "../context/GridsContext";
import * as S from "./App.styles";

function App() {
    const { grids } = useGrids();
    const gridsList = Object.entries(grids).sort((a, b) => b[1].ts - a[1].ts);
    const [selectedGridIndex] = useState(0);
    return (
        <ThemeProvider theme={S.theme}>
            <S.Dashboard>
                <S.Container>
                    <Editor grid={gridsList[selectedGridIndex][1]} />
                </S.Container>
            </S.Dashboard>
        </ThemeProvider>
    );
}

export default App;
