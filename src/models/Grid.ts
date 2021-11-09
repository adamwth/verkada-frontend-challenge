export interface Data {
    width: number;
    height: number;
    floorplan: string[][];
    id: string;
    name: string;
}

export interface Grid extends Omit<Data, "floorplan"> {
    floorplan: Square[][];
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
