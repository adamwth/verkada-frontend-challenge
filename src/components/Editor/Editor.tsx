import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Delete, SaveAlt } from "@mui/icons-material";
import { GridLayout } from "../GridLayout/GridLayout";
import { GridStorage, saveGrid } from "../../models/Storage";
import * as S from "./Editor.styles";
import { Data } from "../../models/Grid";

interface Props {
    gridStorage: GridStorage;
}

export const Editor = ({ gridStorage }: Props) => {
    const [grid, setGrid] = useState<Data>(gridStorage);
    const date = new Date(gridStorage.ts);
    return (
        <S.Container>
            <S.Toolbar>
                <S.GroupContainer>
                    <TextField
                        label="Name"
                        size="small"
                        variant="standard"
                        defaultValue="Untitled"
                        value={grid.name}
                        onChange={(e) =>
                            setGrid({ ...grid, name: e.target.value })
                        }
                    />
                    <S.Label>
                        Last updated:
                        <span>
                            {date.toDateString() +
                                " " +
                                date.toLocaleTimeString()}
                        </span>
                    </S.Label>
                </S.GroupContainer>
                <S.GroupContainer>
                    <Button
                        variant="outlined"
                        startIcon={<SaveAlt />}
                        onClick={() => saveGrid(grid)}
                    >
                        Save
                    </Button>
                </S.GroupContainer>
            </S.Toolbar>
            <GridLayout gridData={grid} setGridData={setGrid} />
        </S.Container>
    );
};
