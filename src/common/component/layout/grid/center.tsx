import { forwardRef } from 'react';

import Box, { type BoxProps } from '@mui/material/Box';

const Center = forwardRef<HTMLDivElement, BoxProps>(
    ({ children, ...props }, ref) => {
        return (
            <Box
                ref={ref}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                {...props}
            >
                {children}
            </Box>
        );
    },
);
Center.displayName = 'Center';

export default Center;
