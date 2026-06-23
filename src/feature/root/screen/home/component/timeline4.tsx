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

export default function Timeline4Section() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [cardHeight, setCardHeight] = useState(0);
    const [maxImgHeight, setMaxImgHeight] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
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
        const totalStates = IMAGES.length + 1;
        const advance = () => {
            if (!playing) return;
            idx = idx + 1;
            if (idx >= totalStates) return;
            setActiveIdx(idx);
            timeoutId = setTimeout(advance, 1200);
        };
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasPlayed) {
                hasPlayed = true;
                playing = true;
                idx = 0;
                setActiveIdx(0);
                timeoutId = setTimeout(advance, 1200);
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
            sx={{ height: 'auto', background: '#FAFDFF', position: 'relative', display: 'flex', alignItems: 'flex-start', minHeight: { mobile: 'unset', tablet: '560px', laptop: 'unset' } }}
        >
            <Box sx={{
                position: 'relative', top: 0, width: '100%', height: 'auto',
                display: 'flex', alignItems: 'flex-start',
                px: '5%', overflow: 'visible',
                pt: { mobile: '120px', laptop: '120px' }, pb: { mobile: '100px', laptop: '120px' },
            }}>
                <Box sx={{ maxWidth: '1140px', mx: 'auto', width: '100%', display: 'flex', flexDirection: { mobile: 'column', tablet: 'row', laptop: 'row' }, gap: { mobile: '90px', tablet: '2rem', laptop: '6rem' }, alignItems: { mobile: 'flex-start', laptop: 'center' } }}>

                    {/* Left: text */}
                    <Box sx={{ width: { mobile: '100%', tablet: '320px', laptop: '500px' }, flexShrink: 0 }}>
                        <Eyebrow sx={{ fontSize: '16px', fontWeight: 600, mb: '16px', color: '#121212' }}>
                            <Box component="svg" sx={{ width: '18px', height: '10px', flexShrink: 0 }} viewBox="444 417 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M461.739 419.09C460.964 418.304 459.866 417.89 458.563 417.89C457.349 417.89 456.331 418.279 455.45 419.079C454.902 419.577 454.459 420.186 454.05 420.813C453.069 419.312 451.826 417.89 449.433 417.89C448.142 417.89 447.038 418.329 446.242 419.161C445.502 419.934 445.094 420.996 445.094 422.151C445.094 423.307 445.557 424.285 446.398 425.035C447.164 425.718 448.182 426.11 449.192 426.11C450.548 426.11 451.678 425.721 452.647 424.92C453.192 424.47 453.639 423.926 454.036 423.361C454.966 424.748 456.226 426.11 458.564 426.11C459.813 426.11 460.946 425.664 461.754 424.853C462.485 424.119 462.905 423.136 462.906 422.155C462.918 420.953 462.504 419.864 461.74 419.09H461.739ZM449.192 424.736C447.874 424.736 446.464 423.698 446.464 422.152C446.464 420.714 447.382 419.264 449.434 419.264C451.485 419.264 452.282 420.548 453.238 422.091C452.245 423.614 451.239 424.736 449.193 424.736H449.192ZM461.536 422.151C461.536 423.225 460.614 424.736 458.563 424.736C456.755 424.736 455.87 423.705 454.855 422.099C455.818 420.566 456.678 419.264 458.563 419.264C459.506 419.264 460.247 419.53 460.765 420.056C461.271 420.569 461.545 421.31 461.536 422.144V422.151Z" fill="currentColor"/>
                            </Box>
                            무료 & 무제한
                        </Eyebrow>
                        <SecTitle sx={{ mb: '32px', fontSize: { mobile: '32px', tablet: '36px', laptop: '46px' }, fontWeight: 600, lineHeight: { mobile: '42px', tablet: '48px', laptop: '58px' }, color: '#121212' }}>
                            사진이 아무리 많아도<br />걱정 없어요
                        </SecTitle>
                        <SecDesc sx={{ fontSize: { mobile: '14px', laptop: '16px' }, lineHeight: { mobile: '22px', laptop: '26px' }, color: '#4A4A4A' }}>
                            빠르게 자라는 아이의 모든 순간, 이제 용량 걱정 없이 맘껏 기록하세요!<br />
                            수천 장의 사진도 원본 그대로,<br />
                            Little Days가 안전하고 무제한으로 보관합니다.
                        </SecDesc>
                    </Box>

                    {/* Right: auto-playing stacking images (slide up & overlap) */}
                    <Box sx={{ flex: 1, minWidth: 0, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', position: 'relative', minHeight: { mobile: maxImgHeight > 0 ? `${maxImgHeight + 30}px` : '70vw', laptop: maxImgHeight > 0 ? `${maxImgHeight + 30}px` : '520px' } }}>
                        {IMAGES.map((img, i) => {
                            const isVisible = activeIdx >= i;
                            const rotate = i % 2 === 0 ? -6 : 6;
                            return (
                                <Box
                                    key={i}
                                    component="img"
                                    src={img}
                                    alt={`free img ${i + 1}`}
                                    onLoad={(e) => { if (i === 0) setCardHeight((e.target as HTMLImageElement).offsetHeight); handleImgLoad(e); }}
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        width: { mobile: '220px', tablet: '60%', laptop: '410px' },
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
                                top: cardHeight > 0 ? `${cardHeight / 2}px` : '50%',
                                height: 'auto',
                                zIndex: IMAGES.length,
                                opacity: activeIdx >= IMAGES.length ? 1 : 0,
                                transform: activeIdx >= IMAGES.length ? 'translateY(-50%)' : 'translateY(calc(-50% + 80px))',
                                transition: 'opacity 0.5s ease, transform 0.5s ease',
                                willChange: 'opacity, transform',
                                pointerEvents: 'none',
                                width: { mobile: '180px', laptop: '260px' },
                            }}
                        />
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}
