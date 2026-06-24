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
        const onScroll = () => {
            if (window.scrollY > 0) {
                setCardsVisible(true);
                window.removeEventListener('scroll', onScroll);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <Box
            component="section"
            sx={{
                minHeight: '100vh', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                pt: '62px', pb: { mobile: '10px', tablet: '20px' }, px: '5%',
                position: 'relative', overflow: 'hidden', background: C.bg,
            }}
        >

            {/* Title */}
            <Box
                component="h1"
                sx={{
                    fontSize: { mobile: '38px', tablet: '48px', laptop: '62px' }, fontWeight: 700,
                    lineHeight: 1.18, letterSpacing: '-.5px', color: C.text,
                    mt: { mobile: '72px', tablet: '40px', laptop: '60px' }, mb: { mobile: '16px', tablet: '28px', laptop: '32px' }, fontFamily: font, animation: 'fu .5s .08s ease both',
                }}
            >
                아이의 모든 순간을<br />
                <Box component="span" sx={{ color: '#121212' }}>
                    선명하게
                </Box>{' '}
                간직하세요
            </Box>



            <Box component="p" sx={{ fontSize: { mobile: '14px', laptop: '17px' }, fontWeight: 400, lineHeight: 1.4, letterSpacing: '.08px', color: 'rgb(77, 83, 94)', maxWidth: '500px', mx: 'auto', mb: '8px', animation: 'fu .5s .22s ease both' }}>
                무료 · 무제한으로 아기 사진을 원본 그대로 저장하는<br />아기 앨범 서비스 리틀데이즈
            </Box>
            <Box component="p" sx={{ fontSize: { mobile: '14px', laptop: '17px' }, fontWeight: 400, lineHeight: 1.4, letterSpacing: '.08px', color: 'rgb(77, 83, 94)', maxWidth: '500px', mx: 'auto', mb: { mobile: '28px', tablet: '36px', laptop: '48px' }, animation: 'fu .5s .22s ease both' }}>
                매일 자라는 아이의 모든 순간을 선명하게 기록하세요.
            </Box>

            {/* CTA */}
            <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', mb: { mobile: '62px', tablet: '80px', laptop: '120px' }, animation: 'fu .5s .28s ease both' }}>
                <Box component="button" onClick={goPlayStore} sx={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: '#111', color: '#fff',
                    px: { mobile: '18px', tablet: '28px' }, py: { mobile: '12px', tablet: '16px' }, borderRadius: '14px',
                    fontSize: { mobile: '14px', tablet: '16px' }, fontWeight: 600, fontFamily: font,
                    border: 'none', cursor: 'pointer',
                    transition: 'background .15s',
                    '&:hover': { background: '#333' },
                }}>
                    <Box component="img" src={andIcon} sx={{ width: { mobile: '18px', tablet: '22px' }, height: { mobile: '18px', tablet: '22px' }, flexShrink: 0 }} />
                    Google Play
                </Box>
                <Box component="button" onClick={goAppStore} sx={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: '#111', color: '#fff',
                    px: { mobile: '18px', tablet: '28px' }, py: { mobile: '12px', tablet: '16px' }, borderRadius: '14px',
                    fontSize: { mobile: '14px', tablet: '16px' }, fontWeight: 600, fontFamily: font,
                    border: 'none', cursor: 'pointer',
                    transition: 'background .15s',
                    '&:hover': { background: '#333' },
                }}>
                    <Box component="img" src={iosIcon} sx={{ width: { mobile: '18px', tablet: '22px' }, height: { mobile: '18px', tablet: '22px' }, flexShrink: 0, filter: 'brightness(0) invert(1)' }} />
                    App Store
                </Box>
            </Box>

            {/* Main image */}
            <Box ref={imgRef} sx={{ animation: 'fu .7s .35s ease both', display: 'inline-block', position: 'relative', zIndex: 1 }}>

                {/* Floating card - left top */}
                <Box sx={{
                    position: 'absolute', left: { mobile: '-70px', tablet: '-140px', laptop: '-230px' }, top: '30%',
                    background: '#fff', borderRadius: '16px',
                    px: { mobile: '20px', tablet: '20px', laptop: '32px' }, py: { mobile: '12px', tablet: '14px', laptop: '20px' },
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    fontSize: { mobile: '12px', tablet: '15px', laptop: '18px' }, fontWeight: 700, color: '#121212',
                    lineHeight: 1.4, textAlign: 'center', whiteSpace: 'nowrap', zIndex: 2,
                    fontFamily: font,
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 1s ease 0.1s, transform 1s ease 0.1s',
                }}>
                    용량 제한 없이<br />원본 그대로!
                </Box>

                {/* Floating card - left bottom */}
                <Box sx={{
                    position: 'absolute', left: { mobile: '-44px', tablet: '-110px', laptop: '-170px' }, top: 'calc(58% - 12px)',
                    background: '#fff', borderRadius: '16px',
                    px: { mobile: '20px', tablet: '20px', laptop: '32px' }, py: { mobile: '12px', tablet: '14px', laptop: '20px' },
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    fontSize: { mobile: '12px', tablet: '15px', laptop: '18px' }, fontWeight: 700, color: '#121212',
                    lineHeight: 1.4, textAlign: 'center', whiteSpace: 'nowrap', zIndex: 2,
                    fontFamily: font,
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 1s ease 0.25s, transform 1s ease 0.25s',
                }}>
                    선명하게<br />원본 그대로
                </Box>

                {/* Floating card - right */}
                <Box sx={{
                    position: 'absolute', right: { mobile: '-44px', tablet: '-110px', laptop: '-178px' }, top: 'calc(45% - 24px)',
                    background: '#fff', borderRadius: '16px',
                    px: { mobile: '20px', tablet: '20px', laptop: '32px' }, py: { mobile: '12px', tablet: '14px', laptop: '20px' },
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    fontSize: { mobile: '12px', tablet: '15px', laptop: '18px' }, fontWeight: 700, color: '#121212',
                    lineHeight: 1.4, textAlign: 'center', whiteSpace: 'nowrap', zIndex: 2,
                    fontFamily: font,
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 1s ease 0.4s, transform 1s ease 0.4s',
                }}>
                    가족이 몇 명이든<br />누구나!
                </Box>

                <Box component="img" src={mainImg} alt="Little Days 앱 화면" sx={{ width: { mobile: '240px', tablet: '300px', laptop: '420px' }, minWidth: '240px', height: 'auto', display: 'block', mx: 'auto', WebkitMaskImage: 'linear-gradient(to bottom, black 62%, transparent 85%)', maskImage: 'linear-gradient(to bottom, black 62%, transparent 85%)' }} />
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

