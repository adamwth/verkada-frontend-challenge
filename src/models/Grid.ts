export interface Data {
    width: number;
    height: number;
    floorplan: string[][];
    id: string;
    name: string;
}

export interface Grid {
    width: number;
    height: number;
    floorplan: Square[][];
    id: string;
    name: string;
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
