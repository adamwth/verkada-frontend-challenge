import { createTheme } from "@mui/material/styles";
import styled from "styled-components";

export const Dashboard = styled.div`
    padding: 0 30vw;
    display: flex;
    gap: 2rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 5rem 0;
    box-sizing: border-box;
`;

export const theme = createTheme({
    typography: {
        fontFamily: "Jost",
    },
    palette: {
        secondary: {
            main: "rgb(246, 156, 21)",
        },
    },
});
