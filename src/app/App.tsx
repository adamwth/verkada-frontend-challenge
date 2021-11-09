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
                <S.Container style={{ flex: 1 }}>
                    <S.Header>Verkada Frontend Tech Challenge</S.Header>
                    <h3>Adam Chew</h3>
                    <S.Anchor href="mailto:yc875@cornell.edu">
                        ✉️ yc875@cornell.edu
                    </S.Anchor>
                    <S.Anchor href="https://adamchew.dev">
                        👋 adamchew.dev
                    </S.Anchor>
                    <S.Anchor href="https://www.linkedin.com/in/adamchew95/">
                        🤝 LinkedIn
                    </S.Anchor>
                    <S.Anchor href="https://github.com/adamwth">
                        🧑🏻‍💻 Github
                    </S.Anchor>
                </S.Container>
                <S.Container style={{ flex: 2 }}>
                    <Editor grid={gridsList[selectedGridIndex][1]} />
                </S.Container>
            </S.Dashboard>
        </ThemeProvider>
    );
}

export default App;
