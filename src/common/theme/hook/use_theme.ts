import { useTheme as useMuiTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function useTheme() {
    const theme = useMuiTheme();
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    return {
        theme: theme.palette,
        scheme: isDarkMode ? 'dark' : 'light',
    };
}
