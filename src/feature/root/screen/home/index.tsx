import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';
import Box from '@mui/material/Box';

import { goStore } from '@/common/helper/store';
import { font } from './constants';

import Nav from './component/nav';
import HeroSection from './component/hero';
import FeaturesSection from './component/features';
import TimelineSection from './component/timeline';
import ReactionSection from './component/reaction';
import PrivateSection from './component/private_section';
import HowToSection from './component/how_to';
import WhySection from './component/why';
import FreeSection from './component/free';
import PersonaSection from './component/persona';
import FamilySection from './component/family';
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
        <Box sx={{ fontFamily: font, fontSize: '16px', fontWeight: 500, overflowX: 'hidden' }}>
            <Nav />
            <HeroSection />
            <FeaturesSection />
            <TimelineSection />
            <ReactionSection />
            <PrivateSection />
            <HowToSection />
            <WhySection />
            <FreeSection />
            <PersonaSection />
            <FamilySection />
            <TestimonialsSection />
            <CtaSection />
            <Footer />
        </Box>
    );
}
