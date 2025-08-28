import { koKR as koKRCore } from '@mui/material/locale';

import type { Locale } from '../data/type/locale';

const supported: Locale[] = [
    {
        value: 'ko',
        adapter: 'ko',
        system: {
            components: {
                ...koKRCore.components,
            },
        },
    },
];

const locale = {
    default: supported[0],
    supported,
};

export default locale;
