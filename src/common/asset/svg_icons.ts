import alert from './asset/svg/alert.svg?react';
import babyAlert from './asset/svg/baby_alert.svg?react';
import logoHorizontal from './asset/svg/logo_horizontal.svg?react';
import logoVertical from './asset/svg/logo_vertical.svg?react';

import type { Asset } from './data/type/asset';

export default abstract class SvgIcons {
    static alert: Asset = {
        src: alert,
        width: 24,
        height: 24,
    };

    static babyAlert: Asset = {
        src: babyAlert,
        width: 72,
        height: 72,
    };

    static logoHorizontal: Asset = {
        src: logoHorizontal,
        width: 348,
        height: 82,
    };

    static logoVertical: Asset = {
        src: logoVertical,
        width: 231,
        height: 169,
    };
}
