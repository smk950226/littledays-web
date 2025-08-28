import { forwardRef } from 'react';

import MuiTypography, { type TypographyProps } from '@mui/material/Typography';

import Typography from '../../../theme/typography';

const Caption3 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <MuiTypography
                ref={ref}
                sx={{
                    ...Typography.caption3,
                    ...sx,
                }}
                {...props}
            >
                {children}
            </MuiTypography>
        );
    },
);
Caption3.displayName = 'Caption3';

export default Caption3;
