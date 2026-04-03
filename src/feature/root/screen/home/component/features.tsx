import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { C, font } from '../constants';
import Reveal from './reveal';
import { Eyebrow, SecTitle, SecDesc } from './shared';

const FEATURE_LIST = [
    { icon: '📸', title: '원본 사진·영상 저장 및 다운로드', desc: '화질 압축 없이 원본 그대로 저장됩니다. 언제든 원본 파일로 다운로드할 수 있어요.' },
    { icon: '♾️', title: '무료·무제한 용량', desc: '사진이 아무리 많아도 걱정 없어요. 용량 제한 없이 모든 순간을 저장하세요.' },
    { icon: '📅', title: '날짜별 자동 정렬 타임라인', desc: '촬영 날짜를 읽어 자동으로 타임라인에 배치합니다. 성장 흐름이 한눈에 보여요.' },
    { icon: '❤️', title: '좋아요·댓글로 가족 소통', desc: '멀리 사는 양가 부모님도 사진마다 하트와 댓글을 남길 수 있어요.' },
    { icon: '👨‍👩‍👧', title: '양가 동시 공유 · 그룹 분리', desc: '한 번 올리면 친가·외가가 함께 봐요. 사진마다 공개 대상을 따로 설정할 수도 있어요.' },
];

const GALLERY_ITEMS = [
    { bg: '#D6EEFF', icon: '👶', date: '2024.03.15', wide: true },
    { bg: '#D4F5F0', icon: '🌸', date: '2024.04.01' },
    { bg: '#FFE8D6', icon: '😊', date: '2024.04.12' },
    { bg: '#E8DEFF', icon: '🎁', date: '2024.05.20' },
    { bg: '#DCEEFF', icon: '🍼', date: '2024.06.03' },
    { bg: '#FFF0D6', icon: '🌈', date: '2024.07.07' },
];

export default function FeaturesSection() {
    return (
        <Box component="section" id="features" sx={{ py: '7rem', px: '5%', background: C.bg }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: '6rem', alignItems: 'center' }}>
                <Reveal>
                    <Eyebrow>주요 기능</Eyebrow>
                    <SecTitle>아이의 성장을 가장<br />소중하게 담는 방법</SecTitle>
                    <SecDesc>Little Days는 아이의 모든 순간이 사라지지 않도록,<br />원본 그대로 안전하게 보관합니다.</SecDesc>
                    <Box sx={{ mt: '32px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {FEATURE_LIST.map(({ icon, title, desc }) => (
                            <Box key={title} sx={{ display: 'flex', gap: '14px', alignItems: 'flex-start', p: '14px 16px', borderRadius: '12px', transition: 'background .15s', '&:hover': { background: C.bgSub } }}>
                                <Box sx={{ width: '40px', height: '40px', borderRadius: '10px', background: alpha(C.primary, 0.1), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{icon}</Box>
                                <Box>
                                    <Box component="h3" sx={{ fontSize: '14px', fontWeight: 600, letterSpacing: '.07px', color: C.text, mb: '4px', fontFamily: font }}>{title}</Box>
                                    <Box component="p" sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: C.textSec, lineHeight: 1.6, m: 0, fontFamily: font }}>{desc}</Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Reveal>
                <Reveal delay={0.2}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: '8px' }}>
                        {GALLERY_ITEMS.map(({ bg, icon, date, wide }) => (
                            <Box key={date} sx={{
                                background: bg, borderRadius: '14px', overflow: 'hidden',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '24px', aspectRatio: wide ? '2/1' : '1',
                                position: 'relative', transition: 'transform .25s',
                                gridColumn: wide ? 'span 2' : undefined,
                                '&:hover': { transform: 'scale(1.03)' },
                            }}>
                                {icon}
                                <Box sx={{ position: 'absolute', bottom: '6px', left: '8px', fontSize: '10px', fontWeight: 500, color: 'rgba(17,17,17,.4)' }}>{date}</Box>
                            </Box>
                        ))}
                    </Box>
                </Reveal>
            </Box>
        </Box>
    );
}
