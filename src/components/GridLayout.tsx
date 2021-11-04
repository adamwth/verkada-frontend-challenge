import React from "react";
import styled from "styled-components";
import { Grid } from "../models/Grid";
import { GridSquare } from "./GridSquare";

interface Props {
    grid: Grid;
}

export const GridLayout = ({ grid }: Props) => {
    return (
        <Container>
            {grid.floorplan.flatMap((row) =>
                row.map((val) => <GridSquare type={val} />)
            )}
        </Container>
    );
};

const Container = styled.div`
    /* width: 100%; */
    /* height: 50vh; */
    display: grid;
    /* grid-template-columns: repeat(10, min-content); */
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
`;
