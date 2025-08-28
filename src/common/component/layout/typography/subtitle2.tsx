import { forwardRef } from 'react';

import MuiTypography, { type TypographyProps } from '@mui/material/Typography';

import Typography from '../../../theme/typography';

const Subtitle2 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <MuiTypography
                ref={ref}
                sx={{
                    ...Typography.subtitle2,
                    ...sx,
                }}
                {...props}
            >
                {children}
            </MuiTypography>
        );
    },
);
Subtitle2.displayName = 'Subtitle2';

export default Subtitle2;
