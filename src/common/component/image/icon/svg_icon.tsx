import { useMemo } from 'react';
import MuiSvgIcon from '@mui/material/SvgIcon';

import {
    calculatetHeight,
    calculateWidth,
} from '../../../asset/helper/calculate_size';
import useTheme from '../../../theme/hook/use_theme';
import Sizing from '../../../theme/sizing';

import type { MuiComponent } from '../../../data/type/component';
import type { Asset } from '../../../asset/data/type/asset';
import type { Size } from '../../../data/type/size';

type Props = MuiComponent & {
    icon: Asset;
    size?: number;
    width?: number;
    height?: number;
    color?: string;
    baseColor?: boolean;
};

export default function SvgIcon({
    icon,
    size,
    width: w,
    height: h,
    color,
    baseColor = true,
    sx,
}: Props) {
    const { theme } = useTheme();

    if (size && (w || h)) {
        throw new Error("size and width & height can't be provided together.");
    }
    if (color) {
        if (!/^#[0-9A-F]{6}$/i.test(color)) {
            throw new Error(`Invalid hex color`);
        }
    }
    const { width, height } = useMemo<Size>(() => {
        return {
            width: w ? w : h ? calculateWidth(icon, h!) : (size ?? Sizing.icon),
            height: h
                ? h
                : w
                  ? calculatetHeight(icon, w!)
                  : (size ?? Sizing.icon),
        };
    }, [size, w, h]);

    return (
        <MuiSvgIcon
            component={icon.src}
            viewBox={`0 0 ${icon.width} ${icon.height}`}
            sx={{
                width,
                height,
                ...((color || baseColor) && {
                    color: color ?? theme.icon.default,
                }),
                ...sx,
            }}
        />
    );
}
