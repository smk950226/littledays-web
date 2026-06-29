import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';
import Box from '@mui/material/Box';

import { goStore } from '@/common/helper/store';
import { font } from './constants';

import Nav from './component/nav';
import HeroSection from './component/hero';
import TimelineSection from './component/timeline';
import Timeline2Section from './component/timeline2';
import Timeline3Section from './component/timeline3';
import Timeline4Section from './component/timeline4';
import SafetySection from './component/safety';
import TestimonialsSection from './component/testimonials';
import CtaSection from './component/cta';
import Footer from './component/footer';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.startsWith('/download')) {
            goStore();
        }
    }, [location.pathname]);

    return (
        <Box
            sx={{
                fontFamily: font,
                fontSize: '16px',
                fontWeight: 500,
                overflowX: 'clip',
            }}
        >
            <Nav />
            <HeroSection />
            <TimelineSection />
            <Timeline2Section />
            <Timeline3Section />
            <Timeline4Section />
            <SafetySection />
            <TestimonialsSection />
            <CtaSection />
            <Footer />
        </Box>
    );
}
