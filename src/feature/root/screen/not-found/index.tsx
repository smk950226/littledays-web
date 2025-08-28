import SvgIcons from '../../../../common/asset/svg_icons';
import Center from '../../../../common/component/layout/grid/center';
import Alert from '../../../../common/component/layout/spacer/alert';
import Sizing from '../../../../common/theme/sizing';

export default function NotFound() {
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
                title={'페이지를 찾을 수 없어요.'}
                titleGap={4}
                caption={'경로를 확인해주세요.'}
                baseColor={false}
            />
        </Center>
    );
}
