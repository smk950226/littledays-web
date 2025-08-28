import SvgIcons from '../../../../common/asset/svg_icons';
import Center from '../../../../common/component/layout/grid/center';
import Alert from '../../../../common/component/layout/spacer/alert';
import useI18n from '../../../../common/i18n/hook/use_i18n';
import Sizing from '../../../../common/theme/sizing';

export default function NotFound() {
    const { t } = useI18n();

    return (
        <Center
            sx={{
                paddingLeft: Sizing.padding.horizontal,
                paddingRight: Sizing.padding.horizontal,
                minHeight: '100dvh',
            }}
        >
            <Alert
                icon={SvgIcons.babyAlert}
                title={t('notFoundTitle')}
                titleGap={4}
                caption={t('notFoundDescription')}
                baseColor={false}
            />
        </Center>
    );
}
