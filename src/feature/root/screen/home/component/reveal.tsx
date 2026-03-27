import { useEffect, useRef, useState } from 'react';
import Box, { type BoxProps } from '@mui/material/Box';

type Props = BoxProps & { delay?: number };

export default function Reveal({ delay = 0, children, sx, ...props }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <Box
            ref={ref}
            sx={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s`,
                ...sx,
            }}
            {...props}
        >
            {children}
        </Box>
    );
}
