import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { C } from '../constants';
import Reveal from './reveal';
import { Eyebrow, SecTitle, SecDesc } from './shared';

const CARDS = [
    {
        icon: '😮‍💨', who: '육아 중인 엄마·아빠',
        pain: '친가에 보내고, 외가에 또 보내고…',
        strike: '같은 사진을 두 번 전송',
        sol: <>한 번만 올리면 <strong style={{ color: C.textBrand }}>양가 부모님이 동시에 확인</strong>할 수 있어요. 카톡 화질 압축도 없어요.</>,
        hl: true, delay: 0,
    },
    {
        icon: '👵', who: '멀리 사는 조부모님',
        pain: '손주 사진이 보고 싶은데',
        strike: '며느리·딸한테 매번 요청하기 미안하고',
        sol: <>앱을 열면 <strong style={{ color: C.textBrand }}>손주의 최신 사진이 항상 업데이트</strong>돼 있어요. 좋아요·댓글로 사랑도 표현하세요.</>,
        hl: false, delay: 0.1,
    },
    {
        icon: '📦', who: '추억을 소중히 하는 부모',
        pain: '스마트폰 용량이 부족해서',
        strike: '소중한 아기 사진을 지워야 할 때',
        sol: <><strong style={{ color: C.textBrand }}>무제한·원본 화질</strong>로 모두 저장하세요. 언제든 다시 내려받을 수 있어요.</>,
        hl: false, delay: 0.2,
    },
];

export default function PersonaSection() {
    return (
        <Box component="section" id="persona" sx={{ py: '7rem', px: '5%', background: C.bg }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', textAlign: 'center' }}>
                <Reveal><Eyebrow>이런 분들께 딱 맞아요</Eyebrow></Reveal>
                <Reveal><SecTitle sx={{ textAlign: 'center' }}>혹시 이런 경험, 있으신가요?</SecTitle></Reveal>
                <Reveal><SecDesc sx={{ mx: 'auto', textAlign: 'center' }}>많은 부모님들이 같은 불편함을 겪고 있어요. Little Days가 해결해드립니다.</SecDesc></Reveal>
                <Box sx={{ mt: '40px', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: '16px' }}>
                    {CARDS.map(({ icon, who, pain, strike, sol, hl, delay }) => (
                        <Reveal key={who} delay={delay}>
                            <Box sx={{
                                background: hl ? C.bgTint : C.bgSub,
                                border: `1px solid ${hl ? alpha(C.primary, 0.3) : C.borderNeutral}`,
                                borderRadius: '18px', p: '24px 20px', textAlign: 'left', height: '100%',
                                transition: 'transform .22s, box-shadow .22s, border-color .22s',
                                '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 16px 40px ${alpha(C.primary, 0.12)}`, borderColor: C.borderStrong },
                            }}>
                                <Box sx={{ width: '48px', height: '48px', borderRadius: '14px', background: alpha(C.primary, 0.1), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', mb: '16px' }}>{icon}</Box>
                                <Box component="p" sx={{ fontSize: '12px', fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', color: C.textBrand, mb: '6px' }}>{who}</Box>
                                <Box component="p" sx={{ fontSize: '16px', fontWeight: 600, letterSpacing: '.08px', color: C.text, lineHeight: 1.4, mb: '14px' }}>
                                    {pain}<br />
                                    <Box component="span" sx={{ textDecoration: 'line-through', color: C.textMuted, fontWeight: 400 }}>{strike}</Box>
                                </Box>
                                <Box component="p" sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: C.textSec, lineHeight: 1.65, pt: '14px', borderTop: `1px solid ${C.borderNeutral}` }}>{sol}</Box>
                            </Box>
                        </Reveal>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
