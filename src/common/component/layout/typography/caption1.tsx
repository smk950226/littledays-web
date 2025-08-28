import { forwardRef } from 'react';

import MuiTypography, { type TypographyProps } from '@mui/material/Typography';

import Typography from '../../../theme/typography';

const Caption1 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <MuiTypography
                ref={ref}
                sx={{
                    ...Typography.caption1,
                    ...sx,
                }}
                {...props}
            >
                {children}
            </MuiTypography>
        );
    },
);
Caption1.displayName = 'Caption1';

export default Caption1;
