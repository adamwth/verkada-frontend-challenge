import styled from "styled-components";
import { Icons } from "../../assets/icons/Icons";
import { HRow, VCol } from "../common/styles";

export const Base = styled.div`
    width: 100%;
    aspect-ratio: 1;

    border: 1px solid #dddddd;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    padding: 0.25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Wall = styled(Base)`
    background: #c4c4c4;
`;

export const Space = styled(Base)<{ multiplier: number }>`
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

export const CameraIcon = styled(Icons.Camera)<{ placing: boolean }>`
    height: 100%;
    flex: 1;
    opacity: ${(props) => (props.placing ? 0.3 : 1)};
    cursor: grab;
`;

export const ArrowUp = styled(Icons.Arrow)<{ selected: boolean }>`
    height: 70%;
    fill: ${(props) => (props.selected ? "#000" : "transparent")};
    &:hover {
        fill: #000;
    }
    cursor: pointer;
`;

export const ArrowRight = styled(ArrowUp)`
    transform: rotate(90deg);
`;

export const ArrowDown = styled(ArrowUp)`
    transform: rotate(180deg);
`;

export const ArrowLeft = styled(ArrowUp)`
    transform: rotate(270deg);
`;

export const RowContainer = styled(HRow)`
    width: 100%;
    height: 33%;
    align-items: start;
`;

export const ColContainer = styled(VCol)`
    width: 33%;
    height: 100%;
`;

export const Cross = styled(Icons.Cross)`
    width: 10px;
    cursor: pointer;
`;

export const CancelButton = styled.button`
    position: absolute;
    top: 3px;
    right: 3px;
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
