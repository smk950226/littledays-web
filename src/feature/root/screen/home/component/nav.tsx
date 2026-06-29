import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { C, font } from '../constants';
import { goStore } from '@/common/helper/store';
import useI18n from '@/common/i18n/hook/use_i18n';
import SvgIcon from '@/common/component/image/icon/svg_icon';
import SvgIcons from '@/common/asset/svg_icons';
import language from '@/common/i18n/constant/locale';

export default function Nav() {
    const { t, locale, setLocale } = useI18n();

    const [scrolled, setScrolled] = useState(false);
    const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Box
            component="nav"
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: `max(5%, calc((100% - 1200px) / 2))`,
                background: scrolled ? 'rgba(255,255,255,.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: scrolled
                    ? `1px solid ${C.borderNeutral}`
                    : '1px solid transparent',
                transition:
                    'background .3s, backdrop-filter .3s, border-color .3s',
            }}
        >
            <Box
                component="a"
                href="#"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                }}
            >
                <SvgIcon
                    icon={SvgIcons.icon}
                    height={36}
                    sx={{ display: { mobile: 'flex', tablet: 'none' } }}
                />
                <SvgIcon
                    icon={SvgIcons.logo}
                    height={28}
                    sx={{ display: { mobile: 'none', tablet: 'flex' } }}
                />
            </Box>
            <Box
                component="ul"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { mobile: '18px', tablet: '24px' },
                    listStyle: 'none',
                    m: 0,
                    p: 0,
                }}
            >
                {/* Mobile: globe icon + dropdown */}
                <Box
                    component="li"
                    sx={{
                        display: { mobile: 'flex', tablet: 'none' },
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="button"
                        onClick={(e: React.MouseEvent<HTMLElement>) =>
                            setLangAnchor(e.currentTarget)
                        }
                        sx={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            p: '6px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'background .15s',
                            '&:hover': { background: 'rgba(0,0,0,.06)' },
                        }}
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={C.text}
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <ellipse cx="12" cy="12" rx="4" ry="10" />
                            <path d="M2 12h20" />
                        </svg>
                    </Box>
                    <Menu
                        anchorEl={langAnchor}
                        open={Boolean(langAnchor)}
                        onClose={() => setLangAnchor(null)}
                        slotProps={{
                            list: { sx: { py: 0 } },
                            paper: {
                                sx: {
                                    mt: '4px',
                                    borderRadius: '10px',
                                    minWidth: 120,
                                    fontFamily: font,
                                    bgcolor: '#fff',
                                },
                            },
                        }}
                    >
                        {language.supported.map(item => (
                            <MenuItem
                                key={item.value}
                                selected={locale === item.value}
                                onClick={() => {
                                    setLocale(item.value);
                                    setLangAnchor(null);
                                }}
                                sx={{
                                    fontFamily: font,
                                    fontSize: '14px',
                                    fontWeight:
                                        locale === item.value ? 600 : 400,
                                    color:
                                        locale === item.value ? '#111' : '#666',
                                    '&:hover': { bgcolor: 'rgba(0,0,0,.06)' },
                                    '&.Mui-selected': {
                                        bgcolor: 'rgba(0,0,0,.06)',
                                    },
                                    '&.Mui-selected:hover': {
                                        bgcolor: 'rgba(0,0,0,.06)',
                                    },
                                }}
                            >
                                {t(item.name)}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                {/* Tablet+: KOR / ENG text buttons */}
                <Box
                    component="li"
                    sx={{
                        display: { mobile: 'none', tablet: 'flex' },
                        alignItems: 'center',
                        gap: '4px',
                    }}
                >
                    {[
                        { value: 'ko', label: 'KOR' },
                        { value: 'en', label: 'ENG' },
                    ].map(item => (
                        <Box
                            key={item.value}
                            component="button"
                            onClick={() => setLocale(item.value as 'ko' | 'en')}
                            sx={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                px: '8px',
                                py: '6px',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: locale === item.value ? 700 : 400,
                                color:
                                    locale === item.value
                                        ? C.text
                                        : 'rgba(0,0,0,.4)',
                                fontFamily: font,
                                transition: 'background .15s',
                                '&:hover': { background: 'rgba(0,0,0,.06)' },
                            }}
                        >
                            {item.label}
                        </Box>
                    ))}
                </Box>
                <Box component="li">
                    <Box
                        component="button"
                        onClick={goStore}
                        sx={{
                            background: C.primary,
                            color: C.text,
                            px: '18px',
                            py: '8px',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: 600,
                            letterSpacing: '.14px',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: font,
                            transition: 'opacity .15s',
                            '&:hover': {
                                opacity: 0.82,
                            },
                        }}
                    >
                        {t('homeNavDownload')}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
