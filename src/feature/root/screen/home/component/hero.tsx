import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { C, btnPrimary, btnSecondary, font } from '../constants';
import { goStore } from '@/common/helper/store';

const AVATARS = [
    { bg: '#76D1FF', color: '#0070A8', label: '엄' },
    { bg: '#5BC8A8', color: 'white', label: '아' },
    { bg: '#A890D8', color: 'white', label: '할' },
];

const GRID_ITEMS = [
    { bg: '#D6EEFF', icon: '🍼', label: '처음 이유식 🥣', tall: true },
    { bg: '#D4F5F0', icon: '😄', label: '첫 웃음' },
    { bg: '#FFE8D6', icon: '🚶', label: '첫 걸음마!' },
    { bg: '#DCEEFF', icon: '🎂', label: '100일 기념 🎉', wide: true },
];

export default function HeroSection() {
    return (
        <Box
            component="section"
            sx={{
                minHeight: '100vh', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                pt: '100px', pb: '60px', px: '5%',
                position: 'relative', overflow: 'hidden', background: C.bg,
            }}
        >
            {/* Glow blobs */}
            <Box sx={{
                position: 'absolute', pointerEvents: 'none', borderRadius: '50%',
                width: '700px', height: '700px',
                background: `radial-gradient(circle,${alpha(C.primary, 0.18)} 0%,transparent 65%)`,
                top: '-150px', right: '-200px',
                '@keyframes gf': { '0%,100%': { transform: 'translateY(0) scale(1)' }, '50%': { transform: 'translateY(-24px) scale(1.03)' } },
                animation: 'gf 9s ease-in-out infinite',
            }} />
            <Box sx={{
                position: 'absolute', pointerEvents: 'none', borderRadius: '50%',
                width: '500px', height: '500px',
                background: `radial-gradient(circle,${alpha(C.primary, 0.1)} 0%,transparent 65%)`,
                bottom: 0, left: '-150px',
                '@keyframes gf2': { '0%,100%': { transform: 'translateY(0) scale(1)' }, '50%': { transform: 'translateY(-24px) scale(1.03)' } },
                animation: 'gf2 11s ease-in-out infinite reverse',
            }} />

            {/* Badge */}
            <Box sx={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: alpha(C.primary, 0.1), border: `1px solid ${C.borderStrong}`,
                color: C.textBrand,
                fontSize: '12px', fontWeight: 500, letterSpacing: '.018px',
                px: '12px', py: '5px', borderRadius: '100px', mb: '28px',
                '@keyframes fu': { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
                animation: 'fu .5s ease both',
            }}>
                <Box sx={{
                    width: '6px', height: '6px', borderRadius: '50%', background: C.primary,
                    '@keyframes pulse': { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: 0.4, transform: 'scale(1.4)' } },
                    animation: 'pulse 2s infinite',
                }} />
                지금 무료로 시작할 수 있어요
            </Box>

            {/* Title */}
            <Box
                component="h1"
                sx={{
                    fontSize: 'clamp(32px, 5.5vw, 54px)', fontWeight: 700,
                    lineHeight: 1.18, letterSpacing: '-.5px', color: C.text,
                    mb: '8px', fontFamily: font, animation: 'fu .5s .08s ease both',
                }}
            >
                아이의 모든 순간을<br />
                <Box
                    component="span"
                    sx={{
                        color: C.primaryDarker, position: 'relative',
                        '&::after': {
                            content: '""', position: 'absolute',
                            left: 0, bottom: '-3px', right: 0,
                            height: '3px', background: C.primary, borderRadius: '2px',
                        },
                    }}
                >
                    선명하게
                </Box>{' '}
                간직하세요
            </Box>


            {/* Pain → Solution */}
            <Box sx={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: C.bgTint, border: `1px solid ${C.border}`,
                borderRadius: '10px', px: '18px', py: '10px', mb: '20px',
                flexWrap: 'wrap', justifyContent: 'center', animation: 'fu .5s .18s ease both',
            }}>
                <Box sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: C.textMuted, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Box sx={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(17,17,17,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: C.textMuted, flexShrink: 0 }}>✕</Box>
                    친가에 보내고, 외가에 또 보내고…
                </Box>
                <Box sx={{ color: C.primaryDark, fontSize: '14px' }}>→</Box>
                <Box sx={{ fontSize: '14px', fontWeight: 600, letterSpacing: '.028px', color: C.textBrand, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Box sx={{ width: '16px', height: '16px', borderRadius: '50%', background: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: 'white', flexShrink: 0 }}>✓</Box>
                    한 번 올리면 양가가 함께 봐요
                </Box>
            </Box>

            <Box component="p" sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.75, letterSpacing: '.08px', color: C.textSec, maxWidth: '500px', mx: 'auto', mb: '32px', animation: 'fu .5s .22s ease both' }}>
                Little Days는 무료·무제한으로 아기 사진을 원본 그대로 저장하는 아기 앨범 서비스입니다.<br />
                매일 자라는 아이의 모든 순간을 선명하게 기록하세요.
            </Box>

            {/* CTA */}
            <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', mb: '52px', animation: 'fu .5s .28s ease both' }}>
                <Box component="button" onClick={goStore} sx={btnPrimary}>무료로 시작하기 →</Box>
                <Box component="a" href="#features" sx={btnSecondary}>기능 살펴보기</Box>
            </Box>

            {/* Phone mockup */}
            <Box sx={{ animation: 'fu .7s .35s ease both', display: { xs: 'none', sm: 'block' } }}>
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                    <FloatCard side="left" icon="💛" label="100% 무료" value="용량 제한 없이" animDelay="0s" />

                    <Box sx={{ display: 'inline-block', background: '#111', borderRadius: '40px', p: '10px', boxShadow: '0 32px 80px rgba(17,17,17,.2),0 0 0 1px rgba(255,255,255,.08)', width: '256px' }}>
                        <Box sx={{ background: C.bgSub, borderRadius: '32px', overflow: 'hidden', aspectRatio: '9/19', display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ height: '28px', background: '#111', borderRadius: '0 0 16px 16px', width: '90px', mx: 'auto', flexShrink: 0 }} />
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: '10px', pb: '8px', gap: '8px', overflow: 'hidden' }}>
                                {/* Phone header */}
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Box sx={{ fontSize: '12px', fontWeight: 700, color: C.text, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Box sx={{ width: '6px', height: '6px', borderRadius: '50%', background: C.primary }} />
                                        Little Days
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        {AVATARS.map(({ bg, color, label }, i) => (
                                            <Box key={label} sx={{ width: '20px', height: '20px', borderRadius: '50%', border: `1.5px solid ${C.bgSub}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: 700, color, background: bg, ml: i === 0 ? 0 : '-6px' }}>
                                                {label}
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                                {/* Photo grid */}
                                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', flex: 1 }}>
                                    {GRID_ITEMS.map(({ bg, icon, label, tall, wide }) => (
                                        <Box key={label} sx={{ background: bg, borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '18px', position: 'relative', overflow: 'hidden', ...(tall ? { gridRow: 'span 2' } : {}), ...(wide ? { gridColumn: 'span 2', aspectRatio: '2/1' } : { aspectRatio: '1' }) }}>
                                            {icon}
                                            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(17,17,17,.55))', p: '10px 5px 4px', fontSize: '5.5px', fontWeight: 600, color: 'white', textAlign: 'center' }}>{label}</Box>
                                        </Box>
                                    ))}
                                </Box>
                                {/* Reaction */}
                                <Box sx={{ background: C.bg, borderRadius: '8px', p: '5px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                                    <Box component="span" sx={{ fontSize: '6.5px', color: C.textSec }}>❤️ 할머니: 우리 아가 🥰</Box>
                                    <Box component="strong" sx={{ fontSize: '6.5px', fontWeight: 600, color: C.textBrand }}>댓글 3</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <FloatCard side="right" icon="📸" label="선명하게" value="원본 그대로" animDelay="2s" />
                </Box>
            </Box>
        </Box>
    );
}

type FloatCardProps = { side: 'left' | 'right'; icon: string; label: string; value: string; animDelay: string };

function FloatCard({ side, icon, label, value, animDelay }: FloatCardProps) {
    return (
        <Box sx={{
            position: 'absolute', background: C.bg, border: `1px solid ${C.border}`,
            borderRadius: '12px', px: '14px', py: '10px',
            boxShadow: `0 8px 24px rgba(17,17,17,.08)`,
            whiteSpace: 'nowrap',
            ...(side === 'left' ? { left: '-130px', top: '38%' } : { right: '-130px', top: '55%' }),
            '@keyframes fy': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
            animation: `fy 5s ${animDelay} ease-in-out infinite`,
            display: { xs: 'none', lg: 'block' },
        }}>
            <Box sx={{ fontSize: '16px', mb: '3px' }}>{icon}</Box>
            <Box sx={{ fontSize: '10px', fontWeight: 500, color: C.textMuted, mb: '2px' }}>{label}</Box>
            <Box sx={{ fontSize: '16px', fontWeight: 600, letterSpacing: '.08px', color: C.text }}>{value}</Box>
        </Box>
    );
}
