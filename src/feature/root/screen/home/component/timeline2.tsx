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

export default function Timeline2Section() {
    const [activeIdx, setActiveIdx] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [maxImgHeight, setMaxImgHeight] = useState(0);
    const handleImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const h = (e.target as HTMLImageElement).offsetHeight;
        setMaxImgHeight(prev => Math.max(prev, h));
    };

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        let timeoutId: ReturnType<typeof setTimeout>;
        let playing = false;
        let idx = 0;
        let hasPlayed = false;
        const advance = () => {
            if (!playing) return;
            idx = idx + 1;
            if (idx >= IMAGES.length) return;
            setActiveIdx(idx);
            timeoutId = setTimeout(advance, 950);
        };
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasPlayed) {
                hasPlayed = true;
                playing = true;
                idx = 0;
                setActiveIdx(0);
                timeoutId = setTimeout(advance, 950);
            } else {
                playing = false;
                clearTimeout(timeoutId);
            }
        }, { threshold: 0.4 });
        obs.observe(el);
        return () => { obs.disconnect(); playing = false; clearTimeout(timeoutId); };
    }, []);

    return (
        <Box
            ref={sectionRef}
            component="section"
            sx={{ height: 'auto', background: '#FDFAFA', position: 'relative', display: 'flex', alignItems: 'flex-start', minHeight: { mobile: 'unset', tablet: '560px', laptop: 'unset' } }}
        >
            <Box sx={{
                position: 'relative', top: 0, width: '100%', height: 'auto',
                display: 'flex', alignItems: 'flex-start',
                px: '5%', overflow: 'visible',
                pt: { mobile: '110px', laptop: '120px' }, pb: { mobile: '110px', laptop: '120px' },
            }}>
                <Box sx={{ maxWidth: '1140px', mx: 'auto', width: '100%', display: 'flex', flexDirection: { mobile: 'column', tablet: 'row', laptop: 'row' }, gap: { mobile: '80px', tablet: '2rem', laptop: '6rem' }, alignItems: { mobile: 'flex-start', tablet: 'center', laptop: 'center' } }}>

                    {/* Left: text */}
                    <Box sx={{ width: { mobile: '100%', tablet: '320px', laptop: '500px' }, flexShrink: 0 }}>
                        <Eyebrow sx={{ fontSize: '16px', fontWeight: 600, mb: '16px', color: '#121212' }}>
                            <Box component="svg" sx={{ width: '18px', height: '18px', flexShrink: 0 }} viewBox="401 203 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M413.844 203.182C415.403 203.182 416.713 203.789 417.622 204.843C418.522 205.885 418.986 207.31 418.986 208.891C418.986 212.206 416.42 215.954 410.188 217.594C410.125 217.611 410.06 217.615 409.997 217.615C409.934 217.615 409.87 217.61 409.807 217.594C403.575 215.954 401.009 212.206 401.009 208.891C401.009 207.31 401.473 205.885 402.373 204.843C403.282 203.789 404.592 203.182 406.151 203.182C408.105 203.182 409.311 204.063 409.997 204.926C410.683 204.063 411.89 203.182 413.844 203.182Z" fill="currentColor"/>
                            </Box>
                            소통
                        </Eyebrow>
                        <SecTitle sx={{ mb: '32px', fontSize: { mobile: '32px', tablet: '36px', laptop: '46px' }, fontWeight: 600, lineHeight: { mobile: '42px', tablet: '48px', laptop: '58px' }, color: '#121212' }}>
                            좋아요 한번으로<br />마음이 전해져요
                        </SecTitle>
                        <SecDesc sx={{ fontSize: { mobile: '14px', laptop: '16px' }, lineHeight: { mobile: '22px', laptop: '26px' }, color: '#4A4A4A' }}>
                            작은 하트 하나, 짧은 댓글 한 줄이 모여<br />
                            가족의 소중한 추억이 됩니다.<br />
                            거리와 상관없이, 가족들과 소통하며 아이의 매일을 함께하세요.
                        </SecDesc>
                    </Box>

                    {/* Right: auto-playing images */}
                    <Box sx={{ flex: 1, minWidth: 0, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', position: 'relative', minHeight: { mobile: maxImgHeight > 0 ? `${maxImgHeight}px` : '110vw', laptop: maxImgHeight > 0 ? `${maxImgHeight}px` : '520px' } }}>
                        {IMAGES.map((img, i) => (
                            <Box
                                key={i}
                                component="img"
                                src={img}
                                alt={`section2 img ${i + 1}`}
                                onLoad={handleImgLoad}
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    width: { mobile: '240px', tablet: '54%', laptop: '410px' },
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
