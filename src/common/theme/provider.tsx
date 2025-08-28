import {
    extendTheme,
    ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Sizing from './sizing';
import { dark, light } from './theme';
import MuiTypography from './component/typography';
import MuiSvgIcon from './component/svg_icon';

import type { Children } from '../data/type/component';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

export default function ThemeProvider({ children }: Children) {
    const theme = extendTheme({
        spacing: (value: number) => `${value}px`,
        colorSchemes: {
            light: {
                palette: light,
            },
            dark: {
                palette: dark,
            },
        },
        components: {
            MuiSvgIcon,
            MuiTypography,
        },
        breakpoints: {
            values: {
                mobile: Sizing.layout.screen.mobile,
                tablet: Sizing.layout.screen.tablet,
                laptop: Sizing.layout.screen.laptop,
                desktop: Sizing.layout.screen.desktop,
            },
        },
    });

    return (
        <>
            <CssBaseline />
            <MuiThemeProvider theme={theme} defaultMode={'system'}>
                {children}
            </MuiThemeProvider>
        </>
    );
}
