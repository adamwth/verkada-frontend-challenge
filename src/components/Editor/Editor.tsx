import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Delete, SaveAlt } from "@mui/icons-material";
import { GridLayout } from "../GridLayout/GridLayout";
import { Data } from "../../models/Grid";
import { saveGrid } from "../../models/Storage";
import * as S from "./Editor.styles";

interface Props {
    gridData: Data;
}

export const Editor = ({ gridData }: Props) => {
    const [grid, setGrid] = useState(gridData);
    return (
        <S.Container>
            <S.Toolbar>
                <TextField
                    label="Name"
                    size="small"
                    variant="standard"
                    defaultValue="Untitled"
                    value={grid.name}
                    onChange={(e) => setGrid({ ...grid, name: e.target.value })}
                />
                <S.ButtonsContainer>
                    <Button
                        variant="outlined"
                        startIcon={<SaveAlt />}
                        onClick={() => saveGrid(grid)}
                    >
                        Save
                    </Button>
                    <Button variant="outlined" startIcon={<Delete />}>
                        Delete
                    </Button>
                </S.ButtonsContainer>
            </S.Toolbar>
            <GridLayout gridData={grid} setGridData={setGrid} />
        </S.Container>
    );
};
