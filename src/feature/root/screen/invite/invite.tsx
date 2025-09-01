import { useLoaderData } from '@tanstack/react-router';
import { isAndroid, isDesktop, isIOS } from 'react-device-detect';

import Box from '@mui/material/Box';

import Center from '@/common/component/layout/grid/center';
import Sizing from '@/common/theme/sizing';
import SvgIcon from '@/common/component/image/icon/svg_icon';
import SvgIcons from '@/common/asset/svg_icons';
import Alert from '@/common/component/layout/spacer/alert';
import useI18n from '@/common/i18n/hook/use_i18n';
import Headline2 from '@/common/component/layout/typography/headline2';
import Body3 from '@/common/component/layout/typography/body3';
import useTheme from '@/common/theme/hook/use_theme';
import NetworkImage from '@/common/component/image/image/network_image';
import Palette from '@/common/theme/palette';
import { toUpperCaseFirst } from '@/common/helper/string';
import { toLocalYYYYMMDD } from '@/common/helper/date';
import SubmitButton from '@/common/component/button/button/submit_button';
import { getBabyBirth } from '@/feature/baby/helper/get_baby_birth';
import { goStore } from '@/common/helper/store';
import Information from './component/information';
import Env from '@/common/constant/env';

export default function Invite() {
    const { baby } = useLoaderData({
        from: '/invite/$code/',
    });
    const { t } = useI18n();
    const { theme } = useTheme();

    const openApp = () => {
        if (!baby) return;
        if (isDesktop) {
            goStore();
        } else {
            window.location.href = `littledays://invite/${baby.code}`;
            setTimeout(function () {
                if (isIOS) {
                    goStore();
                } else if (isAndroid) {
                    window.location.href =
                        `intent://invite/${baby.code}#Intent;scheme=littledays;package=${import.meta.env[Env.store.android]};S.browser_fallback_url=` +
                        encodeURIComponent(
                            'https://play.google.com/store/apps/details?id=${import.meta.env[Env.store.android]}',
                        ) +
                        ';end';
                }
            }, 400);
        }
    };

    if (!baby) {
        return (
            <Center
                sx={{
                    minHeight: '100dvh',
                    py: Sizing.padding.vertical,
                    px: Sizing.padding.horizontal,
                }}
            >
                <Alert
                    icon={SvgIcons.babyAlert}
                    title={t('inviteBabyNotExistTitle')}
                    titleGap={4}
                    caption={t('inviteBabyNotExistDescription')}
                    baseColor={false}
                />
            </Center>
        );
    }
    return (
        <Center
            sx={{
                minHeight: '100dvh',
                maxWidth: 300,
                py: 32,
                px: Sizing.padding.horizontal,
                mx: 'auto',
            }}
        >
            <SvgIcon icon={SvgIcons.logoHorizontal} height={24} />
            <Headline2 textAlign={'center'} sx={{ mt: 32 }}>
                {t('inviteTitle', {
                    name: baby.name,
                    app: t('app'),
                })}
            </Headline2>
            <Body3
                textAlign={'center'}
                color={theme.text.default}
                sx={{ mt: 8 }}
            >
                {t('inviteDescription', {
                    name: baby.name,
                    app: t('app'),
                })}
            </Body3>
            <NetworkImage
                url={baby.images[0]?.thumbnail.url}
                size={240}
                sx={{
                    border: `1px solid ${theme.border.default}`,
                    borderRadius: '20px',
                    mt: 42,
                }}
            />
            <Box
                sx={{
                    width: 240,
                    backgroundColor: Palette.yellow,
                    border: `1px solid ${theme.border.default}`,
                    borderRadius: '20px',
                    py: 24,
                    px: 32,
                }}
            >
                <Information
                    title={t('babyNameTitle')}
                    information={baby.name}
                />
                <Information
                    title={t('babyBirthTitle')}
                    information={toLocalYYYYMMDD(getBabyBirth(baby))}
                    sx={{ mt: 12 }}
                />
                <Information
                    title={t('babyGenderTitle')}
                    information={t(`gender${toUpperCaseFirst(baby.gender)}`)}
                    sx={{ mt: 12 }}
                />
            </Box>
            <SubmitButton
                text={t('inviteJoinText')}
                onClick={openApp}
                sx={{ px: 56, mt: 78 }}
            />
        </Center>
    );
}
