import type { TextStyle } from './data/type/text_style';

export const fontFamily = [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',');

export default abstract class Typography {
    static headline1: TextStyle = {
        fontFamily,
        fontSize: 26,
        fontWeight: '600',
        lineHeight: 34 / 26,
        letterSpacing: 1.01,
    };

    static headline2: TextStyle = {
        fontFamily,
        fontSize: 22,
        fontWeight: '600',
        lineHeight: 30 / 22,
        letterSpacing: 1.01,
    };

    static subtitle1: TextStyle = {
        fontFamily,
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 24 / 18,
        letterSpacing: 1.01,
    };

    static subtitle2: TextStyle = {
        fontFamily,
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 22 / 16,
        letterSpacing: 1.005,
    };

    static subtitle3: TextStyle = {
        fontFamily,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20 / 14,
        letterSpacing: 1.005,
    };

    static body1: TextStyle = {
        fontFamily,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22 / 16,
        letterSpacing: 1.005,
    };

    static body2: TextStyle = {
        fontFamily,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 18 / 14,
        letterSpacing: 1.002,
    };

    static body3: TextStyle = {
        fontFamily,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16 / 12,
        letterSpacing: 1.0015,
    };

    static caption1: TextStyle = {
        fontFamily,
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16 / 12,
        letterSpacing: 1.0015,
    };

    static caption2: TextStyle = {
        fontFamily,
        fontSize: 10,
        fontWeight: '500',
        lineHeight: 15 / 10,
        letterSpacing: 0.997,
    };

    static caption3: TextStyle = {
        fontFamily,
        fontSize: 8,
        fontWeight: '500',
        lineHeight: 11 / 8,
        letterSpacing: 0.997,
    };

    static button1: TextStyle = {
        fontFamily,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 18 / 14,
        letterSpacing: 1.01,
    };

    static button2: TextStyle = {
        fontFamily,
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 16 / 12,
        letterSpacing: 1.005,
    };

    static button3: TextStyle = {
        fontFamily,
        fontSize: 10,
        fontWeight: '600',
        lineHeight: 15 / 10,
        letterSpacing: 1.9975,
    };
}
