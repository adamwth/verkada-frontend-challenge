import { Data } from "./Grid";
import { v4 as uuidv4 } from "uuid";

const SAVED_GRIDS_KEY = "grids";

const floorplan = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, "v", 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, "v", 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, ">", 0, 0, 0, "<", 1],
    [1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, "<", 1, 0, 1],
    [1, 1, 0, 0, 0, 0, "<", 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export const data = {
    width: 10,
    height: 10,
    floorplan: floorplan.map((row) => row.map((val) => val.toString())),
};

export interface GridStorage extends Data {
    ts: number;
}

const defaultGrid = (ts: number): Record<string, GridStorage> => ({
    default: {
        ts,
        id: "default",
        name: "Untitled",
        ...data,
    },
});

export const loadDefaultGrid = () => {
    const val = localStorage.getItem(SAVED_GRIDS_KEY);
    if (val !== null) {
        return;
    }
    localStorage.setItem(
        SAVED_GRIDS_KEY,
        JSON.stringify(defaultGrid(Date.now()))
    );
};

export const getSavedGrids = (): Record<string, GridStorage> => {
    loadDefaultGrid();
    const val =
        localStorage.getItem(SAVED_GRIDS_KEY) ||
        JSON.stringify(defaultGrid(Date.now()));
    return JSON.parse(val);
};

export const saveGrid = (grid: Data) => {
    console.log(grid);
    const val = localStorage.getItem(SAVED_GRIDS_KEY) || JSON.stringify({});
    const grids = JSON.parse(val);
    const ts = Date.now();
    localStorage.setItem(
        SAVED_GRIDS_KEY,
        JSON.stringify({
            ...grids,
            [grid.id]: {
                ts,
                ...grid,
            },
        })
    );
};
