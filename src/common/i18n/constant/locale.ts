import { enUS, koKR } from '@mui/material/locale';

import type { Locale } from '../data/type/locale';

const supported: Locale[] = [
    {
        name: 'languageEn',
        value: 'en',
        adapter: 'en',
        system: {
            components: {
                ...enUS.components,
            },
        },
    },
    {
        name: 'languageKo',
        value: 'ko',
        adapter: 'ko',
        system: {
            components: {
                ...koKR.components,
            },
        },
    },
];

const locale = {
    default: supported[0],
    supported,
};

export default locale;
