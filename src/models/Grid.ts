export interface Grid {
    floorplan: number[][];
}

export enum SquareType {
    space = 0,
    wall = 1,
    camera = 2,
}
