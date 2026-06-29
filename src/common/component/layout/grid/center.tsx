import { forwardRef } from 'react';

import Box, { type BoxProps } from '@mui/material/Box';

const Center = forwardRef<HTMLDivElement, BoxProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <Box
                ref={ref}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...sx,
                }}
                {...props}
            >
                {children}
            </Box>
        );
    },
);
Center.displayName = 'Center';

export default Center;
