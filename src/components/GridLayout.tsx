import React from "react";
import styled from "styled-components";
import { Direction, Grid, SquareType } from "../models/Grid";
import { GridSquare } from "./GridSquare";

interface Props {
    grid: Grid;
}

export const GridLayout = ({ grid }: Props) => {
    return (
        <Container>
            {grid.floorplan.flatMap((row) =>
                row.map((val, index) => <GridSquare {...val} />)
            )}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
`;
