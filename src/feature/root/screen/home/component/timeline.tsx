import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { Eyebrow, SecTitle, SecDesc } from './shared';
import img01 from '@/common/asset/asset/img/upload img 01.png';
import img02 from '@/common/asset/asset/img/upload img 02.png';
import img03 from '@/common/asset/asset/img/upload img 03.png';
import img04 from '@/common/asset/asset/img/upload img 04.png';
import img05 from '@/common/asset/asset/img/upload img 05.png';
import img06 from '@/common/asset/asset/img/upload img 06.png';
import img07 from '@/common/asset/asset/img/upload img 07.png';
import img08 from '@/common/asset/asset/img/upload img 08.png';
import img09 from '@/common/asset/asset/img/upload img 09.png';

const IMAGES = [img01, img02, img03, img04, img05, img06, img07, img08, img09];

export default function TimelineSection() {
    const [activeIdx, setActiveIdx] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const stackRef = useRef<HTMLImageElement>(null);
    const [stackStep, setStackStep] = useState(0);
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
            id="timeline"
            sx={{ height: 'auto', background: '#fff', position: 'relative', display: 'flex', alignItems: 'flex-start', minHeight: { mobile: 'unset', tablet: 'unset', laptop: 'unset' } }}
        >
            {/* Content panel */}
            <Box sx={{
                position: 'relative', top: 0, width: '100%', height: 'auto',
                display: 'flex', alignItems: 'flex-start',
                px: '5%', overflow: 'visible',
                pt: { mobile: '20px', tablet: '40px', laptop: '60px' }, pb: { mobile: '110px', tablet: '125px', laptop: '140px' },
            }}>
                <Box sx={{ maxWidth: '1140px', mx: 'auto', width: '100%', display: 'flex', flexDirection: { mobile: 'column', tablet: 'row', laptop: 'row' }, gap: { mobile: '90px', tablet: '2rem', laptop: '6rem' }, alignItems: { mobile: 'flex-start', tablet: 'center', laptop: 'center' } }}>

                    {/* Left: text */}
                    <Box sx={{ width: { mobile: '100%', tablet: '320px', laptop: '500px' }, flexShrink: 0 }}>
                        <Eyebrow sx={{ fontSize: '16px', fontWeight: 600, mb: '12px', color: '#121212' }}>
                            <Box component="svg" sx={{ width: '18px', height: '18px', flexShrink: 0 }} viewBox="225 147 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M242.561 161.245C242.561 163.316 240.882 164.995 238.811 164.995L229.189 164.995C227.118 164.995 225.439 163.316 225.439 161.245L225.439 150.755C225.439 148.684 227.118 147.005 229.189 147.005L238.811 147.005C240.882 147.005 242.561 148.684 242.561 150.755L242.561 161.245ZM241.061 150.755C241.061 149.513 240.054 148.505 238.811 148.505L229.189 148.505C227.946 148.505 226.939 149.513 226.939 150.755L226.939 158.509C226.939 159.752 227.946 160.759 229.189 160.759L238.811 160.759C240.054 160.759 241.061 159.752 241.061 158.509L241.061 150.755ZM241.042 161.522C240.419 161.985 239.647 162.259 238.811 162.259L229.189 162.259C228.353 162.259 227.582 161.984 226.958 161.522C227.095 162.634 228.04 163.495 229.189 163.495L238.811 163.495C239.96 163.495 240.906 162.634 241.042 161.522Z" fill="currentColor"/>
                                <path d="M236.256 150.009C236.67 150.009 237.006 150.345 237.006 150.759C237.006 151.173 236.67 151.509 236.256 151.509C236.254 151.509 236.252 151.508 236.25 151.508V151.51H231.75V151.508C231.339 151.505 231.006 151.171 231.006 150.759C231.006 150.345 231.342 150.009 231.756 150.009C231.762 150.009 231.769 150.01 231.775 150.01H236.236C236.243 150.01 236.249 150.009 236.256 150.009Z" fill="currentColor"/>
                                <path d="M237.235 157.581C237.445 157.581 237.599 157.623 237.697 157.707C237.795 157.791 237.844 157.917 237.844 158.085C237.844 158.431 237.641 158.603 237.235 158.603H235.947C235.541 158.603 235.338 158.431 235.338 158.085C235.338 157.917 235.387 157.791 235.485 155.707C235.583 157.623 235.737 157.581 235.947 157.581V155.054L235.387 155.383C235.308 155.43 235.226 155.453 235.142 155.453C235.011 155.453 234.899 155.397 234.806 155.285C234.713 155.169 234.666 155.04 234.666 154.9C234.666 154.709 234.748 154.564 234.911 154.466L236.031 153.815C236.236 153.699 236.43 153.64 236.612 153.64C236.799 153.64 236.948 153.696 237.06 153.808C237.177 153.92 237.235 154.072 237.235 154.263V157.581Z" fill="currentColor"/>
                                <path d="M232.982 156.062C233.257 156.142 233.472 156.286 233.626 156.496C233.784 156.706 233.864 156.961 233.864 157.259C233.864 157.544 233.787 157.791 233.633 158.001C233.479 158.211 233.259 158.375 232.975 158.491C232.695 158.603 232.366 158.659 231.988 158.659C231.684 158.659 231.393 158.62 231.113 158.54C230.833 158.456 230.59 158.337 230.385 158.183C230.305 158.123 230.249 158.06 230.217 157.994C230.184 157.924 230.168 157.843 230.168 157.749C230.168 157.605 230.207 157.483 230.287 157.385C230.366 157.283 230.464 157.231 230.581 157.231C230.646 157.231 230.704 157.243 230.756 157.266C230.807 157.285 230.877 157.318 230.966 157.364C230.984 157.374 231.005 157.385 231.029 157.399C231.057 157.409 231.087 157.42 231.12 157.434C231.269 157.509 231.402 157.567 231.519 157.609C231.64 157.647 231.775 157.665 231.925 157.665C232.186 157.665 232.373 157.623 232.485 157.539C232.601 157.455 232.66 157.315 232.66 157.119C232.66 156.937 232.601 156.807 232.485 156.727C232.368 156.648 232.177 156.608 231.911 156.608H231.477C231.337 156.608 231.227 156.559 231.148 156.461C231.068 156.363 231.029 156.247 231.029 156.111C231.029 155.976 231.068 155.859 231.148 155.761C231.227 155.663 231.337 155.614 231.477 155.614H231.785C232.041 155.614 232.228 155.577 232.345 155.502C232.461 155.428 232.52 155.309 232.52 155.145C232.52 154.973 232.468 154.84 232.366 154.746C232.263 154.648 232.121 154.599 231.939 154.599C231.808 154.599 231.684 154.62 231.568 154.662C231.456 154.704 231.33 154.76 231.19 154.83L231.043 154.9C230.954 154.947 230.884 154.982 230.833 155.005C230.781 155.024 230.723 155.033 230.658 155.033C230.541 155.033 230.443 154.984 230.364 154.886C230.284 154.784 230.245 154.66 230.245 154.515C230.245 154.417 230.261 154.336 230.294 154.27C230.326 154.205 230.382 154.142 230.462 154.081C230.662 153.932 230.898 153.815 231.169 153.731C231.444 153.647 231.722 153.605 232.002 153.605C232.347 153.605 232.65 153.661 232.912 153.773C233.178 153.885 233.381 154.044 233.521 154.249C233.665 154.455 233.738 154.693 233.738 154.963C233.738 155.22 233.67 155.446 233.535 155.642C233.404 155.834 233.22 155.974 232.982 156.062Z" fill="currentColor"/>
                            </Box>
                            날짜별 자동 정렬
                        </Eyebrow>
                        <SecTitle sx={{ mb: '32px', fontSize: { mobile: '32px', tablet: '36px', laptop: '46px' }, fontWeight: 600, lineHeight: { mobile: '42px', tablet: '48px', laptop: '58px' }, color: '#121212' }}>
                            사진을 업로드하면,<br />알아서 정리돼요
                        </SecTitle>
                        <SecDesc sx={{ fontSize: { mobile: '14px', laptop: '16px' }, lineHeight: { mobile: '22px', laptop: '26px' }, color: '#4A4A4A' }}>
                            사진 촬영 날짜를 자동으로 읽어 타임라인에 배치돼요.<br />
                            아이가 태어난 날부터 오늘까지,<br />
                            성장의 흐름을 한눈에 확인할 수있어요!
                        </SecDesc>
                    </Box>

                    {/* Right: auto-playing images */}
                    <Box sx={{ flex: 1, minWidth: 0, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', position: 'relative', minHeight: { mobile: maxImgHeight > 0 ? `${maxImgHeight}px` : '90vw', laptop: maxImgHeight > 0 ? `${maxImgHeight}px` : '520px' } }}>

                        {/* Images 01-06: single swap */}
                        {IMAGES.slice(0, 6).map((img, i) => {
                            const hasBox = i < 5; // 이미지 1~5: 모바일에서만 흰 박스 배경(라운드 16px + 그림자)
                            return (
                                <Box
                                    key={i}
                                    component="img"
                                    src={img}
                                    alt={`upload img ${i + 1}`}
                                    onLoad={handleImgLoad}
                                    sx={{
                                        position: 'absolute',
                                        ml: { mobile: 0, tablet: '40px', laptop: 0 },
                                        top: { mobile: 0, tablet: '50%', laptop: 0 },
                                        width: { mobile: '240px', tablet: '54%', laptop: '410px' },
                                        height: 'auto',
                                        backgroundColor: hasBox ? { mobile: '#fff', tablet: 'transparent', laptop: 'transparent' } : 'transparent',
                                        borderRadius: hasBox ? { mobile: '16px', tablet: '20px', laptop: '20px' } : '20px',
                                        boxShadow: hasBox ? { mobile: '0 8px 24px rgba(0,0,0,0.10)', tablet: 'none', laptop: 'none' } : 'none',
                                        opacity: activeIdx === i ? 1 : 0,
                                        transform: { mobile: 'none', tablet: 'translateY(-50%)', laptop: 'none' },
                                        transition: 'none',
                                        willChange: 'opacity',
                                        pointerEvents: 'none',
                                    }}
                                />
                            );
                        })}

                        {/* Images 07-09: new card slides in from top, pushes previous card down */}
                        {IMAGES.slice(6).map((img, j) => {
                            const i = j + 6;
                            const isVisible = activeIdx >= i;
                            const step = stackStep > 0 ? stackStep + 6 : 600;
                            const translateYLaptop = isVisible ? (activeIdx - i) * step : -step;
                            const translateYMobile = isVisible ? (activeIdx - i) * step : step;
                            return (
                                <Box
                                    key={i}
                                    ref={j === 0 ? stackRef : undefined}
                                    component="img"
                                    src={img}
                                    alt={`upload img ${i + 1}`}
                                    onLoad={j === 0 ? (e) => setStackStep((e.target as HTMLImageElement).offsetHeight) : undefined}
                                    sx={{
                                        position: 'absolute',
                                        ml: { mobile: 0, tablet: '40px', laptop: 0 },
                                        top: { mobile: 0, tablet: '50%', laptop: 0 },
                                        width: { mobile: '240px', tablet: '54%', laptop: '410px' },
                                        height: 'auto',
                                        borderRadius: '20px',
                                        boxShadow: '0 24px 64px rgba(0,0,0,.12)',
                                        opacity: isVisible ? 1 : 0,
                                        transform: { mobile: `translateY(${translateYMobile}px)`, tablet: `translateY(calc(-50% + ${translateYLaptop}px))`, laptop: `translateY(${translateYLaptop}px)` },
                                        transition: 'opacity 0.5s ease, transform 0.5s ease',
                                        willChange: 'opacity, transform',
                                        pointerEvents: 'none',
                                    }}
                                />
                            );
                        })}

                    </Box>

                </Box>
            </Box>
        </Box>
    );
}
