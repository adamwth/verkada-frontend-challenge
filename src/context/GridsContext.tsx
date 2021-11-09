import { createContext, useContext, useEffect, useState } from "react";
import { Direction, Grid, Position } from "../models/Grid";
import { getSavedGrids, loadDefaultGrid } from "../models/Storage";

loadDefaultGrid();
const defaultGrids = getSavedGrids();

interface IGridContext {
    grids: Record<string, Grid>;
    updateGrid: (id: string, grid: Grid) => void;
    clickCamera: (id: string, position: Position, direction: Direction) => void;
    dragCamera: (id: string, from: Position, to: Position) => void;
}

export const GridsContext = createContext<IGridContext>({
    grids: defaultGrids,
    updateGrid: () => undefined,
    clickCamera: () => undefined,
    dragCamera: () => undefined,
});

export const GridsProvider: React.FC = (props) => {
    const [grids, setGrids] = useState<Record<string, Grid>>(defaultGrids);
    const updateGrid = (id: string, grid: Grid) => {
        setGrids((prev) => {
            return {
                ...prev,
                [id]: grid,
            };
        });
    };
    const clickCamera = (
        id: string,
        position: Position,
        direction: Direction
    ) => {
        setGrids((prev) => {
            return {
                ...prev,
                [id]: {
                    ...prev[id],
                    floorplan: prev[id].floorplan.map((r, rowIdx) =>
                        r.map((val, colIdx) => {
                            if (
                                rowIdx !== position.row ||
                                colIdx !== position.col
                            )
                                return val;
                            return direction;
                        })
                    ),
                },
            };
        });
    };
    const dragCamera = (id: string, from: Position, to: Position) => {
        setGrids((prev) => {
            return {
                ...prev,
                [id]: {
                    ...prev[id],
                    floorplan: prev[id].floorplan.map((r, rowIdx) =>
                        r.map((val, colIdx) => {
                            if (rowIdx === from.row && colIdx === from.col) {
                                return "0";
                            } else if (rowIdx === to.row && colIdx === to.col) {
                                return prev[id].floorplan[from.row][from.col];
                            }
                            return val;
                        })
                    ),
                },
            };
        });
    };
    useEffect(() => {
        const onStorageChange = () => {
            loadDefaultGrid();
            setGrids(getSavedGrids());
        };
        window.addEventListener("storage", onStorageChange);
        return () => {
            window.removeEventListener("storage", onStorageChange);
        };
    }, []);

    return (
        <GridsContext.Provider
            value={{ grids, updateGrid, clickCamera, dragCamera }}
        >
            {props.children}
        </GridsContext.Provider>
    );
};

export const useGrids = () => {
    return useContext(GridsContext);
};
