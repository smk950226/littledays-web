import { isAndroid, isIOS, isMacOs } from 'react-device-detect';

import Env from '../constant/env';

export function goPlayStore() {
    window.location.href = `https://play.google.com/store/apps/details?id=${
        import.meta.env[Env.store.android]
    }`;
}

export function goAppStore() {
    window.location.href = `https://apps.apple.com/app/capsigo/id${
        import.meta.env[Env.store.ios]
    }`;
}

export function goStore() {
    if (isIOS || isMacOs) {
        goAppStore();
    } else if (isAndroid) {
        goPlayStore();
    }
}
