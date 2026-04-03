import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { C } from '../constants';
import Reveal from './reveal';
import { Eyebrow, SecTitle, SecDesc } from './shared';

const POINTS = [
    { icon: '🔗', title: '초대 링크로만 참여 가능', desc: '내가 보낸 초대 링크를 통해서만 앨범에 들어올 수 있습니다.' },
    { icon: '👥', title: '친가·외가 그룹 분리', desc: '사진마다 공개 대상을 설정할 수 있어요. 친가만, 외가만, 전체 공개로 유연하게.' },
    { icon: '🚫', title: '광고·외부 노출 없음', desc: '아이의 사진이 광고에 활용되거나 제3자에게 공유되는 일은 절대 없습니다.' },
];

const MEMBERS = [
    { bg: '#76D1FF', color: '#0070A8', label: '엄', name: '엄마 (김지수)', sub: '앨범 만든 사람', isOwner: true },
    { bg: '#5BC8A8', color: 'white', label: '아', name: '아빠 (박민준)', sub: '초대됨', isOwner: false },
    { bg: '#A890D8', color: 'white', label: '할', name: '친할머니', sub: '초대됨', isOwner: false },
    { bg: '#F5A882', color: 'white', label: '외', name: '외할머니', sub: '초대됨', isOwner: false },
];

export default function PrivateSection() {
    return (
        <Box component="section" id="private" sx={{ py: '7rem', px: '5%', background: C.bgDark, position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: `radial-gradient(circle,${alpha(C.primary, 0.06)} 0%,transparent 70%)`, pointerEvents: 'none' }} />
            <Box sx={{ maxWidth: '1200px', mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: '6rem', alignItems: 'center' }}>
                <Reveal>
                    <Eyebrow light>초대된 가족만의 공간</Eyebrow>
                    <SecTitle light>우리 가족만<br />볼 수 있어요</SecTitle>
                    <SecDesc light>Little Days 앨범은 내가 직접 초대한 가족만 참여할 수 있습니다. 링크를 알아도, 검색해도 절대 접근할 수 없는 완전한 프라이빗 공간입니다.</SecDesc>
                    <Box sx={{ mt: '32px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                        {POINTS.map(({ icon, title, desc }) => (
                            <Box key={title} sx={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                                <Box sx={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{icon}</Box>
                                <Box>
                                    <Box component="strong" sx={{ fontSize: '14px', fontWeight: 600, letterSpacing: '.07px', color: '#FFF', display: 'block', mb: '3px' }}>{title}</Box>
                                    <Box component="p" sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: 'rgba(255,255,255,.4)', lineHeight: 1.6, m: 0 }}>{desc}</Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Reveal>
                <Reveal delay={0.1}>
                    <Box sx={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.09)', borderRadius: '18px', p: '20px', mb: '12px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '16px' }}>
                            <Box sx={{ fontSize: '16px', fontWeight: 600, letterSpacing: '.08px', color: '#FFF' }}>🏠 우리 가족 앨범</Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', background: alpha(C.primary, 0.1), border: `1px solid ${alpha(C.primary, 0.3)}`, color: C.primary, borderRadius: '100px', px: '10px', py: '4px', fontSize: '12px', fontWeight: 500 }}>🔒 비공개</Box>
                        </Box>
                        <Box component="p" sx={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,.3)', mb: '8px', letterSpacing: '.04em' }}>참여 중인 가족 · 5명</Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {MEMBERS.map(({ bg, color, label, name, sub, isOwner }) => (
                                <Box key={name} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: '10px', p: '8px 12px' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                                        <Box sx={{ width: '28px', height: '28px', borderRadius: '50%', background: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>{label}</Box>
                                        <Box>
                                            <Box sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: 'rgba(255,255,255,.8)' }}>{name}</Box>
                                            <Box sx={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,.3)' }}>{sub}</Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ fontSize: '10px', fontWeight: 500, px: '8px', py: '3px', borderRadius: '100px', ...(isOwner ? { background: alpha(C.primary, 0.15), color: C.primary } : { background: 'rgba(255,255,255,.07)', color: 'rgba(255,255,255,.4)' }) }}>
                                        {isOwner ? '관리자' : '멤버'}
                                    </Box>
                                </Box>
                            ))}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '9px', border: '1px dashed rgba(255,255,255,.12)', borderRadius: '10px', p: '8px 12px' }}>
                                <Box sx={{ width: '28px', height: '28px', borderRadius: '50%', border: '1.5px dashed rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: 'rgba(255,255,255,.2)', flexShrink: 0 }}>+</Box>
                                <Box sx={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,.25)' }}>가족 더 초대하기...</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ background: alpha(C.primary, 0.1), border: `1px solid ${alpha(C.primary, 0.2)}`, borderRadius: '12px', p: '13px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <Box sx={{ fontSize: '16px', flexShrink: 0, mt: '1px' }}>🛡️</Box>
                        <Box>
                            <Box component="strong" sx={{ fontSize: '14px', fontWeight: 600, letterSpacing: '.07px', color: C.primary, display: 'block', mb: '3px' }}>초대받지 않은 사람은 접근 불가</Box>
                            <Box component="p" sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: 'rgba(255,255,255,.5)', lineHeight: 1.6, m: 0 }}>링크를 알더라도 관리자 승인이 필요합니다. 아이의 사진은 오직 우리 가족만 볼 수 있습니다.</Box>
                        </Box>
                    </Box>
                </Reveal>
            </Box>
        </Box>
    );
}
