import Row from '@/common/component/layout/grid/row';
import Caption1 from '@/common/component/layout/typography/caption1';
import useTheme from '@/common/theme/hook/use_theme';
import Subtitle3 from '@/common/component/layout/typography/subtitle3';

import type { MuiComponent } from '@/common/data/type/component';

type Props = MuiComponent & {
    title: string;
    information: string;
};

export default function Information({
    sx,
    title,
    information,
    ...props
}: Props) {
    const { theme } = useTheme();

    return (
        <Row
            sx={{
                alignItems: 'center',
                ...sx,
            }}
            {...props}
        >
            <Caption1 color={theme.text.description} sx={{ width: 68 }}>
                {title}
            </Caption1>
            <Subtitle3>{information}</Subtitle3>
        </Row>
    );
}
