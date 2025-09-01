import { useLoaderData } from '@tanstack/react-router';

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
import Row from '@/common/component/layout/grid/row';
import Caption1 from '@/common/component/layout/typography/caption1';
import Subtitle3 from '@/common/component/layout/typography/subtitle3';
import { toUpperCaseFirst } from '@/common/helper/string';
import { toLocalYYYYMMDD } from '@/common/helper/date';
import { getBabyBirth } from '../../helper/get_baby_birth';
import SubmitButton from '@/common/component/button/button/submit_button';

export default function InviteFamily() {
    const { baby } = useLoaderData({
        from: '/invite/$code/',
    });
    const { t } = useI18n();
    const { theme } = useTheme();

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
                    title={t('inviteFamilyBabyNotExistTitle')}
                    titleGap={4}
                    caption={t('inviteFamilyBabyNotExistDescription')}
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
                {t('inviteFamilyTitle', {
                    name: baby.name,
                    app: t('app'),
                })}
            </Headline2>
            <Body3
                textAlign={'center'}
                color={theme.text.default}
                sx={{ mt: 8 }}
            >
                {t('inviteFamilyDescription', {
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
                <Row alignItems={'center'}>
                    <Caption1 color={theme.text.description} sx={{ width: 67 }}>
                        {t('babyNameTitle')}
                    </Caption1>
                    <Subtitle3>{baby.name}</Subtitle3>
                </Row>
                <Row alignItems={'center'} sx={{ mt: 12 }}>
                    <Caption1 color={theme.text.description} sx={{ width: 67 }}>
                        {t('babyBirthTitle')}
                    </Caption1>
                    <Subtitle3>{toLocalYYYYMMDD(getBabyBirth(baby))}</Subtitle3>
                </Row>
                <Row alignItems={'center'} sx={{ mt: 12 }}>
                    <Caption1 color={theme.text.description} sx={{ width: 67 }}>
                        {t('babyGenderTitle')}
                    </Caption1>
                    <Subtitle3>
                        {t(`gender${toUpperCaseFirst(baby.gender)}`)}
                    </Subtitle3>
                </Row>
            </Box>
            <SubmitButton
                text={t('inviteFamilyJoinText')}
                sx={{ px: 56, mt: 78 }}
            />
        </Center>
    );
}
