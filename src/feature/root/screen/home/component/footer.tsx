import Box from '@mui/material/Box';
import { Link } from '@tanstack/react-router';
import { C } from '../constants';

export default function Footer() {
    return (
        <Box component="footer" sx={{ background: C.bgDark, color: 'rgba(255,255,255,.4)', p: '1.5rem 5%' }}>
            <Box sx={{ maxWidth: '1100px', mx: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', pt: '2rem', fontSize: '12px', fontWeight: 500, letterSpacing: '.018px' }}>
                <Box component="span">© 2025 Little Days. All rights reserved.</Box>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    <Link to="/policy/service" style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,.25)', textDecoration: 'none' }}>
                        이용약관
                    </Link>
                    <Link to="/policy/privacy" style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,.25)', textDecoration: 'none' }}>
                        개인정보처리방침
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
