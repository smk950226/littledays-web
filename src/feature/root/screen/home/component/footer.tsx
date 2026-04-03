import Box from '@mui/material/Box';
import { Link } from '@tanstack/react-router';
import { C } from '../constants';

export default function Footer() {
    return (
        <Box component="footer" sx={{ background: '#fff', color: '#888', p: '1.5rem 5%' }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px', pt: '2rem', pb: '32px', fontSize: '12px', fontWeight: 500, letterSpacing: '.018px' }}>
                <Box sx={{ display: 'flex', gap: '16px' }}>
                    <Link to="/policy/service" style={{ fontSize: '12px', fontWeight: 500, color: '#aaa', textDecoration: 'none' }}>
                        이용약관
                    </Link>
                    <Link to="/policy/privacy" style={{ fontSize: '12px', fontWeight: 500, color: '#aaa', textDecoration: 'none' }}>
                        개인정보처리방침
                    </Link>
                </Box>
                <Box component="span">© 2025 Little Days. All rights reserved.</Box>
            </Box>
        </Box>
    );
}
