import { Direction, Square, SquareType } from "../../models/Grid";

export const processFloorplan = (floorplan: string[][]) => {
    return floorplan.map((row) =>
        row.map((val) => {
            const type = val === "1" ? SquareType.Wall : SquareType.Space;
            let cameraDirection;
            switch (val) {
                case "^":
                    cameraDirection = Direction.Up;
                    break;
                case ">":
                    cameraDirection = Direction.Right;
                    break;
                case "v":
                    cameraDirection = Direction.Down;
                    break;
                case "<":
                    cameraDirection = Direction.Left;
                    break;
                default:
                    cameraDirection = Direction.None;
            }
            return {
                type,
                covered: 0,
                cameraDirection,
            };
        })
    );
};

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
