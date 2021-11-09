import React, { useState } from "react";
import { Direction, Position, Square, SquareType } from "../../models/Grid";
import { useDrag, useDrop } from "react-dnd";
import * as S from "./GridSquare.styles";

interface Props extends Square {
    row: number;
    col: number;
    handleClick: (direction: Direction) => void;
    handleDrag: (from: Position, to: Position) => void;
}

export const GridSquare = ({
    type,
    covered,
    cameraDirection,
    row,
    col,
    handleClick,
    handleDrag,
}: Props) => {
    const [hover, setHover] = useState(false);
    const [{ isDragging, canDrag }, dragRef] = useDrag(() => ({
        type: "camera",
        item: { row, col },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            canDrag: monitor.canDrag(),
        }),
    }));
    const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
        accept: "camera",
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        drop: (item: Position) => {
            handleDrag(item, { row, col });
        },
    }));
    return type === SquareType.Wall ? (
        <S.Wall />
    ) : (
        <S.Space
            multiplier={covered}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            ref={dropRef}
        >
            {hover && cameraDirection !== Direction.None && (
                <S.CancelButton>
                    <S.Cross onClick={() => handleClick(Direction.None)} />
                </S.CancelButton>
            )}
            <S.RowContainer>
                {(hover || cameraDirection === Direction.Up) && (
                    <S.ArrowUp
                        selected={cameraDirection === Direction.Up}
                        onClick={(e) => {
                            handleClick(Direction.Up);
                            e.stopPropagation();
                        }}
                    />
                )}
            </S.RowContainer>
            <S.RowContainer style={{ alignItems: "center" }}>
                <S.ColContainer>
                    {(hover || cameraDirection === Direction.Left) && (
                        <S.ArrowLeft
                            selected={cameraDirection === Direction.Left}
                            onClick={(e) => {
                                handleClick(Direction.Left);
                                e.stopPropagation();
                            }}
                        />
                    )}
                </S.ColContainer>
                <S.ColContainer ref={dragRef}>
                    {(cameraDirection !== Direction.None || hover) && (
                        <S.CameraIcon placing={hover} />
                    )}
                </S.ColContainer>
                <S.ColContainer>
                    {(hover || cameraDirection === Direction.Right) && (
                        <S.ArrowRight
                            selected={cameraDirection === Direction.Right}
                            onClick={(e) => {
                                handleClick(Direction.Right);
                                e.stopPropagation();
                            }}
                        />
                    )}
                </S.ColContainer>
            </S.RowContainer>
            <S.RowContainer style={{ alignItems: "end" }}>
                {(hover || cameraDirection === Direction.Down) && (
                    <S.ArrowDown
                        selected={cameraDirection === Direction.Down}
                        onClick={(e) => {
                            handleClick(Direction.Down);
                            e.stopPropagation();
                        }}
                    />
                )}
            </S.RowContainer>
        </S.Space>
    );
};
