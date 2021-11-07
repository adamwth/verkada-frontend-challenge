import React from "react";
import styled from "styled-components";
import { Data, Direction, Position } from "../../models/Grid";
import { GridSquare } from "../GridSquare";
import { processCameras, processFloorplan } from "./GridLayout.logic";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

interface Props {
    gridData: Data;
    setGridData: React.Dispatch<React.SetStateAction<Data>>;
}

export const GridLayout = ({ gridData, setGridData }: Props) => {
    const floorplan = processCameras(processFloorplan(gridData.floorplan));
    // console.log(gridData);
    const handleClick =
        (row: number, col: number) => (direction: Direction) => {
            setGridData((gridData) => ({
                ...gridData,
                floorplan: gridData.floorplan.map((r, rowIdx) =>
                    r.map((val, colIdx) => {
                        if (rowIdx !== row || colIdx !== col) return val;
                        return direction;
                    })
                ),
            }));
        };
    const handleDrag = (from: Position, to: Position) => {
        setGridData((gridData) => {
            const cameraDirection = gridData.floorplan[from.row][from.col];
            return {
                ...gridData,
                floorplan: gridData.floorplan.map((r, rowIdx) =>
                    r.map((val, colIdx) => {
                        if (rowIdx === from.row && colIdx === from.col) {
                            return "0";
                        } else if (rowIdx === to.row && colIdx === to.col) {
                            return cameraDirection;
                        }
                        return val;
                    })
                ),
            };
        });
    };
    return (
        <Container>
            <DndProvider backend={HTML5Backend}>
                {floorplan.flatMap((row, rowIdx) =>
                    row.map((val, colIdx) => (
                        <GridSquare
                            {...val}
                            row={rowIdx}
                            col={colIdx}
                            handleClick={handleClick(rowIdx, colIdx)}
                            handleDrag={handleDrag}
                        />
                    ))
                )}
            </DndProvider>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
`;
