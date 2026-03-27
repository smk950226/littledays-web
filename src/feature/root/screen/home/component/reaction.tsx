import { useState } from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { C } from '../constants';
import Reveal from './reveal';
import { Eyebrow, SecTitle, SecDesc } from './shared';

const COMMENTS = [
    { bg: '#76D1FF', color: '#0070A8', label: '할', name: '할머니', text: '우리 손녀 너무 예뻐 🥰 얼른 보고 싶다', time: '방금 전', likes: 3 },
    { bg: '#5BC8A8', color: 'white', label: '아', name: '아빠', text: '벌써 100일이라니, 시간이 너무 빠르다 😭', time: '1시간 전', likes: 5 },
    { bg: '#A890D8', color: 'white', label: '외', name: '외할머니', text: '어머나 이렇게 컸어! 꼭 안아줘야겠다 💕', time: '2시간 전', likes: 2 },
];

const POINTS = [
    { icon: '❤️', title: '좋아요로 마음 표현', desc: '복잡한 말 없이도 하트 하나로 사랑을 전하세요.' },
    { icon: '💬', title: '사진별 댓글 대화', desc: '그 순간을 기억하는 가족만의 이야기가 쌓여갑니다.' },
    { icon: '🔔', title: '실시간 알림', desc: '새 댓글·좋아요가 달리면 바로 알림을 받아요.' },
];

export default function ReactionSection() {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(12);

    const handleLike = () => {
        setLiked(prev => {
            setLikeCount(c => prev ? c - 1 : c + 1);
            return !prev;
        });
    };

    return (
        <Box component="section" id="reaction" sx={{ py: '7rem', px: '5%', background: C.bg }}>
            <Box sx={{ maxWidth: '1100px', mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: '6rem', alignItems: 'center' }}>
                <Reveal>
                    <Box sx={{ background: C.bgSub, border: `1px solid ${C.border}`, borderRadius: '20px', overflow: 'hidden', boxShadow: `0 12px 40px ${alpha(C.primary, 0.08)}` }}>
                        {/* Photo */}
                        <Box sx={{ background: C.bgTint, minHeight: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px', position: 'relative' }}>
                            👶
                            <Box sx={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,.88)', backdropFilter: 'blur(6px)', borderRadius: '100px', px: '10px', py: '4px', fontSize: '12px', fontWeight: 500, letterSpacing: '.018px', color: C.textSec }}>
                                2024. 05. 20 · 100일
                            </Box>
                        </Box>
                        {/* Reaction bar */}
                        <Box sx={{ background: C.bg, p: '12px 16px 8px', borderBottom: `1px solid ${C.bgSub}` }}>
                            <Box sx={{ display: 'flex', gap: '8px', mb: '5px' }}>
                                <Box
                                    component="button" onClick={handleLike}
                                    sx={{
                                        display: 'flex', alignItems: 'center', gap: '5px', px: '12px', py: '5px',
                                        borderRadius: '100px', border: `1px solid ${liked ? C.primary : C.borderNeutral}`,
                                        background: liked ? alpha(C.primary, 0.1) : 'transparent',
                                        cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 500,
                                        letterSpacing: '.028px', color: liked ? C.textBrand : C.textSec, transition: 'all .15s',
                                    }}
                                >
                                    ❤️ {likeCount}
                                </Box>
                                <Box component="button" sx={{ display: 'flex', alignItems: 'center', gap: '5px', px: '12px', py: '5px', borderRadius: '100px', border: `1px solid ${C.borderNeutral}`, background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 500, color: C.textSec, transition: 'all .15s', '&:hover': { borderColor: C.primary, color: C.textBrand } }}>
                                    💬 댓글 4
                                </Box>
                            </Box>
                            <Box sx={{ fontSize: '12px', fontWeight: 500, letterSpacing: '.018px', color: C.textMuted }}>엄마, 아빠, 할머니 외 9명이 좋아해요</Box>
                        </Box>
                        {/* Comments */}
                        <Box sx={{ background: C.bg, p: '10px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {COMMENTS.map(({ bg, color, label, name, text, time, likes }) => (
                                <Box key={name} sx={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                                    <Box sx={{ width: '28px', height: '28px', borderRadius: '50%', background: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>{label}</Box>
                                    <Box sx={{ flex: 1, background: C.bgSub, borderRadius: '10px', p: '7px 10px' }}>
                                        <Box component="span" sx={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.018px', color: C.text, display: 'block', mb: '2px' }}>{name}</Box>
                                        <Box component="span" sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: C.textSec, display: 'block', mb: '4px', lineHeight: 1.5 }}>{text}</Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <Box component="span" sx={{ fontSize: '10px', fontWeight: 500, color: C.textMuted }}>{time}</Box>
                                            <Box component="button" sx={{ fontSize: '10px', fontWeight: 600, color: C.textBrand, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>❤️ {likes}</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        {/* Input row */}
                        <Box sx={{ background: C.bg, p: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', borderTop: `1px solid ${C.bgSub}` }}>
                            <Box sx={{ width: '28px', height: '28px', borderRadius: '50%', background: C.primaryDark, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>나</Box>
                            <Box sx={{ flex: 1, background: C.bgSub, border: `1px solid ${C.borderNeutral}`, borderRadius: '100px', px: '14px', py: '7px', fontSize: '14px', fontWeight: 500, color: C.textMuted }}>따뜻한 한마디를 남겨보세요 ✏️</Box>
                        </Box>
                    </Box>
                </Reveal>
                <Reveal delay={0.1}>
                    <Eyebrow>가족 소통</Eyebrow>
                    <SecTitle>좋아요 한 번으로<br />마음이 전해져요</SecTitle>
                    <SecDesc>사진마다 가족이 남기는 하트와 댓글은 아이에게 가장 소중한 기록이 됩니다. 멀리 계신 양가 부모님도 실시간으로 함께할 수 있어요.</SecDesc>
                    <Box sx={{ mt: '32px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                        {POINTS.map(({ icon, title, desc }) => (
                            <Box key={title} sx={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                                <Box sx={{ width: '40px', height: '40px', borderRadius: '10px', background: alpha(C.primary, 0.1), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{icon}</Box>
                                <Box>
                                    <Box component="strong" sx={{ fontSize: '14px', fontWeight: 600, letterSpacing: '.07px', color: C.text, display: 'block', mb: '3px' }}>{title}</Box>
                                    <Box component="p" sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '.028px', color: C.textSec, lineHeight: 1.6, m: 0 }}>{desc}</Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Reveal>
            </Box>
        </Box>
    );
}
