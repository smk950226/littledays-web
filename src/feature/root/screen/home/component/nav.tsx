import Box from '@mui/material/Box';
import { C, font } from '../constants';
import { goStore } from '@/common/helper/store';

export default function Nav() {
    return (
        <Box
            component="nav"
            sx={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                px: '5%',
                background: 'rgba(255,255,255,.92)',
                backdropFilter: 'blur(16px)',
                borderBottom: `1px solid ${C.borderNeutral}`,
            }}
        >
            <Box
                component="a" href="#"
                sx={{ fontSize: '18px', fontWeight: 700, letterSpacing: '.18px', color: C.text, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '7px' }}
            >
                <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', background: C.primary }} />
                Little Days
            </Box>
            <Box component="ul" sx={{ display: 'flex', alignItems: 'center', gap: '1.8rem', listStyle: 'none', m: 0, p: 0 }}>
                {[
                    { href: '#features', label: '기능' },
                    { href: '#private', label: '보안' },
                    { href: '#howto', label: '사용법' },
                ].map(({ href, label }) => (
                    <Box key={href} component="li" sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box
                            component="a" href={href}
                            sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: C.textSec, textDecoration: 'none', transition: 'color .15s', '&:hover': { color: C.text } }}
                        >
                            {label}
                        </Box>
                    </Box>
                ))}
                <Box component="li">
                    <Box
                        component="button" onClick={goStore}
                        sx={{
                            background: C.primary, color: C.text,
                            px: '18px', py: '8px', borderRadius: '8px',
                            fontSize: '14px', fontWeight: 600, letterSpacing: '.14px',
                            border: 'none', cursor: 'pointer', fontFamily: font,
                            transition: 'background .15s, transform .15s',
                            '&:hover': { background: C.primaryDark, transform: 'translateY(-1px)' },
                        }}
                    >
                        무료로 시작하기 →
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
