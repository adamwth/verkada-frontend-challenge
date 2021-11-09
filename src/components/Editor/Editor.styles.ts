import styled from "styled-components";
import { HRow, VCol } from "../common/styles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Toolbar = styled(HRow)`
    gap: 2rem;
    justify-content: space-between;
`;

export const GroupContainer = styled(HRow)`
    gap: 1rem;
`;

export const Label = styled(VCol)`
    align-items: flex-start;
`;
