import React from "react";
import { Floorplan } from "../../models/Grid";
import { GridSquare } from "../GridSquare/GridSquare";
import { processCameras, processFloorplan } from "./GridLayout.logic";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import * as S from "./GridLayout.styles";
import { useGrids } from "../../context/GridsContext";

interface Props {
    id: string;
    floorplan: Floorplan;
}

export const GridLayout = ({ id, floorplan }: Props) => {
    const { clickCamera, dragCamera } = useGrids();
    const processedFloorplan = processCameras(processFloorplan(floorplan));
    return (
        <S.Container>
            <DndProvider backend={HTML5Backend}>
                {processedFloorplan.flatMap((row, rowIdx) =>
                    row.map((val, colIdx) => (
                        <GridSquare
                            key={[rowIdx, colIdx].join(",")}
                            {...val}
                            row={rowIdx}
                            col={colIdx}
                            handleClick={(direction) =>
                                clickCamera(
                                    id,
                                    { row: rowIdx, col: colIdx },
                                    direction
                                )
                            }
                            handleDrag={(from, to) => dragCamera(id, from, to)}
                        />
                    ))
                )}
            </DndProvider>
        </S.Container>
    );
};
