import { forwardRef } from 'react';
import ButtonBase, { type ButtonBaseProps } from '@mui/material/ButtonBase';

const Pressable = forwardRef<HTMLButtonElement, ButtonBaseProps>(
    ({ children, ...props }, ref) => {
        return (
            <ButtonBase ref={ref} {...props}>
                {children}
            </ButtonBase>
        );
    },
);
Pressable.displayName = 'Pressable';

export default Pressable;
