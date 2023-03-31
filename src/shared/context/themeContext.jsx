import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MainTheme } from "../themes";
import { Box, ThemeProvider } from '@mui/material';


const ThemeContext = createContext({
} );

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider = ({ children }) => {
    const [userThemeActual, setUserThemeActual] = useState("main");

    const [themeName, setThemeName] = useState(userThemeActual || 'main');

    const theme = useMemo(() => {

        return MainTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{themeName}}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}      
                </Box>
                
            </ThemeProvider>
            
        </ThemeContext.Provider>
    );
}