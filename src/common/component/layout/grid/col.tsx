import { forwardRef } from 'react';

import Box, { type BoxProps } from '@mui/material/Box';

const Col = forwardRef<HTMLDivElement, BoxProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Box
                ref={ref}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    ...sx,
                }}
                {...props}
            >
                {children}
            </Box>
        );
    },
);
Col.displayName = 'Col';

export default Col;
