import Box from '@mui/material/Box';
import { C, btnDark, font } from '../constants';
import Reveal from './reveal';
import { Eyebrow } from './shared';
import { goStore } from '@/common/helper/store';

export default function CtaSection() {
    return (
        <Box component="section" sx={{ background: C.primary, py: '7rem', px: '5%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', pointerEvents: 'none', borderRadius: '50%', width: '600px', height: '600px', background: 'rgba(255,255,255,.12)', top: '-200px', left: '-100px' }} />
            <Reveal><Eyebrow>지금 시작하세요</Eyebrow></Reveal>
            <Reveal>
                <Box component="h2" sx={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.22, letterSpacing: '-.3px', color: C.text, mb: '12px', fontFamily: font }}>
                    오늘도 아이는 자라고 있어요.<br />그 순간을 놓치지 마세요.
                </Box>
            </Reveal>
            <Reveal>
                <Box component="p" sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.75, letterSpacing: '.08px', color: 'rgba(17,17,17,.6)', maxWidth: '420px', mx: 'auto', mb: '32px' }}>
                    Little Days는 무료입니다. 지금 바로 시작해서 아이의 소중한 순간을 기록해보세요.
                </Box>
            </Reveal>
            <Reveal>
                <Box component="button" onClick={goStore} sx={btnDark}>무료로 앨범 만들기 →</Box>
            </Reveal>
        </Box>
    );
}
