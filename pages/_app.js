import "@/styles/globals.css";
import { CssBaseline, ThemeProvider, Container, Box } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { themeSettings } from "../theme";
import { useMemo } from "react";
import Navbar from "@/components/Navbar";

function conditionalWrapper(condition, Parent, parentProps, Children) {
    if (condition) {
        return <Parent {...parentProps}>{Children}</Parent>;
    }
    return Children;
}
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));
export default function App({ Component, pageProps }) {
    const theme = useMemo(() => createTheme(themeSettings("light")), ["light"]);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: "flex" }}>
                {!Component.hideNavbar && <Navbar />}

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Component {...pageProps} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}
