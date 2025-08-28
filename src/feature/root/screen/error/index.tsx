import SvgIcons from '../../../../common/asset/svg_icons';
import Center from '../../../../common/component/layout/grid/center';
import Alert from '../../../../common/component/layout/spacer/alert';
import Sizing from '../../../../common/theme/sizing';

export default function Error() {
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
                title={'오류가 발생했어요.'}
                titleGap={4}
                caption={'잠시 후 다시 시도해주세요.'}
                baseColor={false}
            />
        </Center>
    );
}
