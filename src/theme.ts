import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        // mode: "dark",
        primary: {
            light: '#81f8e8',
            main: '#49c5b6',
            dark: '#009486',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffffff',
            main: '#ffffff',
            dark: '#ffffff',
            contrastText: '#000',
        },
        // text: {
        //     primary: '#1e1e3d'
        // },
        action: {
            hover: 'rgba(255,0,0,0.1)',
            hoverOpacity: 0.04,
            selected: "blue",
            focus: "green"
        }
    },
    shape: {
        borderRadius: 8,
    }
})
