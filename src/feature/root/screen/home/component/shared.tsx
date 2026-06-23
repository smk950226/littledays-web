import Box, { type BoxProps } from '@mui/material/Box';
import { C, font } from '../constants';

type TextProps = { children: React.ReactNode; light?: boolean; sx?: BoxProps['sx'] };

export function Eyebrow({ children, sx: sxProp }: TextProps) {
    return (
        <Box
            component="p"
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: '#76D1FF',
                mb: '12px',
                ...sxProp,
            }}
        >
            {children}
        </Box>
    );
}

export function SecTitle({ children, light = false, sx }: TextProps) {
    return (
        <Box
            component="h2"
            sx={{
                fontSize: 'clamp(24px, 3.5vw, 38px)',
                fontWeight: 700,
                lineHeight: 1.22,
                letterSpacing: '-.3px',
                color: light ? '#FFF' : C.text,
                mb: '12px',
                fontFamily: font,
                ...sx,
            }}
        >
            {children}
        </Box>
    );
}

export function SecDesc({ children, light = false, sx }: TextProps) {
    return (
        <Box
            component="p"
            sx={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.75,
                letterSpacing: '.08px',
                color: light ? 'rgba(255,255,255,.5)' : C.textSec,
                maxWidth: '480px',
                ...sx,
            }}
        >
            {children}
        </Box>
    );
}
