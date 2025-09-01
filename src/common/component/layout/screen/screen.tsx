import { forwardRef } from 'react';
import Box, { type BoxProps } from '@mui/material/Box';

import Sizing from '@/common/theme/sizing';

const Screen = forwardRef<HTMLDivElement, BoxProps>(
    ({ sx, children, ...props }, ref) => {
        return (
            <Box
                ref={ref}
                sx={{
                    py: Sizing.padding.vertical,
                    px: Sizing.padding.horizontal,
                    ...sx,
                }}
                {...props}
            >
                {children}
            </Box>
        );
    },
);
Screen.displayName = 'Screen';

export default Screen;
