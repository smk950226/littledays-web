import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { C } from '../constants';
import Reveal from './reveal';
import { Eyebrow, SecTitle, SecDesc } from './shared';

const CARDS = [
    { num: '01', tag: '🔒 안전', title: '우리 가족만의 비공개 공간', desc: '초대한 가족 외에는 아무도 볼 수 없습니다. 아이의 사진이 무단으로 사용되거나 외부에 노출될 걱정이 없습니다.', delay: 0 },
    { num: '02', tag: '💛 무료', title: '완전 무료, 숨겨진 요금 없음', desc: '별도 결제 없이 모든 기능을 무료로 이용하세요. 아이를 키우는 것만으로도 충분히 바쁘니까요.', delay: 0.1 },
    { num: '03', tag: '🌿 원본', title: '원본 품질, 손실 없는 보관', desc: '사진을 압축하거나 변환하지 않습니다. 촬영한 그대로 저장하고 언제든 원본 파일로 다운로드할 수 있습니다.', delay: 0.2 },
];

export default function WhySection() {
    return (
        <Box component="section" id="why" sx={{ py: '7rem', px: '5%', background: C.bgDark2 }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
                <Reveal><Eyebrow light>왜 Little Days인가요?</Eyebrow></Reveal>
                <Reveal><SecTitle light>아기를 위해 설계된<br />가장 안전한 공간</SecTitle></Reveal>
                <Reveal><SecDesc light>우리 아이의 사진은 가족만을 위한 공간에 안전하게 보관됩니다.</SecDesc></Reveal>
                <Box sx={{ mt: '48px', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: '16px' }}>
                    {CARDS.map(({ num, tag, title, desc, delay }) => (
                        <Reveal key={num} delay={delay}>
                            <Box sx={{
                                background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)',
                                borderRadius: '18px', p: '28px 24px', height: '100%',
                                transition: 'background .2s, border-color .2s',
                                '&:hover': { background: 'rgba(255,255,255,.07)', borderColor: alpha(C.primary, 0.3) },
                            }}>
                                <Box sx={{ fontSize: '42px', fontWeight: 700, color: alpha(C.primary, 0.15), lineHeight: 1, mb: '14px', fontStyle: 'italic', letterSpacing: '-1px' }}>{num}</Box>
                                <Box sx={{ display: 'inline-block', background: alpha(C.primary, 0.1), border: `1px solid ${alpha(C.primary, 0.2)}`, color: C.primary, fontSize: '12px', fontWeight: 500, letterSpacing: '.018px', px: '10px', py: '3px', borderRadius: '100px', mb: '12px' }}>{tag}</Box>
                                <Box component="h3" sx={{ fontSize: '18px', fontWeight: 600, letterSpacing: '.18px', color: '#FFF', mb: '8px', fontFamily: 'inherit' }}>{title}</Box>
                                <Box component="p" sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: 'rgba(255,255,255,.4)', lineHeight: 1.7, m: 0 }}>{desc}</Box>
                            </Box>
                        </Reveal>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
