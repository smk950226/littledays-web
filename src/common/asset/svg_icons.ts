import alert from './asset/svg/alert.svg?react';
import babyAlert from './asset/svg/baby_alert.svg?react';
import icon from './asset/svg/icon.svg?react';
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

    static icon: Asset = {
        src: icon,
        width: 24,
        height: 24,
    };

    static logo: Asset = {
        src: logo,
        width: 321,
        height: 59,
    };
}
