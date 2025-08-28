import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

import translationsKo from './translation/ko.json';
import locale from './constant/locale';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .use(
        resourcesToBackend(
            (lang: string) => import(`./translation/${lang}.json`),
        ),
    )
    .init({
        resources: {
            ko: { translations: translationsKo },
        },
        fallbackLng: locale.default.value,
        ns: ['translations'],
        defaultNS: 'translations',
        interpolation: {
            escapeValue: false,
        },
        supportedLngs: locale.supported.map(item => item.value),
        detection: {
            caches: ['localStorage'],
        },
    });

export default i18n;
