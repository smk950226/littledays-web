import type { Theme, Components } from '@mui/material/styles';

const MuiSvgIcon: Components<Theme>['MuiSvgIcon'] = {
    styleOverrides: {
        root: () => ({
            fill: 'none',
        }),
    },
};

export default MuiSvgIcon;
