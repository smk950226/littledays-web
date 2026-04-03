import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { Eyebrow, SecTitle, SecDesc } from './shared';
import img01 from '@/common/asset/asset/img/free img 01.png';
import img02 from '@/common/asset/asset/img/free img 02.png';
import img03 from '@/common/asset/asset/img/free img 03.png';
import img04 from '@/common/asset/asset/img/free img 04.png';
import img05 from '@/common/asset/asset/img/free img 05.png';
import img06 from '@/common/asset/asset/img/free img 06.png';
import img07 from '@/common/asset/asset/img/free img 07.png';
import unlimitedImg from '@/common/asset/asset/img/unlimited img.png';

const IMAGES = [img01, img02, img03, img04, img05, img06, img07];
const STEP_VH = 80;

export default function Timeline4Section() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [cardHeight, setCardHeight] = useState(0);
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
                IMAGES.length  // one extra step for unlimitedImg
            );
            setActiveIdx(idx);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const totalHeight = `calc(100vh + ${(IMAGES.length + 1) * STEP_VH}vh)`;

    return (
        <Box
            ref={sectionRef}
            component="section"
            sx={{ height: totalHeight, background: '#FAFDFF', position: 'relative' }}
        >
            <Box sx={{
                position: 'sticky', top: 0, height: '100vh',
                display: 'flex', alignItems: 'flex-start',
                px: '5%', overflow: 'hidden',
            }}>
                <Box sx={{ maxWidth: '1140px', mx: 'auto', width: '100%', display: 'flex', flexDirection: 'row', gap: '6rem', alignItems: 'flex-start', pt: '260px' }}>

                    {/* Left: sticky text */}
                    <Box sx={{ width: '500px', flexShrink: 0 }}>
                        <Eyebrow sx={{ fontSize: '18px', fontWeight: 600, mb: '16px', color: '#121212' }}>
                            <Box component="svg" sx={{ width: '18px', height: '18px', flexShrink: 0 }} viewBox="401 203 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M413.844 203.182C415.403 203.182 416.713 203.789 417.622 204.843C418.522 205.885 418.986 207.31 418.986 208.891C418.986 212.206 416.42 215.954 410.188 217.594C410.125 217.611 410.06 217.615 409.997 217.615C409.934 217.615 409.87 217.61 409.807 217.594C403.575 215.954 401.009 212.206 401.009 208.891C401.009 207.31 401.473 205.885 402.373 204.843C403.282 203.789 404.592 203.182 406.151 203.182C408.105 203.182 409.311 204.063 409.997 204.926C410.683 204.063 411.89 203.182 413.844 203.182Z" fill="currentColor"/>
                            </Box>
                            무료 & 무제한
                        </Eyebrow>
                        <SecTitle sx={{ mb: '32px', fontSize: '46px', fontWeight: 600, lineHeight: '58px', color: '#121212' }}>
                            사진이 아무리 많아도<br />걱정 없어요
                        </SecTitle>
                        <SecDesc sx={{ fontSize: '16px', lineHeight: '26px', color: '#4A4A4A' }}>
                            빠르게 자라는 아이의 모든 순간, 이제 용량 걱정 없이 맘껏 기록하세요!<br />
                            수천 장의 사진도 원본 그대로,<br />
                            Little Days가 안전하고 무제한으로 보관합니다.
                        </SecDesc>
                    </Box>

                    {/* Right: scroll-driven stacking images (slide up & overlap) */}
                    <Box sx={{ flex: 1, minWidth: 0, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', position: 'relative', height: 'calc(100vh - 200px)', mt: '-40px' }}>
                        {IMAGES.map((img, i) => {
                            const isVisible = activeIdx >= i;
                            const rotate = i % 2 === 0 ? -6 : 6;
                            return (
                                <Box
                                    key={i}
                                    component="img"
                                    src={img}
                                    alt={`free img ${i + 1}`}
                                    onLoad={i === 0 ? (e) => setCardHeight((e.target as HTMLImageElement).offsetHeight) : undefined}
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        width: '410px',
                                        height: 'auto',
                                        borderRadius: '20px',
                                        zIndex: i,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible
                                            ? `translateY(0) rotate(${rotate}deg)`
                                            : `translateY(80px) rotate(${rotate}deg)`,
                                        transition: 'opacity 0.5s ease, transform 0.5s ease',
                                        willChange: 'opacity, transform',
                                        pointerEvents: 'none',
                                    }}
                                />
                            );
                        })}
                        <Box
                            component="img"
                            src={unlimitedImg}
                            alt="unlimited"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                width: '410px',
                                height: 'auto',
                                zIndex: IMAGES.length,
                                top: cardHeight > 0 ? `${cardHeight / 2}px` : '50%',
                                opacity: activeIdx >= IMAGES.length ? 1 : 0,
                                transform: activeIdx >= IMAGES.length ? 'translateX(-50%) translateY(-50%)' : 'translateX(-50%) translateY(calc(-50% + 80px))',
                                transition: 'opacity 0.5s ease, transform 0.5s ease',
                                willChange: 'opacity, transform',
                                pointerEvents: 'none',
                                width: '260px',
                                left: '50%',
                            }}
                        />
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}
