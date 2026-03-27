import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { C } from '../constants';
import Reveal from './reveal';
import { Eyebrow, SecTitle, SecDesc } from './shared';

const REVIEWS = [
    { gp: false, text: '"친가·외가에 똑같은 사진을 따로따로 보내는 게 너무 번거로웠는데, 이제는 한 번만 올리면 돼요. 양가 어머님 모두 엄청 좋아하세요!"', avBg: '#76D1FF', avColor: '#0070A8', avLabel: '김', name: '김지수님', role: '15개월 아기 엄마 · 서울', delay: 0 },
    { gp: true, gpLabel: '👵 조부모님 후기', text: '"카톡으로 사진 요청하기 늘 눈치 보였는데, 이제 앱 열면 손녀 사진이 항상 있어요. 매일 들어가서 좋아요 누르고 댓글 달아요. 너무 행복해요."', avBg: '#5BC8A8', avColor: 'white', avLabel: '최', name: '최순자님', role: '손녀 바라기 친할머니 · 대전', delay: 0.1 },
    { gp: false, text: '"지방에 계신 양가 부모님 모두 앱으로 손주 사진 보시는 걸 너무 좋아하세요. 특히 친정어머니가 댓글을 엄청 다세요 😂 가족이 더 가까워진 것 같아요."', avBg: '#A890D8', avColor: 'white', avLabel: '박', name: '박민준님', role: '8개월 아기 아빠 · 부산', delay: 0.2 },
    { gp: true, gpLabel: '👴 조부모님 후기', text: '"아들한테 사진 보내달라고 하면 바쁜데 미안하잖아요. 근데 이건 내가 언제든 볼 수 있으니까. 손자 웃는 사진 보고 잠을 못 잤네요, 너무 이뻐서."', avBg: '#F5A882', avColor: 'white', avLabel: '강', name: '강병철님', role: '손자 자랑 외할아버지 · 전주', delay: 0 },
    { gp: false, text: '"카카오톡으로 사진 보내면 화질이 너무 낮아지는데, 여기는 원본 그대로라서 나중에 인화해서 드릴 수 있어요. 시어머니께서 엄청 좋아하셨어요."', avBg: '#3EB8F5', avColor: 'white', avLabel: '이', name: '이수연님', role: '22개월 아기 엄마 · 인천', delay: 0.1 },
    { gp: true, gpLabel: '👵 조부모님 후기', text: '"며느리가 설치해줬는데 어렵지 않아요. 손주 사진 올라오면 알림 오고, 댓글도 달 수 있고. 멀리 살아도 곁에 있는 것 같아서 눈물 날 때도 있어요."', avBg: '#A0C8A0', avColor: 'white', avLabel: '이', name: '이정자님', role: '손자 사랑 외할머니 · 광주', delay: 0.2 },
];

export default function TestimonialsSection() {
    return (
        <Box component="section" sx={{ py: '7rem', px: '5%', background: C.bg }}>
            <Box sx={{ maxWidth: '1100px', mx: 'auto', textAlign: 'center' }}>
                <Reveal><Eyebrow>실제 가족들의 이야기</Eyebrow></Reveal>
                <Reveal><SecTitle sx={{ textAlign: 'center' }}>부모님도, 조부모님도<br />모두 좋아해요</SecTitle></Reveal>
                <Reveal><SecDesc sx={{ mx: 'auto', textAlign: 'center' }}>아이를 키우는 부모님부터, 멀리서 손주를 그리워하는 조부모님까지. Little Days가 가족을 연결합니다.</SecDesc></Reveal>
                <Box sx={{ mt: '40px', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: '14px' }}>
                    {REVIEWS.map(({ gp, gpLabel, text, avBg, avColor, avLabel, name, role, delay }) => (
                        <Reveal key={name} delay={delay}>
                            <Box sx={{
                                background: gp ? C.bgTint : C.bgSub,
                                border: `1px solid ${gp ? C.borderStrong : C.borderNeutral}`,
                                borderRadius: '18px', p: '22px 20px', textAlign: 'left', height: '100%',
                                transition: 'transform .22s, box-shadow .22s',
                                '&:hover': { transform: 'translateY(-4px)', boxShadow: `0 12px 32px ${alpha(C.primary, 0.1)}` },
                            }}>
                                {gp && <Box sx={{ display: 'inline-block', background: alpha(C.primary, 0.1), border: `1px solid ${C.border}`, color: C.textBrand, fontSize: '12px', fontWeight: 500, px: '9px', py: '3px', borderRadius: '100px', mb: '8px' }}>{gpLabel}</Box>}
                                <Box sx={{ color: C.primaryDarker, fontSize: '13px', letterSpacing: '2px', mb: '10px' }}>★★★★★</Box>
                                <Box component="p" sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: C.textSec, lineHeight: 1.7, mb: '16px', fontStyle: 'italic' }}>{text}</Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Box sx={{ width: '34px', height: '34px', borderRadius: '50%', background: avBg, color: avColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>{avLabel}</Box>
                                    <Box>
                                        <Box sx={{ fontSize: '14px', fontWeight: 600, letterSpacing: '.028px', color: C.text }}>{name}</Box>
                                        <Box sx={{ fontSize: '12px', fontWeight: 500, letterSpacing: '.018px', color: C.textMuted }}>{role}</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Reveal>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
