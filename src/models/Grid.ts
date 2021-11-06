export interface Grid {
    width: number;
    height: number;
    floorplan: Square[][];
}

export interface Square {
    type: SquareType;
    covered: number;
    cameraDirection?: Direction;
}

export enum SquareType {
    Space = 0,
    Wall = 1,
}

export enum Direction {
    Up,
    Right,
    Down,
    Left,
}

export const processCameras = (floorplan: Square[][]) => {
    const rows = floorplan.length;
    const cols = floorplan[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const { cameraDirection } = floorplan[r][c];
            let dir: number[];
            switch (cameraDirection) {
                case Direction.Up:
                    dir = [-1, 0];
                    break;
                case Direction.Right:
                    dir = [0, 1];
                    break;
                case Direction.Down:
                    dir = [1, 0];
                    break;
                case Direction.Left:
                    dir = [0, -1];
                    break;
                default:
                    continue;
            }

            let i = r;
            let j = c;
            while (i >= 0 && i < rows && j >= 0 && j < cols) {
                if (floorplan[i][j].type === SquareType.Wall) break;
                floorplan[i][j].covered += 1;
                i += dir[0];
                j += dir[1];
            }
        }
    }

    return floorplan;
};
