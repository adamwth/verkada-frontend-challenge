import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CameraIcon } from "../assets/icons/camera.svg";
import { ReactComponent as Arrow } from "../assets/icons/arrow-up.svg";
import { ReactComponent as Cross } from "../assets/icons/cross.svg";
import { Direction, Square, SquareType } from "../models/Grid";

interface Props extends Square {
    row: number;
    col: number;
    handleClick: (direction: Direction) => void;
}

export const GridSquare = ({
    type,
    covered,
    cameraDirection,
    row,
    col,
    handleClick,
}: Props) => {
    const [hover, setHover] = useState(false);
    return type === SquareType.Wall ? (
        <Wall />
    ) : (
        <Space
            multiplier={covered}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover && cameraDirection !== Direction.None && (
                <CancelButton>
                    <StyledCross onClick={() => handleClick(Direction.None)} />
                </CancelButton>
            )}
            <HRow>
                {(hover || cameraDirection === Direction.Up) && (
                    <ArrowUp
                        selected={cameraDirection === Direction.Up}
                        onClick={(e) => {
                            handleClick(Direction.Up);
                            e.stopPropagation();
                        }}
                    />
                )}
            </HRow>
            <HRow style={{ alignItems: "center" }}>
                <VCol>
                    {(hover || cameraDirection === Direction.Left) && (
                        <ArrowLeft
                            selected={cameraDirection === Direction.Left}
                            onClick={(e) => {
                                handleClick(Direction.Left);
                                e.stopPropagation();
                            }}
                        />
                    )}
                </VCol>
                <VCol>
                    {(cameraDirection || hover) && (
                        <StyledCameraIcon placing={hover} />
                    )}
                </VCol>
                <VCol>
                    {(hover || cameraDirection === Direction.Right) && (
                        <ArrowRight
                            selected={cameraDirection === Direction.Right}
                            onClick={(e) => {
                                handleClick(Direction.Right);
                                e.stopPropagation();
                            }}
                        />
                    )}
                </VCol>
            </HRow>
            <HRow style={{ alignItems: "end" }}>
                {(hover || cameraDirection === Direction.Down) && (
                    <ArrowDown
                        selected={cameraDirection === Direction.Down}
                        onClick={(e) => {
                            handleClick(Direction.Down);
                            e.stopPropagation();
                        }}
                    />
                )}
            </HRow>
        </Space>
    );
};

const Base = styled.div`
    width: 100%;
    aspect-ratio: 1;

    border: 1px solid #dddddd;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    padding: 0.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Wall = styled(Base)`
    background: #c4c4c4;
`;

const Space = styled(Base)<{ multiplier: number }>`
    background: ${(props) =>
        props.multiplier === 0
            ? "#fff"
            : `hsla(253, 100%, ${Math.max(
                  Math.min(90, 90 - (props.multiplier - 1) * 10),
                  50
              )}%, 1)`};
    &:hover {
        border-color: #000000;
        border-width: medium;
    }
`;

const StyledCameraIcon = styled(CameraIcon)<{ placing?: boolean }>`
    height: 100%;
    flex: 1;
    opacity: ${(props) => (props.placing ? 0.3 : 1)};
`;

const ArrowUp = styled(Arrow)<{ selected: boolean }>`
    height: 70%;
    fill: ${(props) => (props.selected ? "#000" : "transparent")};
    &:hover {
        fill: #000;
    }
    cursor: pointer;
`;

const ArrowRight = styled(ArrowUp)`
    transform: rotate(90deg);
`;

const ArrowDown = styled(ArrowUp)`
    transform: rotate(180deg);
`;

const ArrowLeft = styled(ArrowUp)`
    transform: rotate(270deg);
`;

const HRow = styled.div`
    display: flex;
    width: 100%;
    height: 33%;
    justify-content: center;
    align-items: start;
`;

const VCol = styled.div`
    display: flex;
    width: 33%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const StyledCross = styled(Cross)`
    width: 12px;
    cursor: pointer;
`;

const CancelButton = styled.button`
    position: absolute;
    top: 6px;
    right: 6px;
    padding: 2px;
    border: none;
    border-radius: 4px;
    background: transparent;

    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: #ff7878;
        * {
            fill: #fff;
        }
    }
`;
