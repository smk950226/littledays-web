import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { C, btnPrimary } from '../constants';
import Reveal from './reveal';
import { Eyebrow, SecTitle, SecDesc } from './shared';
import { goStore } from '@/common/helper/store';

function StorageBar() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const t = setTimeout(() => setWidth(72), 300);
        return () => clearTimeout(t);
    }, []);

    return (
        <Box sx={{
            height: '100%', borderRadius: '100px',
            background: `linear-gradient(90deg, ${C.primary}, ${C.primaryDark})`,
            width: `${width}%`,
            transition: 'width 1.5s cubic-bezier(.16,1,.3,1)',
        }} />
    );
}

export default function FreeSection() {
    return (
        <Box component="section" sx={{ py: '7rem', px: '5%', background: C.bgSub }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: '6rem', alignItems: 'center' }}>
                <Reveal>
                    <Box sx={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: '18px', p: '22px', boxShadow: `0 4px 20px ${alpha(C.primary, 0.08)}` }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '14px' }}>
                            <Box sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: C.textMuted }}>저장 용량</Box>
                            <Box sx={{ fontSize: '18px', fontWeight: 600, letterSpacing: '.18px', color: C.textBrand }}>무제한 ∞</Box>
                        </Box>
                        <Box sx={{ height: '8px', background: C.bgTint, borderRadius: '100px', overflow: 'hidden', mb: '8px' }}>
                            <StorageBar />
                        </Box>
                        <Box component="p" sx={{ fontSize: '12px', fontWeight: 500, letterSpacing: '.018px', color: C.textMuted, textAlign: 'center' }}>용량 걱정 없이 아이의 모든 순간을 담으세요</Box>
                    </Box>
                </Reveal>
                <Reveal delay={0.1}>
                    <Eyebrow>무료 &amp; 무제한</Eyebrow>
                    <SecTitle>사진이 아무리 많아도<br />걱정 없어요</SecTitle>
                    <SecDesc>아이의 성장은 빠릅니다. 그 순간들을 놓치지 않도록, 용량 걱정 없이 마음껏 촬영하세요. Little Days는 모든 사진을 원본 그대로, 무제한으로 보관합니다.</SecDesc>
                    <Box component="button" onClick={goStore} sx={{ ...btnPrimary, mt: '28px' }}>지금 바로 무료로 시작하기 →</Box>
                </Reveal>
            </Box>
        </Box>
    );
}
