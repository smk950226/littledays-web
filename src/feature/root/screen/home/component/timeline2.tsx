import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { Eyebrow, SecTitle, SecDesc } from './shared';
import koComm01 from '@/common/asset/asset/img/ko/communication img 01.png';
import koComm02 from '@/common/asset/asset/img/ko/communication img 02.png';
import koComm03 from '@/common/asset/asset/img/ko/communication img 03.png';
import koComm04 from '@/common/asset/asset/img/ko/communication img 04.png';
import koComm05 from '@/common/asset/asset/img/ko/communication img 05.png';
import koComm06 from '@/common/asset/asset/img/ko/communication img 06.png';
import koComm07 from '@/common/asset/asset/img/ko/communication img 07.png';
import enComm01 from '@/common/asset/asset/img/en/communication img 01.png';
import enComm02 from '@/common/asset/asset/img/en/communication img 02.png';
import enComm03 from '@/common/asset/asset/img/en/communication img 03.png';
import enComm04 from '@/common/asset/asset/img/en/communication img 04.png';
import enComm05 from '@/common/asset/asset/img/en/communication img 05.png';
import enComm06 from '@/common/asset/asset/img/en/communication img 06.png';
import enComm07 from '@/common/asset/asset/img/en/communication img 07.png';
import useI18n from '@/common/i18n/hook/use_i18n';

const IMAGES_KO = [
    koComm01,
    koComm02,
    koComm03,
    koComm04,
    koComm05,
    koComm06,
    koComm07,
];
const IMAGES_EN = [
    enComm01,
    enComm02,
    enComm03,
    enComm04,
    enComm05,
    enComm06,
    enComm07,
];

export default function Timeline2Section() {
    const { t, locale } = useI18n();
    const IMAGES = locale === 'ko' ? IMAGES_KO : IMAGES_EN;

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
        const advance = () => {
            if (!playing) return;
            idx = idx + 1;
            if (idx >= IMAGES.length) idx = 0; // 끝까지 재생되면 처음부터 자동 반복
            setActiveIdx(idx);
            timeoutId = setTimeout(advance, 950);
        };
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // 다시 보이면 멈춘 곳부터 이어서 재생 (화면에 계속 보이면 무한 반복)
                    if (playing) return;
                    playing = true;
                    timeoutId = setTimeout(advance, 950);
                } else {
                    // 화면에서 벗어나면 현재 위치(idx) 유지한 채 일시정지
                    playing = false;
                    clearTimeout(timeoutId);
                }
            },
            { threshold: 0.4 },
        );
        obs.observe(el);
        return () => {
            obs.disconnect();
            playing = false;
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <Box
            ref={sectionRef}
            component="section"
            sx={{
                height: 'auto',
                background: '#FDFAFA',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                minHeight: {
                    mobile: 'unset',
                    tablet: 'unset',
                    laptop: 'unset',
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    top: 0,
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'flex-start',
                    px: '5%',
                    overflow: 'visible',
                    pt: { mobile: '110px', tablet: '125px', laptop: '140px' },
                    pb: { mobile: '110px', tablet: '125px', laptop: '140px' },
                }}
            >
                <Box
                    sx={{
                        maxWidth: '1140px',
                        mx: 'auto',
                        width: '100%',
                        display: 'flex',
                        flexDirection: {
                            mobile: 'column',
                            tablet: 'row',
                            laptop: 'row',
                        },
                        gap: { mobile: '80px', tablet: '2rem', laptop: '6rem' },
                        alignItems: {
                            mobile: 'flex-start',
                            tablet: 'center',
                            laptop: 'center',
                        },
                    }}
                >
                    {/* Left: text */}
                    <Box
                        sx={{
                            width: {
                                mobile: '100%',
                                tablet: '320px',
                                laptop: '500px',
                            },
                            flexShrink: 0,
                        }}
                    >
                        <Eyebrow
                            sx={{
                                fontSize: '16px',
                                fontWeight: 600,
                                mb: '16px',
                                color: '#121212',
                            }}
                        >
                            <Box
                                component="svg"
                                sx={{
                                    width: '18px',
                                    height: '18px',
                                    flexShrink: 0,
                                }}
                                viewBox="401 203 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M413.844 203.182C415.403 203.182 416.713 203.789 417.622 204.843C418.522 205.885 418.986 207.31 418.986 208.891C418.986 212.206 416.42 215.954 410.188 217.594C410.125 217.611 410.06 217.615 409.997 217.615C409.934 217.615 409.87 217.61 409.807 217.594C403.575 215.954 401.009 212.206 401.009 208.891C401.009 207.31 401.473 205.885 402.373 204.843C403.282 203.789 404.592 203.182 406.151 203.182C408.105 203.182 409.311 204.063 409.997 204.926C410.683 204.063 411.89 203.182 413.844 203.182Z"
                                    fill="currentColor"
                                />
                            </Box>
                            {t('homeTimeline2Eyebrow')}
                        </Eyebrow>
                        <SecTitle
                            sx={{
                                mb: '32px',
                                fontSize: {
                                    mobile: '32px',
                                    tablet: '36px',
                                    laptop: '46px',
                                },
                                fontWeight: 600,
                                lineHeight: {
                                    mobile: '42px',
                                    tablet: '48px',
                                    laptop: '58px',
                                },
                                color: '#121212',
                            }}
                        >
                            {t('homeTimeline2Title')}
                        </SecTitle>
                        <SecDesc
                            sx={{
                                fontSize: { mobile: '14px', laptop: '16px' },
                                lineHeight: { mobile: '22px', laptop: '26px' },
                                color: '#4A4A4A',
                            }}
                        >
                            {t('homeTimeline2Desc')}
                        </SecDesc>
                    </Box>

                    {/* Right: auto-playing images */}
                    <Box
                        sx={{
                            flex: 1,
                            minWidth: 0,
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            position: 'relative',
                            minHeight: {
                                mobile:
                                    maxImgHeight > 0
                                        ? `${maxImgHeight}px`
                                        : '110vw',
                                laptop:
                                    maxImgHeight > 0
                                        ? `${maxImgHeight}px`
                                        : '520px',
                            },
                        }}
                    >
                        {IMAGES.map((img, i) => (
                            <Box
                                key={i}
                                component="img"
                                src={img}
                                alt={`section2 img ${i + 1}`}
                                onLoad={handleImgLoad}
                                sx={{
                                    position: 'absolute',
                                    ml: {
                                        mobile: 0,
                                        tablet: '40px',
                                        laptop: 0,
                                    },
                                    top: {
                                        mobile: 0,
                                        tablet: '50%',
                                        laptop: 0,
                                    },
                                    width: {
                                        mobile: '240px',
                                        tablet: '54%',
                                        laptop: '360px',
                                    },
                                    height: 'auto',
                                    backgroundColor: '#fff',
                                    borderRadius: '16px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                                    px: '10px',
                                    py: {
                                        mobile: '16px',
                                        tablet: '28px',
                                        laptop: '28px',
                                    },
                                    boxSizing: 'border-box',
                                    opacity: activeIdx === i ? 1 : 0,
                                    transform: {
                                        mobile: 'none',
                                        tablet: 'translateY(-50%)',
                                        laptop: 'none',
                                    },
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
