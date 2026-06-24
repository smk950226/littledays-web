import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { Eyebrow, SecTitle, SecDesc } from './shared';
import inv01 from '@/common/asset/asset/img/invitation img 01.png';
import inv02 from '@/common/asset/asset/img/invitation img 02.png';
import inv03 from '@/common/asset/asset/img/invitation img 03.png';
import inv04 from '@/common/asset/asset/img/invitation img 04.png';
import inv05 from '@/common/asset/asset/img/invitation img 05.png';
import inv06 from '@/common/asset/asset/img/invitation img 06.png';

const IMAGES = [inv01, inv02, inv03, inv04, inv05, inv06];

export default function Timeline3Section() {
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
            sx={{ height: 'auto', background: '#fff', position: 'relative', display: 'flex', alignItems: 'flex-start', minHeight: { mobile: 'unset', tablet: '560px', laptop: 'unset' } }}
        >
            <Box sx={{
                position: 'relative', top: 0, width: '100%', height: 'auto',
                display: 'flex', alignItems: 'flex-start',
                px: '5%', overflow: 'visible',
                pt: { mobile: '110px', laptop: '120px' }, pb: { mobile: '110px', laptop: '120px' },
            }}>
                <Box sx={{ maxWidth: '1140px', mx: 'auto', width: '100%', display: 'flex', flexDirection: { mobile: 'column', tablet: 'row', laptop: 'row' }, gap: { mobile: '90px', tablet: '2rem', laptop: '6rem' }, alignItems: { mobile: 'flex-start', tablet: 'center', laptop: 'center' } }}>

                    {/* Left: text */}
                    <Box sx={{ width: { mobile: '100%', tablet: '320px', laptop: '500px' }, flexShrink: 0 }}>
                        <Eyebrow sx={{ fontSize: '16px', fontWeight: 600, mb: '16px', color: '#121212' }}>
                            <Box component="svg" sx={{ width: '18px', height: '18px', flexShrink: 0 }} viewBox="180 146 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M195.228 147.439C197.298 147.44 198.978 149.118 198.978 151.189V160.812C198.977 162.882 197.298 164.561 195.228 164.562H186.524C184.772 164.561 183.3 163.358 182.889 161.733C182.645 161.733 182.404 161.685 182.179 161.592C181.952 161.498 181.745 161.359 181.571 161.186C181.397 161.012 181.259 160.805 181.165 160.578C181.071 160.351 181.022 160.107 181.022 159.861C181.023 159.616 181.071 159.372 181.165 159.145C181.259 158.918 181.398 158.711 181.571 158.537C181.745 158.363 181.952 158.226 182.179 158.132C182.369 158.053 182.57 158.007 182.774 157.994V157.866C182.57 157.853 182.368 157.809 182.179 157.73C181.952 157.636 181.745 157.498 181.571 157.324C181.397 157.15 181.259 156.944 181.165 156.717C181.071 156.49 181.023 156.246 181.022 156C181.022 155.754 181.071 155.51 181.165 155.283C181.259 155.056 181.397 154.85 181.571 154.676C181.745 154.502 181.952 154.365 182.179 154.271C182.369 154.192 182.57 154.146 182.774 154.133V154.005C182.57 153.992 182.369 153.947 182.179 153.868C181.951 153.774 181.745 153.636 181.571 153.462C181.397 153.288 181.259 153.082 181.165 152.854C181.071 152.627 181.022 152.384 181.022 152.138C181.023 151.892 181.071 151.648 181.165 151.421C181.259 151.194 181.398 150.987 181.571 150.813C181.745 150.64 181.952 150.502 182.179 150.408C182.404 150.315 182.645 150.266 182.889 150.266C183.3 148.641 184.772 147.44 186.524 147.439H195.228ZM186.524 148.939C185.282 148.94 184.274 149.947 184.274 151.189V160.812C184.275 162.054 185.282 163.061 186.524 163.062H195.228C196.47 163.061 197.477 162.054 197.478 160.812V151.189C197.478 149.947 196.47 148.94 195.228 148.939H186.524ZM182.753 159.518C182.708 159.536 182.666 159.563 182.632 159.598C182.597 159.632 182.57 159.674 182.551 159.719C182.532 159.764 182.523 159.813 182.522 159.861C182.522 159.91 182.532 159.959 182.551 160.004C182.57 160.049 182.597 160.09 182.632 160.125C182.666 160.16 182.708 160.187 182.753 160.206C182.76 160.209 182.767 160.21 182.774 160.212V159.511C182.767 159.513 182.76 159.515 182.753 159.518ZM182.753 155.656C182.708 155.675 182.666 155.702 182.632 155.736C182.597 155.771 182.57 155.812 182.551 155.857C182.532 155.903 182.522 155.951 182.522 156C182.523 156.049 182.532 156.098 182.551 156.143C182.57 156.188 182.597 156.229 182.632 156.264C182.666 156.298 182.708 156.326 182.753 156.345C182.76 156.348 182.767 156.348 182.774 156.351V155.649C182.767 155.652 182.76 155.653 182.753 155.656ZM182.753 151.794C182.708 151.813 182.666 151.84 182.632 151.874C182.597 151.908 182.57 151.95 182.551 151.995C182.532 152.04 182.523 152.089 182.522 152.138C182.522 152.186 182.532 152.235 182.551 152.28C182.57 152.325 182.597 152.367 182.632 152.401C182.666 152.436 182.708 152.464 182.753 152.482C182.76 152.485 182.767 152.486 182.774 152.488V151.787C182.767 151.79 182.76 151.791 182.753 151.794Z" fill="currentColor"/>
                                <path d="M191.116 151.396C193.249 151.504 194.987 153.107 195.307 155.177C195.551 155.444 195.723 155.779 195.789 156.158L195.813 156.347L195.819 156.548C195.804 157.247 195.42 157.87 194.842 158.214C194.121 159.583 192.717 160.538 191.075 160.606L190.887 160.61C189.169 160.61 187.686 159.642 186.936 158.228C186.396 157.913 186.012 157.35 185.959 156.678V156.677C185.915 156.114 186.111 155.586 186.462 155.194C186.786 153.042 188.643 151.391 190.887 151.391L191.116 151.396ZM190.887 152.891C189.244 152.891 187.912 154.223 187.912 155.865V156.03H187.911L187.897 156.031C187.632 156.057 187.434 156.294 187.455 156.56C187.476 156.825 187.708 157.02 187.973 156.994L187.987 156.993C188.004 156.991 188.02 156.986 188.036 156.982C188.378 158.136 189.398 158.996 190.636 159.1L190.887 159.11C192.233 159.11 193.369 158.215 193.735 156.987C193.776 156.994 193.819 156.998 193.862 156.994L193.876 156.993C194.141 156.967 194.339 156.73 194.318 156.465C194.299 156.22 194.1 156.038 193.861 156.03V155.865C193.861 154.274 192.611 152.974 191.039 152.895L190.887 152.891ZM188.388 158.439C188.392 158.439 188.395 158.439 188.396 158.438C188.399 158.438 188.402 158.437 188.399 158.438C188.398 158.438 188.394 158.438 188.388 158.439Z" fill="currentColor"/>
                                <path d="M191.002 153.716C191.336 153.535 191.76 153.632 191.978 153.953C192.037 154.038 192.074 154.131 192.094 154.226C192.353 154.215 192.611 154.337 192.76 154.573C192.98 154.923 192.875 155.386 192.525 155.607C192.344 155.721 192.117 155.838 191.801 155.871C191.471 155.906 191.156 155.821 190.91 155.651C190.742 155.749 190.536 155.842 190.262 155.871C189.526 155.95 188.859 155.429 188.879 154.699L188.893 154.549L188.919 154.422C188.996 154.134 189.178 153.905 189.397 153.755L189.463 153.716C189.797 153.535 190.221 153.632 190.439 153.953C190.491 154.028 190.524 154.111 190.545 154.196C190.639 154.013 190.777 153.863 190.935 153.755L191.002 153.716Z" fill="currentColor"/>
                            </Box>
                            초대된 가족만의 공간
                        </Eyebrow>
                        <SecTitle sx={{ mb: '32px', fontSize: { mobile: '32px', tablet: '36px', laptop: '46px' }, fontWeight: 600, lineHeight: { mobile: '42px', tablet: '48px', laptop: '58px' }, color: '#121212' }}>
                            쉿! 우리 가족만<br />볼 수 있어요
                        </SecTitle>
                        <SecDesc sx={{ fontSize: { mobile: '14px', laptop: '16px' }, lineHeight: { mobile: '22px', laptop: '26px' }, color: '#4A4A4A' }}>
                            Little Days 앨범은 내가 직접 초대한 가족만 참여할 수 있어요.<br />
                            초대코드를 통해서만 들어올 수 있으니,<br />
                            우리 가족의 소중한 일상을 안심하고 나누어 보세요.
                        </SecDesc>
                    </Box>

                    {/* Right: auto-playing images */}
                    <Box sx={{ flex: 1, minWidth: 0, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', position: 'relative', minHeight: { mobile: maxImgHeight > 0 ? `${maxImgHeight}px` : '100vw', laptop: maxImgHeight > 0 ? `${maxImgHeight}px` : '520px' } }}>
                        {IMAGES.map((img, i) => (
                            <Box
                                key={i}
                                component="img"
                                src={img}
                                alt={`section3 img ${i + 1}`}
                                onLoad={handleImgLoad}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    width: { mobile: '240px', tablet: '54%', laptop: '410px' },
                                    height: 'auto',
                                    borderRadius: '20px',
                                    transform: 'translateY(-50%)',
                                    visibility: activeIdx === i ? 'visible' : 'hidden',
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
