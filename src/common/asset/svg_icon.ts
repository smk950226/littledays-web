import logo from './asset/svg/logo.svg?react';

import type { Asset } from './data/type/asset';

export default abstract class SvgIcons {
    static logo: Asset = {
        src: logo,
        width: 428,
        height: 162,
    };
}
