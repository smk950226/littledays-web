import { alpha } from '@mui/material/styles';
import type { BoxProps } from '@mui/material/Box';

export const font = "'Pretendard Variable','Pretendard',-apple-system,sans-serif";

export const C = {
    primary: '#76D1FF',
    primaryDark: '#3EB8F5',
    primaryDarker: '#0096D6',
    text: '#111111',
    textSec: '#555555',
    textMuted: '#888888',
    textBrand: '#0070A8',
    bg: '#FFFFFF',
    bgSub: '#F5FBFF',
    bgTint: '#EBF8FF',
    bgDark: '#0D1117',
    bgDark2: '#161D26',
    border: 'rgba(118,209,255,.20)',
    borderStrong: 'rgba(118,209,255,.40)',
    borderNeutral: 'rgba(17,17,17,.08)',
} as const;

export const btnPrimary: BoxProps['sx'] = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: C.primary,
    color: C.text,
    px: '28px',
    py: '13px',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '.14px',
    textDecoration: 'none',
    boxShadow: `0 4px 20px ${alpha(C.primary, 0.35)}`,
    cursor: 'pointer',
    border: 'none',
    fontFamily: font,
    transition: 'background .15s, transform .15s, box-shadow .15s',
    '&:hover': {
        background: C.primaryDark,
        transform: 'translateY(-2px)',
        boxShadow: `0 8px 28px ${alpha(C.primary, 0.4)}`,
    },
};

export const btnSecondary: BoxProps['sx'] = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'transparent',
    color: C.textSec,
    px: '28px',
    py: '13px',
    borderRadius: '10px',
    border: `1px solid ${C.borderNeutral}`,
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '.14px',
    textDecoration: 'none',
    cursor: 'pointer',
    fontFamily: font,
    transition: 'border-color .15s, color .15s, transform .15s',
    '&:hover': {
        borderColor: C.primary,
        color: C.textBrand,
        transform: 'translateY(-2px)',
    },
};

export const btnDark: BoxProps['sx'] = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    background: C.text,
    color: '#FFF',
    px: '30px',
    py: '14px',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '.14px',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    fontFamily: font,
    boxShadow: `0 4px 20px ${alpha(C.text, 0.2)}`,
    transition: 'background .15s, transform .15s, box-shadow .15s',
    '&:hover': {
        background: '#222',
        transform: 'translateY(-2px)',
        boxShadow: `0 8px 28px ${alpha(C.text, 0.28)}`,
    },
};
