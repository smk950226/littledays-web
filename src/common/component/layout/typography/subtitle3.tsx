import { forwardRef } from 'react';

import MuiTypography, { type TypographyProps } from '@mui/material/Typography';

import Typography from '../../../theme/typography';

const Subtitle3 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <MuiTypography
                ref={ref}
                sx={{
                    ...Typography.subtitle3,
                    ...sx,
                }}
                {...props}
            >
                {children}
            </MuiTypography>
        );
    },
);
Subtitle3.displayName = 'Subtitle3';

export default Subtitle3;
