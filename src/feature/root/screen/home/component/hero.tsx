import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import { C, font } from '../constants';
import { goAppStore, goPlayStore } from '@/common/helper/store';
import iosIcon from '@/common/asset/asset/img/ios.png';
import andIcon from '@/common/asset/asset/img/and.png';
import mainImg from '@/common/asset/asset/img/main.png';


export default function HeroSection() {
    const imgRef = useRef<HTMLDivElement>(null);
    const [cardsVisible, setCardsVisible] = useState(false);

    useEffect(() => {
        const el = imgRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setCardsVisible(true); },
            { threshold: 0.5, rootMargin: '0px 0px -150px 0px' },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return (
        <Box
            component="section"
            sx={{
                minHeight: '100vh', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                pt: '62px', pb: '60px', px: '5%',
                position: 'relative', overflow: 'hidden', background: C.bg,
            }}
        >

            {/* Title */}
            <Box
                component="h1"
                sx={{
                    fontSize: '62px', fontWeight: 700,
                    lineHeight: 1.18, letterSpacing: '-.5px', color: C.text,
                    mt: '60px', mb: '32px', fontFamily: font, animation: 'fu .5s .08s ease both',
                }}
            >
                아이의 모든 순간을<br />
                <Box component="span" sx={{ color: '#121212' }}>
                    선명하게
                </Box>{' '}
                간직하세요
            </Box>



            <Box component="p" sx={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.4, letterSpacing: '.08px', color: 'rgb(77, 83, 94)', maxWidth: '500px', mx: 'auto', mb: '8px', animation: 'fu .5s .22s ease both' }}>
                무료 · 무제한으로 아기 사진을 원본 그대로 저장하는<br />아기 앨범 서비스 리틀데이즈
            </Box>
            <Box component="p" sx={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.4, letterSpacing: '.08px', color: 'rgb(77, 83, 94)', maxWidth: '500px', mx: 'auto', mb: '48px', animation: 'fu .5s .22s ease both' }}>
                매일 자라는 아이의 모든 순간을 선명하게 기록하세요.
            </Box>

            {/* CTA */}
            <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', mb: '120px', animation: 'fu .5s .28s ease both' }}>
                <Box component="button" onClick={goPlayStore} sx={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: '#111', color: '#fff',
                    px: '28px', py: '16px', borderRadius: '14px',
                    fontSize: '16px', fontWeight: 600, fontFamily: font,
                    border: 'none', cursor: 'pointer',
                    transition: 'background .15s',
                    '&:hover': { background: '#333' },
                }}>
                    <Box component="img" src={andIcon} sx={{ width: '22px', height: '22px', flexShrink: 0 }} />
                    Google Play
                </Box>
                <Box component="button" onClick={goAppStore} sx={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: '#111', color: '#fff',
                    px: '28px', py: '16px', borderRadius: '14px',
                    fontSize: '16px', fontWeight: 600, fontFamily: font,
                    border: 'none', cursor: 'pointer',
                    transition: 'background .15s',
                    '&:hover': { background: '#333' },
                }}>
                    <Box component="img" src={iosIcon} sx={{ width: '22px', height: '22px', flexShrink: 0, filter: 'brightness(0) invert(1)' }} />
                    App Store
                </Box>
            </Box>

            {/* Main image */}
            <Box ref={imgRef} sx={{ animation: 'fu .7s .35s ease both', display: { xs: 'none', sm: 'inline-block' }, position: 'relative', zIndex: 1 }}>

                {/* Floating card - left top */}
                <Box sx={{
                    position: 'absolute', left: '-230px', top: '30%',
                    background: '#fff', borderRadius: '20px',
                    px: '32px', py: '20px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    fontSize: '18px', fontWeight: 700, color: '#121212',
                    lineHeight: '26px', textAlign: 'center', whiteSpace: 'nowrap',
                    fontFamily: font,
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity .6s ease 0.1s, transform .6s ease 0.1s',
                }}>
                    용량 제한 없이<br />원본 그대로!
                </Box>

                {/* Floating card - left bottom */}
                <Box sx={{
                    position: 'absolute', left: '-170px', top: '58%',
                    background: '#fff', borderRadius: '20px',
                    px: '32px', py: '20px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    fontSize: '18px', fontWeight: 700, color: '#121212',
                    lineHeight: '26px', textAlign: 'center', whiteSpace: 'nowrap',
                    fontFamily: font,
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity .6s ease 0.25s, transform .6s ease 0.25s',
                }}>
                    선명하게<br />원본 그대로
                </Box>

                {/* Floating card - right */}
                <Box sx={{
                    position: 'absolute', right: '-178px', top: 'calc(45% - 12px)',
                    background: '#fff', borderRadius: '20px',
                    px: '32px', py: '20px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    fontSize: '18px', fontWeight: 700, color: '#121212',
                    lineHeight: '26px', textAlign: 'center', whiteSpace: 'nowrap',
                    fontFamily: font,
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity .6s ease 0.4s, transform .6s ease 0.4s',
                }}>
                    선명하게<br />원본 그대로
                </Box>

                <Box component="img" src={mainImg} alt="Little Days 앱 화면" sx={{ width: '420px', height: 'auto', display: 'block', mx: 'auto', WebkitMaskImage: 'linear-gradient(to bottom, black 62%, transparent 85%)', maskImage: 'linear-gradient(to bottom, black 62%, transparent 85%)' }} />
            </Box>

            {/* Glow blob - top right (behind image) */}
            <Box sx={{
                position: 'absolute', pointerEvents: 'none', borderRadius: '50%',
                width: '1080px', height: '1080px',
                background: `radial-gradient(circle,${alpha(C.primary, 0.18)} 0%,transparent 65%)`,
                bottom: '0px', left: 'calc(50% - 540px)', zIndex: 0,
                WebkitMaskImage: 'linear-gradient(to bottom, black 62%, transparent 85%)', maskImage: 'linear-gradient(to bottom, black 62%, transparent 85%)',
                '@keyframes gf': { '0%,100%': { transform: 'translateY(0) scale(1)' }, '50%': { transform: 'translateY(-24px) scale(1.03)' } },
                animation: 'gf 9s ease-in-out infinite',
            }} />
        </Box>
    );
}

