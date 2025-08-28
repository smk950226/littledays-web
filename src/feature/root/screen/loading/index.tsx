import SvgIcons from '../../../../common/asset/svg_icon';
import SvgIcon from '../../../../common/component/image/icon/svg_icon';
import Center from '../../../../common/component/layout/grid/center';
import Sizing from '../../../../common/theme/sizing';

export default function Loading() {
    return (
        <Center
            sx={{
                paddingLeft: Sizing.padding.horizontal,
                paddingRight: Sizing.padding.horizontal,
                minHeight: '100dvh',
            }}
        >
            <SvgIcon icon={SvgIcons.logo} width={120} />
        </Center>
    );
}
