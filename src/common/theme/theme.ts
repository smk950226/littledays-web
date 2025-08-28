import type { PaletteOptions } from '@mui/material/styles';

import Palette from './palette';

declare module '@mui/material/styles' {
    interface PaletteOptions {
        icon: TypeIcon;
        button: TypeButton;
    }
    interface Palette {
        icon: TypeIcon;
        button: TypeButton;
    }
    interface TypeBackground {
        default: string;
    }
    interface TypeText {
        default: string;
        description: string;
        caption: string;
    }
    interface TypeIcon {
        default: string;
        caption: string;
    }
    interface TypeButton {
        background: {
            default: string;
            disabled: string;
        };
        text: {
            default: string;
            disabled: string;
        };
    }
}

export const light: PaletteOptions = {
    background: {
        default: Palette.white,
    },
    text: {
        default: Palette.black,
        description: Palette.gray4,
        caption: Palette.gray3,
    },
    icon: {
        default: Palette.black,
        caption: Palette.gray3,
    },
    button: {
        background: {
            default: Palette.primary,
            disabled: Palette.gray2,
        },
        text: {
            default: Palette.black,
            disabled: Palette.black,
        },
    },
};

export const dark: PaletteOptions = {
    background: {
        default: Palette.white,
    },
    text: {
        default: Palette.black,
        description: Palette.gray4,
        caption: Palette.gray3,
    },
    icon: {
        default: Palette.black,
        caption: Palette.gray3,
    },
    button: {
        background: {
            default: Palette.primary,
            disabled: Palette.gray2,
        },
        text: {
            default: Palette.black,
            disabled: Palette.black,
        },
    },
};
