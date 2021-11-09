import React, { useEffect, useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import { SaveAlt } from "@mui/icons-material";
import { GridLayout } from "../GridLayout/GridLayout";
import { saveGrid } from "../../models/Storage";
import * as S from "./Editor.styles";
import { Grid } from "../../models/Grid";
import { useGrids } from "../../context/GridsContext";

interface Props {
    grid: Grid;
}

export const Editor = ({ grid }: Props) => {
    const [gridUpdate, setGridUpdate] = useState(false);
    const { updateGrid } = useGrids();
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setGridUpdate(true);
    }, [grid]);
    return (
        <S.Container>
            <S.Toolbar>
                <TextField
                    label="Name"
                    size="small"
                    variant="standard"
                    value={grid.name}
                    onChange={(e) =>
                        updateGrid(grid.id, {
                            ...grid,
                            name: e.target.value,
                        })
                    }
                    style={{ flex: 2 }}
                />
                <S.GroupContainer>
                    <Button
                        variant="outlined"
                        color={gridUpdate ? "secondary" : "primary"}
                        startIcon={<SaveAlt />}
                        onClick={() => {
                            saveGrid(grid);
                            setGridUpdate(false);
                        }}
                    >
                        Save
                    </Button>
                </S.GroupContainer>
            </S.Toolbar>
            <GridLayout id={grid.id} floorplan={grid.floorplan} />
        </S.Container>
    );
};
