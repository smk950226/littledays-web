import Box from '@mui/material/Box';

import useTheme from '@/common/theme/hook/use_theme';

import type { MuiComponent } from '@/common/data/type/component';

type Props = MuiComponent & {
    url?: string;
    size?: number;
    width?: number;
    height?: number;
    fit?: 'contain' | 'cover';
};

export default function NetworkImage({
    sx,
    url,
    size,
    width,
    height,
    fit = 'cover',
}: Props) {
    const { theme } = useTheme();

    if (size && (width || height)) {
        throw new Error("size and width & height can't be provided together.");
    }

    if (!url) {
        return (
            <Box
                sx={{
                    backgroundColor: theme.form.placeholder,
                    width: size ?? width,
                    height: size ?? height,
                    ...sx,
                }}
            />
        );
    }
    return (
        <Box
            component={'img'}
            src={url}
            sx={{
                width: size ?? width,
                height: size ?? height,
                objectFit: fit,
                ...sx,
            }}
        />
    );
}
