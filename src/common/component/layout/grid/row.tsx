import { forwardRef } from 'react';

import Box, { type BoxProps } from '@mui/material/Box';

const Row = forwardRef<HTMLDivElement, BoxProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Box
                ref={ref}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    ...sx,
                }}
                {...props}
            >
                {children}
            </Box>
        );
    },
);
Row.displayName = 'Row';

export default Row;
