import { useMemo } from 'react';
import { alpha } from '@mui/material/styles';
import Button, { type ButtonProps } from '@mui/material/Button';

import useTheme from '@/common/theme/hook/use_theme';
import Button1 from '../../layout/typography/button1';

type Props = ButtonProps & {
    text: string;
};

type Color = {
    background: string;
    text: string;
};

export default function SubmitButton({
    sx,
    type = 'button',
    text,
    disabled = false,
    ...props
}: Props) {
    const { theme } = useTheme();

    const color = useMemo<Color>(() => {
        if (disabled) {
            return {
                background: theme.button.background.disabled,
                text: theme.button.text.disabled,
            };
        }
        return {
            background: theme.button.background.default,
            text: theme.button.text.default,
        };
    }, [disabled, theme]);

    return (
        <Button
            {...props}
            type={type}
            disabled={disabled}
            sx={{
                bgcolor: color.background,
                borderRadius: '9999px',
                '&:hover': {
                    bgcolor: alpha(color.background, 0.9),
                },
                py: 18,
                ...sx,
            }}
        >
            <Button1 color={color.text} textAlign={'center'}>
                {text}
            </Button1>
        </Button>
    );
}
