import Box from '@mui/material/Box';
import { Link } from '@tanstack/react-router';

import useI18n from '@/common/i18n/hook/use_i18n';

export default function Footer() {
    const { t } = useI18n();

    return (
        <Box
            component="footer"
            sx={{ background: '#fff', color: '#888', p: '1.5rem 5%' }}
        >
            <Box
                sx={{
                    maxWidth: '1200px',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px',
                    pt: '2rem',
                    pb: '32px',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '.018px',
                }}
            >
                <Box sx={{ display: 'flex', gap: '16px' }}>
                    <Link
                        to="/policy/service"
                        style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            color: '#aaa',
                            textDecoration: 'none',
                        }}
                    >
                        {t('policyService')}
                    </Link>
                    <Link
                        to="/policy/privacy"
                        style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            color: '#aaa',
                            textDecoration: 'none',
                        }}
                    >
                        {t('policyPrivacy')}
                    </Link>
                </Box>
                <Box component="span">
                    {t('copyright', {
                        year: new Date().getFullYear(),
                    })}
                </Box>
            </Box>
        </Box>
    );
}
