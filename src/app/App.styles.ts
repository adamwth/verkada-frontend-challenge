import { createTheme } from "@mui/material/styles";
import styled from "styled-components";

export const Dashboard = styled.div`
    padding: 0 22vw;
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

export const Header = styled.h1`
    margin-top: 0;
`;

export const Anchor = styled.a`
    color: #0969da;
    text-decoration: none;
`;

export const Instructions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
