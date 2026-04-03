import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { Eyebrow, SecTitle, SecDesc } from './shared';
import comm01 from '@/common/asset/asset/img/communication img 01.png';
import comm02 from '@/common/asset/asset/img/communication img 02.png';
import comm03 from '@/common/asset/asset/img/communication img 03.png';
import comm04 from '@/common/asset/asset/img/communication img 04.png';
import comm05 from '@/common/asset/asset/img/communication img 05.png';
import comm06 from '@/common/asset/asset/img/communication img 06.png';
import comm07 from '@/common/asset/asset/img/communication img 07.png';

const IMAGES = [comm01, comm02, comm03, comm04, comm05, comm06, comm07];
const STEP_VH = 80;

export default function Timeline2Section() {
    const [activeIdx, setActiveIdx] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const el = sectionRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const scrolled = -rect.top;
            const stepPx = STEP_VH * window.innerHeight / 100;
            const idx = Math.min(
                Math.max(0, Math.floor(scrolled / stepPx)),
                IMAGES.length - 1
            );
            setActiveIdx(idx);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const totalHeight = `calc(100vh + ${IMAGES.length * STEP_VH}vh)`;

    return (
        <Box
            ref={sectionRef}
            component="section"
            sx={{ height: totalHeight, background: '#FDFAFA', position: 'relative' }}
        >
            <Box sx={{
                position: 'sticky', top: 0, height: '100vh',
                display: 'flex', alignItems: 'flex-start',
                px: '5%', overflow: 'hidden',
            }}>
                <Box sx={{ maxWidth: '1140px', mx: 'auto', width: '100%', display: 'flex', flexDirection: 'row', gap: '6rem', alignItems: 'flex-start', pt: '210px' }}>

                    {/* Left: sticky text */}
                    <Box sx={{ width: '500px', flexShrink: 0, pt: '50px' }}>
                        <Eyebrow sx={{ fontSize: '18px', fontWeight: 600, mb: '16px', color: '#121212' }}>
                            <Box component="svg" sx={{ width: '18px', height: '18px', flexShrink: 0 }} viewBox="401 203 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M413.844 203.182C415.403 203.182 416.713 203.789 417.622 204.843C418.522 205.885 418.986 207.31 418.986 208.891C418.986 212.206 416.42 215.954 410.188 217.594C410.125 217.611 410.06 217.615 409.997 217.615C409.934 217.615 409.87 217.61 409.807 217.594C403.575 215.954 401.009 212.206 401.009 208.891C401.009 207.31 401.473 205.885 402.373 204.843C403.282 203.789 404.592 203.182 406.151 203.182C408.105 203.182 409.311 204.063 409.997 204.926C410.683 204.063 411.89 203.182 413.844 203.182Z" fill="currentColor"/>
                            </Box>
                            소통
                        </Eyebrow>
                        <SecTitle sx={{ mb: '32px', fontSize: '46px', fontWeight: 600, lineHeight: '58px', color: '#121212' }}>
                            좋아요 한번으로<br />마음이 전해져요
                        </SecTitle>
                        <SecDesc sx={{ fontSize: '16px', lineHeight: '26px', color: '#4A4A4A' }}>
                            작은 하트 하나, 짧은 댓글 한 줄이 모여<br />
                            가족의 소중한 추억이 됩니다.<br />
                            거리와 상관없이, 가족들과 소통하며 아이의 매일을 함께하세요.
                        </SecDesc>
                    </Box>

                    {/* Right: scroll-driven images */}
                    <Box sx={{ flex: 1, minWidth: 0, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', position: 'relative', height: 'calc(100vh - 200px)', mt: '-40px' }}>
                        {IMAGES.map((img, i) => (
                            <Box
                                key={i}
                                component="img"
                                src={img}
                                alt={`section2 img ${i + 1}`}
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    width: '410px',
                                    height: 'auto',
                                    borderRadius: '20px',
                                    opacity: activeIdx === i ? 1 : 0,
                                    transition: 'none',
                                    willChange: 'opacity',
                                    pointerEvents: 'none',
                                }}
                            />
                        ))}
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}
