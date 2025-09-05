import { useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { alpha } from '@mui/material/styles';

import SvgIcons from '@/common/asset/svg_icons';
import SvgIcon from '@/common/component/image/icon/svg_icon';
import Center from '@/common/component/layout/grid/center';
import Palette from '@/common/theme/palette';
import Sizing from '@/common/theme/sizing';
import useI18n from '@/common/i18n/hook/use_i18n';
import Subtitle3 from '@/common/component/layout/typography/subtitle3';
import SubmitButton from '@/common/component/button/button/submit_button';
import { goStore } from '@/common/helper/store';
import Row from '@/common/component/layout/grid/row';
import useTheme from '@/common/theme/hook/use_theme';
import Caption1 from '@/common/component/layout/typography/caption1';

export default function Home() {
    const location = useLocation();

    const { t } = useI18n();
    const { theme } = useTheme();

    useEffect(() => {
        if (location.pathname.startsWith('/download')) {
            goStore();
        }
    }, []);

    return (
        <Center
            sx={{
                minHeight: '100dvh',
                maxWidth: 400,
                py: Sizing.padding.vertical,
                px: Sizing.padding.horizontal,
                mx: 'auto',
            }}
        >
            <SvgIcon
                icon={SvgIcons.logoVertical}
                width={200}
                sx={{
                    filter: `drop-shadow(0px 0px 32px ${alpha(
                        Palette.primary,
                        0.46,
                    )})`,
                }}
            />
            <Subtitle3 textAlign={'center'} sx={{ mt: 42 }}>
                {t('homeDescription', {
                    app: t('app'),
                })}
            </Subtitle3>
            <SubmitButton
                text={t('homeStartText')}
                onClick={goStore}
                sx={{ px: 56, mt: 78 }}
            />
            <Row
                alignItems={'center'}
                justifyContent={'center'}
                sx={{ mt: 22 }}
            >
                <Link
                    to={'/policy/privacy'}
                    style={{
                        textDecorationColor: theme.text.default,
                        textDecorationLine: 'underline',
                    }}
                >
                    <Caption1>{t('policyPrivacy')}</Caption1>
                </Link>
                <Link
                    to={'/policy/service'}
                    style={{
                        textDecorationColor: theme.text.default,
                        textDecorationLine: 'underline',
                        marginLeft: 20,
                    }}
                >
                    <Caption1>{t('policyService')}</Caption1>
                </Link>
            </Row>
        </Center>
    );
}
