import React from "react";
import styled from "styled-components";
import { Data, Direction } from "../../models/Grid";
import { GridSquare } from "../GridSquare";
import { processCameras, processFloorplan } from "./GridLayout.logic";

interface Props {
    gridData: Data;
    setGridData: (data: Data) => void;
}

export const GridLayout = ({ gridData, setGridData }: Props) => {
    const floorplan = processCameras(processFloorplan(gridData.floorplan));
    const handleClick =
        (row: number, col: number) => (direction: Direction) => {
            setGridData({
                ...gridData,
                floorplan: gridData.floorplan.map((r, rowIdx) =>
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

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
`;
