import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { C } from '../constants';
import Reveal from './reveal';
import { Eyebrow, SecTitle, SecDesc } from './shared';

const MONTHS = [
    {
        dot: C.primary, label: '2024년 3월', count: '사진 12장', extra: null,
        photos: [
            { bg: '#D6EEFF', icon: '👶', day: '3.2' },
            { bg: '#D4F5F0', icon: '🍼', day: '3.8' },
            { bg: '#FFE8D6', icon: '😴', day: '3.15' },
            { bg: '#DCEEFF', icon: '🌸', day: '3.22' },
        ],
    },
    {
        dot: '#5BC8A8', label: '2024년 4월', count: '사진 18장', extra: null,
        photos: [
            { bg: '#D4F5F0', icon: '😄', day: '4.1' },
            { bg: '#FFE8D6', icon: '🎁', day: '4.5' },
            { bg: '#E8DEFF', icon: '🐣', day: '4.12' },
            { bg: '#D6EEFF', icon: '🛁', day: '4.20' },
        ],
    },
    {
        dot: '#F5A882', label: '2024년 5월 · 100일', count: null, extra: '🎂 특별한 날',
        photos: [
            { bg: '#D6EEFF', icon: '🎂', day: '5.20', hl: true },
            { bg: '#FFE8D6', icon: '🎉', day: '5.20' },
            { bg: '#D4F5F0', icon: '👨‍👩‍👧', day: '5.21' },
            { bg: '#DCEEFF', icon: '🌟', day: '5.25' },
        ],
    },
];

export default function TimelineSection() {
    return (
        <Box component="section" id="timeline" sx={{ py: '7rem', px: '5%', background: C.bgSub }}>
            <Box sx={{ maxWidth: '1100px', mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: '6rem', alignItems: 'center' }}>
                <Reveal>
                    <Eyebrow>날짜별 자동 정렬</Eyebrow>
                    <SecTitle>사진을 올리면,<br />알아서 정리돼요</SecTitle>
                    <SecDesc>촬영 날짜를 자동으로 읽어 타임라인에 배치합니다. 아이가 태어난 날부터 오늘까지, 성장의 흐름이 한눈에 펼쳐집니다.</SecDesc>
                </Reveal>
                <Reveal delay={0.2}>
                    <Box sx={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: '20px', overflow: 'hidden', boxShadow: `0 12px 40px ${alpha(C.primary, 0.1)}` }}>
                        {/* Header */}
                        <Box sx={{ background: C.bgTint, p: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${C.border}` }}>
                            <Box sx={{ fontSize: '14px', fontWeight: 600, letterSpacing: '.07px', color: C.text }}>성장 타임라인</Box>
                            <Box sx={{ display: 'flex', background: alpha(C.primary, 0.1), borderRadius: '100px', p: '2px', gap: '2px' }}>
                                {['날짜순', '앨범'].map((tab, i) => (
                                    <Box key={tab} component="span" sx={{ px: '10px', py: '3px', borderRadius: '100px', fontSize: '12px', fontWeight: 500, letterSpacing: '.018px', ...(i === 0 ? { background: C.bg, color: C.textBrand } : { color: C.textMuted }) }}>
                                        {tab}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        {/* Month rows */}
                        {MONTHS.map(({ dot, label, count, extra, photos }) => (
                            <Box key={label} sx={{ p: '12px 18px 8px', borderBottom: `1px solid ${C.bgSub}`, '&:last-of-type': { borderBottom: 'none' } }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px', mb: '9px' }}>
                                    <Box sx={{ width: '7px', height: '7px', borderRadius: '50%', background: dot, flexShrink: 0 }} />
                                    <Box component="span" sx={{ flex: 1, fontSize: '14px', fontWeight: 600, letterSpacing: '.07px', color: C.text }}>{label}</Box>
                                    {count && <Box component="span" sx={{ fontSize: '12px', fontWeight: 500, letterSpacing: '.018px', color: C.textMuted }}>{count}</Box>}
                                    {extra && <Box component="span" sx={{ fontSize: '12px', fontWeight: 500, color: C.textBrand }}>{extra}</Box>}
                                </Box>
                                <Box sx={{ display: 'flex', gap: '5px' }}>
                                    {photos.map(({ bg, icon, day, hl = false }) => (
                                        <Box key={day + icon} sx={{
                                            flex: 1, aspectRatio: '1', borderRadius: '9px',
                                            background: bg, display: 'flex', flexDirection: 'column',
                                            alignItems: 'center', justifyContent: 'center', fontSize: '16px',
                                            position: 'relative',
                                            ...(hl ? { border: `2px solid ${C.primary}`, transform: 'scale(1.06)', zIndex: 1 } : {}),
                                        }}>
                                            {icon}
                                            <Box component="span" sx={{ fontSize: '5.5px', color: hl ? C.textBrand : 'rgba(17,17,17,.35)', fontWeight: hl ? 700 : 500 }}>{day}</Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                        <Box sx={{ mx: '16px', mb: '14px', background: alpha(C.primary, 0.1), borderRadius: '8px', p: '7px 12px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 500, letterSpacing: '.018px', color: C.textBrand }}>
                            ✦ 촬영 날짜 기준으로 자동 정렬됩니다
                        </Box>
                    </Box>
                </Reveal>
            </Box>
        </Box>
    );
}
