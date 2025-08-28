import SvgIcons from '../../../../common/asset/svg_icons';
import SvgIcon from '../../../../common/component/image/icon/svg_icon';
import Center from '../../../../common/component/layout/grid/center';
import Sizing from '../../../../common/theme/sizing';

export default function Loading() {
    return (
        <Center
            sx={{
                minHeight: '100dvh',
                py: Sizing.padding.vertical,
                px: Sizing.padding.horizontal,
            }}
        >
            <SvgIcon icon={SvgIcons.logo} width={120} />
        </Center>
    );
}
