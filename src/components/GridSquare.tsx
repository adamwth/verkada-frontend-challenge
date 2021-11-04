import React from "react";
import styled from "styled-components";

interface Props {
    type: number;
}

export const GridSquare = ({ type }: Props) => {
    switch (type) {
        case 0:
            return <Space />;
        case 1:
            return <Wall />;
        default:
            return <Square />;
    }
};

const Square = styled.div`
    width: 100%;
    aspect-ratio: 1;

    border: 1px solid #dddddd;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
`;

const Wall = styled(Square)`
    background: #c4c4c4;
`;

const Space = styled(Square)`
    background: ##fdff83;
`;
