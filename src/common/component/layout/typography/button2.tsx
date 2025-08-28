import { forwardRef } from 'react';

import MuiTypography, { type TypographyProps } from '@mui/material/Typography';

import Typography from '../../../theme/typography';

const Button2 = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ children, sx, ...props }, ref) => {
        return (
            <MuiTypography
                ref={ref}
                sx={{
                    ...Typography.button2,
                    ...sx,
                }}
                {...props}
            >
                {children}
            </MuiTypography>
        );
    },
);
Button2.displayName = 'Button2';

export default Button2;
