import { forwardRef } from 'react';

import Box, { type BoxProps } from '@mui/material/Box';

const Col = forwardRef<HTMLDivElement, BoxProps>(
    ({ children, ...props }, ref) => {
        return (
            <Box ref={ref} display={'flex'} flexDirection={'column'} {...props}>
                {children}
            </Box>
        );
    },
);
Col.displayName = 'Col';

export default Col;
