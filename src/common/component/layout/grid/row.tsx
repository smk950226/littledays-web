import { forwardRef } from 'react';

import Box, { type BoxProps } from '@mui/material/Box';

const Row = forwardRef<HTMLDivElement, BoxProps>(
    ({ children, ...props }, ref) => {
        return (
            <Box ref={ref} display={'flex'} flexDirection={'row'} {...props}>
                {children}
            </Box>
        );
    },
);
Row.displayName = 'Row';

export default Row;
