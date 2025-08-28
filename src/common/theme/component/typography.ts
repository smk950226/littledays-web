import type { Theme, Components } from '@mui/material/styles';

const MuiTypography: Components<Theme>['MuiTypography'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.palette.text.default,
        }),
    },
};

export default MuiTypography;
