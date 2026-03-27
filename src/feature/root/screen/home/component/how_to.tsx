import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { C } from '../constants';
import Reveal from './reveal';
import { Eyebrow, SecTitle, SecDesc } from './shared';

const STEPS = [
    {
        num: 1, icon: '🖼️',
        title: '아기 사진 선택',
        desc: '갤러리에서 올리고 싶은 사진만 골라주세요. 한 번에 최대 500장까지 선택할 수 있어요.',
        tags: ['📱 갤러리 자동 불러오기', '최대 500장 선택'],
    },
    {
        num: 2, icon: '📅',
        title: '사진들이 날짜별로 자동 정리',
        desc: '촬영 날짜를 자동으로 읽어 타임라인에 배치합니다. 순서가 뒤섞여도 걱정 없어요.',
        tags: ['📅 촬영일 자동 인식', '월별 그룹핑'],
    },
    {
        num: 3, icon: '✏️',
        title: '날짜별 메모 및 태그 선택',
        desc: '그 날의 이야기를 메모로 남기거나 "첫 걸음마", "첫 이유식" 같은 태그를 달아보세요.',
        tags: ['✏️ 메모', '🏷️ 태그', '첫 걸음마 · 첫 이유식'],
    },
    {
        num: 4, icon: '👥',
        title: '공개 대상 선택 (선택 사항)',
        desc: '사진마다 보여줄 가족을 고르세요. 친가·외가에게 따로 보여주거나 전체 공개도 가능합니다.',
        tags: ['👨‍👩‍👧 전체 공개', '🏠 친가만', '🏡 외가만'],
    },
    {
        num: 5, icon: '🎉',
        title: '업로드 완료 — 가족과 소통 시작!',
        desc: '업로드되는 순간 가족에게 알림이 전송됩니다. 양가 부모님의 좋아요와 댓글이 쏟아집니다.',
        tags: ['🔔 가족 알림 발송', '❤️ 좋아요 · 댓글'],
    },
];

export default function HowToSection() {
    return (
        <Box component="section" id="howto" sx={{ py: '7rem', px: '5%', background: C.bgSub }}>
            <Box sx={{ maxWidth: '720px', mx: 'auto', textAlign: 'center' }}>
                <Reveal><Eyebrow>사용법</Eyebrow></Reveal>
                <Reveal><SecTitle sx={{ textAlign: 'center' }}>딱 5단계, 1분이면 충분해요</SecTitle></Reveal>
                <Reveal><SecDesc sx={{ mx: 'auto', textAlign: 'center' }}>복잡한 설정 없이, 찍은 사진 선택하면 끝. 나머지는 Little Days가 알아서 정리합니다.</SecDesc></Reveal>
                <Box sx={{ mt: '48px', display: 'flex', flexDirection: 'column' }}>
                    {STEPS.map(({ num, icon, title, desc, tags }, i) => (
                        <Box key={num}>
                            <Reveal delay={i * 0.1}>
                                <Box sx={{
                                    background: C.bg, border: `1px solid ${C.borderNeutral}`, borderRadius: '14px',
                                    p: '18px 22px', display: 'grid',
                                    gridTemplateColumns: { xs: '52px 1fr', md: '52px 1fr 36px' },
                                    gap: '16px', alignItems: 'center', textAlign: 'left',
                                    position: 'relative', overflow: 'hidden',
                                    transition: 'border-color .2s, transform .2s, box-shadow .2s',
                                    '&::before': { content: '""', position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: C.primary, opacity: 0, transition: 'opacity .2s', borderRadius: '0 2px 2px 0' },
                                    '&:hover': { borderColor: C.borderStrong, transform: 'translateX(5px)', boxShadow: `0 6px 20px ${alpha(C.primary, 0.1)}` },
                                    '&:hover::before': { opacity: 1 },
                                }}>
                                    <Box sx={{ width: '52px', height: '52px', borderRadius: '50%', background: alpha(C.primary, 0.1), border: `1.5px solid ${alpha(C.primary, 0.2)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Box sx={{ fontSize: '18px', fontWeight: 700, color: C.textBrand }}>{num}</Box>
                                    </Box>
                                    <Box>
                                        <Box component="p" sx={{ fontSize: '16px', fontWeight: 600, letterSpacing: '.08px', color: C.text, mb: '4px', fontFamily: 'inherit' }}>{title}</Box>
                                        <Box component="p" sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: C.textSec, lineHeight: 1.6, mb: '8px', fontFamily: 'inherit' }}>{desc}</Box>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                            {tags.map(tag => (
                                                <Box key={tag} sx={{ background: alpha(C.primary, 0.1), color: C.textBrand, borderRadius: '100px', px: '9px', py: '3px', fontSize: '12px', fontWeight: 500, letterSpacing: '.018px' }}>{tag}</Box>
                                            ))}
                                        </Box>
                                    </Box>
                                    <Box sx={{ fontSize: '22px', justifySelf: 'end', opacity: 0.6, display: { xs: 'none', md: 'block' } }}>{icon}</Box>
                                </Box>
                            </Reveal>
                            {i < STEPS.length - 1 && (
                                <Box sx={{ display: 'flex', justifyContent: 'center', height: '20px', '&::before': { content: '""', width: '1.5px', background: C.borderStrong, borderRadius: '2px' } }} />
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
