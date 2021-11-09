export interface Grid {
    width: number;
    height: number;
    floorplan: Floorplan;
    id: string;
    name: string;
    ts: number;
}

export type Floorplan = string[][];
export type ProcessedFloorplan = Square[][];

export interface ProcessedGrid extends Omit<Grid, "floorplan"> {
    floorplan: ProcessedFloorplan;
}

export interface Square {
    type: SquareType;
    covered: number;
    cameraDirection: Direction;
}

export enum SquareType {
    Space = "0",
    Wall = "1",
}

export enum Direction {
    Up = "^",
    Right = ">",
    Down = "v",
    Left = "<",
    None = "0",
}

export type Position = {
    row: number;
    col: number;
};
