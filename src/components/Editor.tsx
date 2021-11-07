import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField as MuiTextField } from "@mui/material";
import { Delete, SaveAlt } from "@mui/icons-material";
import { HRow } from "./common";
import { GridLayout } from "./GridLayout/GridLayout";
import { Data } from "../models/Grid";
import { saveGrid } from "../models/Storage";

interface Props {
    gridData: Data;
}

export const Editor = ({ gridData }: Props) => {
    const [grid, setGrid] = useState(gridData);
    return (
        <Container>
            <Toolbar>
                <TextField
                    label="Name"
                    size="small"
                    variant="standard"
                    defaultValue="Untitled"
                    value={grid.name}
                    onChange={(e) => setGrid({ ...grid, name: e.target.value })}
                />
                <ButtonsContainer>
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
                </ButtonsContainer>
            </Toolbar>
            <GridLayout gridData={grid} setGridData={setGrid} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Toolbar = styled(HRow)`
    gap: 2rem;
    justify-content: space-between;
`;

const ButtonsContainer = styled(HRow)`
    gap: 1rem;
    /* flex: 1; */
`;

const TextField = styled(MuiTextField)`
    /* flex: 4; */
`;
