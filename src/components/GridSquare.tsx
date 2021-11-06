import React from "react";
import styled from "styled-components";
import { ReactComponent as CameraIcon } from "../assets/icons/camera.svg";
import { Square, SquareType } from "../models/Grid";

type Props = Square;

export const GridSquare = ({ type, covered, cameraDirection }: Props) => {
    return type === SquareType.Wall ? (
        <Wall>{cameraDirection && <CameraIcon />}</Wall>
    ) : (
        <Space multiplier={covered}>{cameraDirection && <CameraIcon />}</Space>
    );
};

const Base = styled.div`
    width: 100%;
    aspect-ratio: 1;

    border: 1px solid #dddddd;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
`;
