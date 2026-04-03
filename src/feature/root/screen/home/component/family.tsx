import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { C } from '../constants';
import Reveal from './reveal';
import { Eyebrow, SecTitle, SecDesc } from './shared';

const CARDS = [
    { icon: '📱', title: '간편한 가족 초대', desc: '링크 하나로 가족을 초대하세요. 기술에 익숙하지 않은 어르신도 쉽게 사용할 수 있습니다.', delay: 0 },
    { icon: '💬', title: '실시간 댓글과 반응', desc: '사진마다 댓글을 남기고, 이모지 반응을 보내세요. 거리를 넘어 가족의 따뜻한 마음이 전달됩니다.', delay: 0.1 },
    { icon: '🔔', title: '새 사진 알림', desc: '아이의 새 사진이 올라오면 가족 모두에게 알림이 전송됩니다. 놓치는 순간 없이 함께할 수 있어요.', delay: 0.2 },
];

export default function FamilySection() {
    return (
        <Box component="section" id="family" sx={{ py: '7rem', px: '5%', background: C.bgSub }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', textAlign: 'center' }}>
                <Reveal><Eyebrow>가족과 함께</Eyebrow></Reveal>
                <Reveal><SecTitle sx={{ textAlign: 'center' }}>온 가족이 함께 보고,<br />함께 느끼는 성장 앨범</SecTitle></Reveal>
                <Reveal><SecDesc sx={{ mx: 'auto', textAlign: 'center' }}>멀리 사는 양가 부모님도 아이의 성장을 실시간으로 함께할 수 있습니다.</SecDesc></Reveal>
                <Box sx={{ mt: '40px', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: '16px' }}>
                    {CARDS.map(({ icon, title, desc, delay }) => (
                        <Reveal key={title} delay={delay}>
                            <Box sx={{
                                background: C.bg, border: `1px solid ${C.borderNeutral}`, borderRadius: '18px', p: '24px 20px', textAlign: 'left', height: '100%',
                                transition: 'transform .22s, box-shadow .22s',
                                '&:hover': { transform: 'translateY(-4px)', boxShadow: `0 12px 32px ${alpha(C.primary, 0.1)}` },
                            }}>
                                <Box sx={{ width: '44px', height: '44px', borderRadius: '12px', background: alpha(C.primary, 0.1), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', mb: '14px' }}>{icon}</Box>
                                <Box component="h3" sx={{ fontSize: '16px', fontWeight: 600, letterSpacing: '.08px', color: C.text, mb: '6px', fontFamily: 'inherit' }}>{title}</Box>
                                <Box component="p" sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: C.textSec, lineHeight: 1.65, m: 0 }}>{desc}</Box>
                            </Box>
                        </Reveal>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
