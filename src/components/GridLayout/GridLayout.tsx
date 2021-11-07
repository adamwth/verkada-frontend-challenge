import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Direction } from "../../models/Grid";
import { GridSquare } from "../GridSquare";
import { data, processCameras, processFloorplan } from "./GridLayout.logic";

export const GridLayout = () => {
    const [grid, setGrid] = useState(data);
    const floorplan = processCameras(processFloorplan(grid.floorplan));
    const handleClick =
        (row: number, col: number) => (direction: Direction) => {
            setGrid({
                ...grid,
                floorplan: grid.floorplan.map((r, rowIdx) =>
                    r.map((val, colIdx) => {
                        if (rowIdx !== row || colIdx !== col) return val;
                        return direction;
                    })
                ),
            });
        };
    return (
        <Container>
            {floorplan.flatMap((row, rowIdx) =>
                row.map((val, colIdx) => (
                    <GridSquare
                        {...val}
                        row={rowIdx}
                        col={colIdx}
                        handleClick={handleClick(rowIdx, colIdx)}
                    />
                ))
            )}
        </Container>
    );
};

const unselect = [-1, -1];

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
`;
