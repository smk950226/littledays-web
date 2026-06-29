import Box from '@mui/material/Box';
import { font } from '../constants';
import iosIcon from '@/common/asset/asset/img/ios.png';
import andIcon from '@/common/asset/asset/img/and.png';
import useI18n from '@/common/i18n/hook/use_i18n';

const AppStoreIcon = () => (
    <Box component="img" src={iosIcon} sx={{ width: '24px', height: '24px' }} />
);

const GooglePlayIcon = () => (
    <Box component="img" src={andIcon} sx={{ width: '24px', height: '24px' }} />
);

const REVIEWS = [
    {
        text: 'homeTestimonialsReview1',
        store: 'appstore' as const,
    },
    {
        text: 'homeTestimonialsReview2',
        store: 'google' as const,
    },
    {
        text: 'homeTestimonialsReview3',
        store: 'appstore' as const,
    },
    {
        text: 'homeTestimonialsReview4',
        store: 'google' as const,
    },
    {
        text: 'homeTestimonialsReview5',
        store: 'appstore' as const,
    },
    {
        text: 'homeTestimonialsReview6',
        store: 'google' as const,
    },
];

function ReviewCard({
    text,
    store,
}: {
    text: string;
    store: 'appstore' | 'google';
}) {
    const { t } = useI18n();

    return (
        <Box
            sx={{
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
            }}
        >
            <Box
                component="p"
                sx={{
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '22px',
                    color: '#121212',
                    m: 0,
                }}
            >
                {t(text)}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    mt: '0px',
                }}
            >
                <Box sx={{ flexShrink: 0 }}>
                    {store === 'appstore' ? (
                        <AppStoreIcon />
                    ) : (
                        <GooglePlayIcon />
                    )}
                </Box>
                <Box
                    sx={{ fontSize: '14px', fontWeight: 600, color: '#121212' }}
                >
                    {store === 'appstore'
                        ? t('homeTestimonialsAppstoreReview')
                        : t('homeTestimonialsGoogleReview')}
                </Box>
            </Box>
        </Box>
    );
}

const CARD_WIDTH = 320;
const GAP = 20;
const TRACK_WIDTH = REVIEWS.length * (CARD_WIDTH + GAP);

export default function TestimonialsSection() {
    const { t } = useI18n();

    return (
        <Box
            component="section"
            sx={{
                pt: { mobile: '120px', tablet: '125px', laptop: '140px' },
                pb: { mobile: '120px', tablet: '125px', laptop: '140px' },
                background: 'linear-gradient(to bottom, #F9F9F9, #ffffff)',
                overflow: 'hidden',
            }}
        >
            {/* Title */}
            <Box
                sx={{
                    textAlign: 'center',
                    mb: { mobile: '80px', tablet: '60px', laptop: '90px' },
                    px: '5%',
                }}
            >
                <Box
                    component="h2"
                    sx={{
                        fontSize: {
                            mobile: '32px',
                            tablet: '36px',
                            laptop: '46px',
                        },
                        fontWeight: 700,
                        lineHeight: {
                            mobile: '42px',
                            tablet: '48px',
                            laptop: '58px',
                        },
                        letterSpacing: '-.5px',
                        color: '#121212',
                        mb: '10px',
                        fontFamily: font,
                    }}
                >
                    {t('homeTestimonialsTitle')}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                    }}
                >
                    <Box
                        sx={{
                            fontSize: '18px',
                            fontWeight: 500,
                            color: '#4A4A4A',
                        }}
                    >
                        {t('homeTestimonialsRating')}
                    </Box>
                    <Box sx={{ display: 'flex', gap: '4px' }}>
                        {[1, 2, 3, 4, 5].map(i => (
                            <Box
                                key={i}
                                component="svg"
                                sx={{ width: '16px', height: '16px' }}
                                viewBox="445 360 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M452.272 360.364C453.043 359.039 454.957 359.039 455.728 360.364L457.219 362.924C457.502 363.409 457.975 363.753 458.524 363.872L461.42 364.499C462.918 364.823 463.509 366.643 462.488 367.786L460.514 369.995C460.14 370.414 459.959 370.971 460.015 371.529L460.314 374.477C460.468 376.002 458.92 377.127 457.517 376.509L454.806 375.314C454.293 375.087 453.707 375.087 453.193 375.314L450.482 376.509C449.08 377.127 447.532 376.002 447.686 374.477L447.985 371.529C448.041 370.971 447.86 370.414 447.486 369.995L445.512 367.786C444.491 366.643 445.082 364.823 446.58 364.499L449.476 363.872C450.025 363.753 450.498 363.409 450.781 362.924L452.272 360.364Z"
                                    fill="#FFCC00"
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Rolling cards */}
            <Box sx={{ position: 'relative' }}>
                {/* Fade edges */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '120px',
                        zIndex: 2,
                        background:
                            'linear-gradient(to right, #F9F9F9, transparent)',
                        pointerEvents: 'none',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '120px',
                        zIndex: 2,
                        background:
                            'linear-gradient(to left, #F9F9F9, transparent)',
                        pointerEvents: 'none',
                    }}
                />

                <Box
                    sx={{
                        display: 'flex',
                        gap: `${GAP}px`,
                        width: 'max-content',
                        animation: `marquee 80s linear infinite`,
                        '@keyframes marquee': {
                            '0%': { transform: 'translateX(0)' },
                            '100%': {
                                transform: `translateX(-${TRACK_WIDTH}px)`,
                            },
                        },
                    }}
                >
                    {/* Render twice for seamless loop */}
                    {[...REVIEWS, ...REVIEWS].map((r, i) => (
                        <ReviewCard key={i} text={r.text} store={r.store} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
