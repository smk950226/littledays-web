import alert from './asset/svg/alert.svg?react';
import babyAlert from './asset/svg/baby_alert.svg?react';
import logo from './asset/svg/logo.svg?react';

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

    static logo: Asset = {
        src: logo,
        width: 231,
        height: 169,
    };
}
