import Box from '@mui/material/Box';
import { font } from '../constants';
import { goAppStore, goPlayStore } from '@/common/helper/store';
import appIcon from '@/common/asset/asset/img/app icon.png';
import bgImg from '@/common/asset/asset/img/bg.png';
import iosIcon from '@/common/asset/asset/img/ios.png';
import andIcon from '@/common/asset/asset/img/and.png';

export default function CtaSection() {
    return (
        <Box
            component="section"
            sx={{ background: '#fff', pt: 0, pb: '60px', px: '5%', textAlign: 'center' }}
        >
            <Box sx={{
                maxWidth: '1000px', mx: 'auto',
                background: `#F4FBFF url(${bgImg}) center/cover no-repeat`,
                borderRadius: '32px',
                py: '80px', px: '60px',
                textAlign: 'center',
            }}>
                <Box component="img" src={appIcon} alt="Little Days" sx={{ width: '80px', height: '80px', mb: '32px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }} />

                <Box
                    component="h2"
                    sx={{ fontSize: '38px', fontWeight: 700, lineHeight: '50px', letterSpacing: '-.5px', color: '#121212', mb: '12px', fontFamily: font }}
                >
                    오늘도 아이는 자라고 있어요.<br />그 순간을 놓치지 마세요.
                </Box>

                <Box
                    component="p"
                    sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px', color: 'rgba(17,17,17,0.6)', maxWidth: '400px', mx: 'auto', mb: '40px' }}
                >
                    Little Days로 아이의 소중한 순간을 기록해보세요!
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    {/* Google Play */}
                    <Box
                        component="button"
                        onClick={goPlayStore}
                        sx={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            background: '#111', color: '#fff',
                            px: '28px', py: '16px', borderRadius: '14px',
                            fontSize: '16px', fontWeight: 600, fontFamily: font,
                            border: 'none', cursor: 'pointer',
                            transition: 'background .15s',
                            '&:hover': { background: '#333' },
                        }}
                    >
                        <Box component="img" src={andIcon} sx={{ width: '22px', height: '22px', flexShrink: 0 }} />
                        Google Play
                    </Box>

                    {/* App Store */}
                    <Box
                        component="button"
                        onClick={goAppStore}
                        sx={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            background: '#111', color: '#fff',
                            px: '28px', py: '16px', borderRadius: '14px',
                            fontSize: '16px', fontWeight: 600, fontFamily: font,
                            border: 'none', cursor: 'pointer',
                            transition: 'background .15s',
                            '&:hover': { background: '#333' },
                        }}
                    >
                        <Box component="img" src={iosIcon} sx={{ width: '22px', height: '22px', flexShrink: 0, filter: 'brightness(0) invert(1)' }} />
                        App Store
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
