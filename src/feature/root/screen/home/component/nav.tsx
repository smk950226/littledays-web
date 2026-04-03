import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { C, font } from '../constants';
import { goStore } from '@/common/helper/store';
import logo from '@/common/asset/asset/svg/logo.svg';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Box
            component="nav"
            sx={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                px: `max(5%, calc((100% - 1200px) / 2))`,
                background: scrolled ? 'rgba(255,255,255,.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: scrolled ? `1px solid ${C.borderNeutral}` : '1px solid transparent',
                transition: 'background .3s, backdrop-filter .3s, border-color .3s',
            }}
        >
            <Box component="a" href="#" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Box component="img" src={logo} alt="Little Days" sx={{ height: '28px', width: 'auto' }} />
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
