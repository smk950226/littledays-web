import Box from '@mui/material/Box';
import { font } from '../constants';
import iosIcon from '@/common/asset/asset/img/ios.png';
import andIcon from '@/common/asset/asset/img/and.png';

const AppStoreIcon = () => (
    <Box component="img" src={iosIcon} sx={{ width: '24px', height: '24px' }} />
);

const GooglePlayIcon = () => (
    <Box component="img" src={andIcon} sx={{ width: '24px', height: '24px' }} />
);

const REVIEWS = [
    {
        text: '친가·외가에 사진을 따로따로 보내는 게 너무 번거로웠는데, 이제는 한 번만 올리면 돼요. 양가 어머님 모두 엄청 좋아하세요!',
        store: 'appstore' as const,
    },
    {
        text: '카톡으로 사진 요청하기 늘 눈치 보였는데, 이제 앱 열면 손녀 사진이 항상 있어요. 매일 들어가서 좋아요 누르고 댓글 달아요. 너무 행복해요.',
        store: 'google' as const,
    },
    {
        text: '지방에 계신 양가 부모님 모두 앱으로 손주 사진 보시는 걸 너무 좋아하세요. 가족이 더 가까워진 것 같아요.',
        store: 'appstore' as const,
    },
    {
        text: '아들한테 사진 보내달라고 하면 바쁜데 미안하잖아요. 근데 이건 내가 언제든 볼 수 있으니까. 손자 웃는 사진 보고 잠을 못 잤네요.',
        store: 'google' as const,
    },
    {
        text: '앱 설치하고 나서 할머니가 매일 아침 손주 사진 보신대요. 전화도 부쩍 늘었어요. 가족이 진짜 더 가까워진 느낌이에요.',
        store: 'appstore' as const,
    },
    {
        text: '사진 올리면 바로 알림 오는 게 너무 좋아요. 멀리 살아도 아이가 매일 옆에 있는 것 같아서 행복해요.',
        store: 'google' as const,
    },
];

function ReviewCard({ text, store }: { text: string; store: 'appstore' | 'google' }) {
    return (
        <Box sx={{
            width: '300px',
            flexShrink: 0,
            background: '#fff',
            borderRadius: '20px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
            p: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '200px',
        }}>
            <Box
                component="p"
                sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '22px', color: '#121212', m: 0 }}
            >
                {text}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mt: '0px' }}>
                <Box sx={{ flexShrink: 0 }}>
                    {store === 'appstore' ? <AppStoreIcon /> : <GooglePlayIcon />}
                </Box>
                <Box sx={{ fontSize: '14px', fontWeight: 600, color: '#121212' }}>
                    {store === 'appstore' ? '앱스토어 리뷰' : '구글 스토어 리뷰'}
                </Box>
            </Box>
        </Box>
    );
}

const CARD_WIDTH = 320;
const GAP = 20;
const TRACK_WIDTH = REVIEWS.length * (CARD_WIDTH + GAP);

export default function TestimonialsSection() {
    return (
        <Box component="section" sx={{ pt: { mobile: '120px', tablet: '125px', laptop: '140px' }, pb: { mobile: '120px', tablet: '125px', laptop: '140px' }, background: 'linear-gradient(to bottom, #F9F9F9, #ffffff)', overflow: 'hidden' }}>

            {/* Title */}
            <Box sx={{ textAlign: 'center', mb: { mobile: '80px', tablet: '60px', laptop: '90px' }, px: '5%' }}>
                <Box
                    component="h2"
                    sx={{ fontSize: { mobile: '32px', tablet: '36px', laptop: '46px' }, fontWeight: 700, lineHeight: { mobile: '42px', tablet: '48px', laptop: '58px' }, letterSpacing: '-.5px', color: '#121212', mb: '10px', fontFamily: font }}
                >
                    가족 모두가 좋아해요
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <Box sx={{ fontSize: '18px', fontWeight: 500, color: '#4A4A4A' }}>앱스토어 평점 4.9점</Box>
                    <Box sx={{ display: 'flex', gap: '4px' }}>
                        {[1,2,3,4,5].map(i => (
                            <Box key={i} component="svg" sx={{ width: '16px', height: '16px' }} viewBox="445 360 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M452.272 360.364C453.043 359.039 454.957 359.039 455.728 360.364L457.219 362.924C457.502 363.409 457.975 363.753 458.524 363.872L461.42 364.499C462.918 364.823 463.509 366.643 462.488 367.786L460.514 369.995C460.14 370.414 459.959 370.971 460.015 371.529L460.314 374.477C460.468 376.002 458.92 377.127 457.517 376.509L454.806 375.314C454.293 375.087 453.707 375.087 453.193 375.314L450.482 376.509C449.08 377.127 447.532 376.002 447.686 374.477L447.985 371.529C448.041 370.971 447.86 370.414 447.486 369.995L445.512 367.786C444.491 366.643 445.082 364.823 446.58 364.499L449.476 363.872C450.025 363.753 450.498 363.409 450.781 362.924L452.272 360.364Z" fill="#FFCC00"/>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Rolling cards */}
            <Box sx={{ position: 'relative' }}>
                {/* Fade edges */}
                <Box sx={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
                    background: 'linear-gradient(to right, #F9F9F9, transparent)',
                    pointerEvents: 'none',
                }} />
                <Box sx={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
                    background: 'linear-gradient(to left, #F9F9F9, transparent)',
                    pointerEvents: 'none',
                }} />

                <Box sx={{
                    display: 'flex',
                    gap: `${GAP}px`,
                    width: 'max-content',
                    animation: `marquee 80s linear infinite`,
                    '@keyframes marquee': {
                        '0%': { transform: 'translateX(0)' },
                        '100%': { transform: `translateX(-${TRACK_WIDTH}px)` },
                    },
                }}>
                    {/* Render twice for seamless loop */}
                    {[...REVIEWS, ...REVIEWS].map((r, i) => (
                        <ReviewCard key={i} text={r.text} store={r.store} />
                    ))}
                </Box>
            </Box>

        </Box>
    );
}
