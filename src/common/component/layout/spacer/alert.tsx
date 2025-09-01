import SvgIcons from '@/common/asset/svg_icons';
import useTheme from '@/common/theme/hook/use_theme';
import SvgIcon from '../../image/icon/svg_icon';
import Center from '../grid/center';
import Subtitle2 from '../typography/subtitle2';
import Body3 from '../typography/body3';

import type { MuiComponent } from '@/common/data/type/component';
import type { Asset } from '@/common/asset/data/type/asset';

type Props = MuiComponent & {
    icon?: Asset;
    size?: number;
    iconColor?: string;
    baseColor?: boolean;
    title: string;
    titleGap?: number;
    caption?: string;
};

export default function Alert({
    sx,
    icon = SvgIcons.alert,
    size = 72,
    iconColor,
    baseColor = true,
    title,
    titleGap,
    caption,
}: Props) {
    const { theme } = useTheme();

    return (
        <Center sx={sx}>
            {!!icon && (
                <SvgIcon
                    icon={icon}
                    size={size}
                    color={
                        baseColor
                            ? (iconColor ?? theme.icon.caption)
                            : iconColor
                    }
                    baseColor={baseColor}
                />
            )}
            <Subtitle2
                textAlign={'center'}
                color={baseColor ? theme.text.caption : theme.text.default}
                sx={{
                    mt: titleGap ? titleGap : caption ? 22 : 12,
                }}
            >
                {title}
            </Subtitle2>
            {!!caption && (
                <Body3
                    textAlign={'center'}
                    color={
                        baseColor ? theme.text.caption : theme.text.description
                    }
                    sx={{ mt: 8 }}
                >
                    {caption}
                </Body3>
            )}
        </Center>
    );
}
