import type { PaletteOptions } from '@mui/material/styles';

import Palette from './palette';

declare module '@mui/material/styles' {
    interface PaletteOptions {
        icon: TypeIcon;
    }
    interface Palette {
        icon: TypeIcon;
    }
    interface TypeBackground {
        default: string;
    }
    interface TypeText {
        default: string;
    }
    interface TypeIcon {
        default: string;
    }
}

export const light: PaletteOptions = {
    background: {
        default: Palette.white,
    },
    text: {
        default: Palette.black,
    },
    icon: {
        default: Palette.black,
    },
};

export const dark: PaletteOptions = {
    background: {
        default: Palette.white,
    },
    text: {
        default: Palette.black,
    },
    icon: {
        default: Palette.black,
    },
};
