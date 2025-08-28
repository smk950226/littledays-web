import { alpha } from '@mui/material/styles';

import SvgIcons from '../../../../common/asset/svg_icons';
import SvgIcon from '../../../../common/component/image/icon/svg_icon';
import Center from '../../../../common/component/layout/grid/center';
import Palette from '../../../../common/theme/palette';
import Sizing from '../../../../common/theme/sizing';
import Headline1 from '../../../../common/component/layout/typography/headline1';
import useI18n from '../../../../common/i18n/hook/use_i18n';
import Subtitle3 from '../../../../common/component/layout/typography/subtitle3';
import SubmitButton from '../../../../common/component/button/button/submit_button';
import { goStore } from '../../../../common/helper/store.helper';

export default function Home() {
    const { t } = useI18n();

    return (
        <Center
            sx={{
                minHeight: '100dvh',
                py: Sizing.padding.vertical,
                px: Sizing.padding.horizontal,
            }}
        >
            <SvgIcon
                icon={SvgIcons.logo}
                width={200}
                sx={{
                    filter: `drop-shadow(0px 0px 32px ${alpha(
                        Palette.primary,
                        0.46,
                    )})`,
                }}
            />
            <Headline1 textAlign={'center'} sx={{ mt: 42 }}>
                {t('homeTitle')}
            </Headline1>
            <Subtitle3 textAlign={'center'} sx={{ mt: 10 }}>
                {t('homeDescription')}
            </Subtitle3>
            <SubmitButton
                text={t('homeStartText')}
                onClick={goStore}
                sx={{ px: 56, mt: 78 }}
            />
        </Center>
    );
}
