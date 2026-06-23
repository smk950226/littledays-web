import type { ReactNode } from 'react';

import type { SxProps, Theme } from '@mui/material/styles';

export type Children = {
    children?: ReactNode;
};

export type MuiComponent = {
    sx?: SxProps<Theme>;
};
