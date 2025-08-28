import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import locale from '../constant/locale';

export default function useI18n() {
    const { t, i18n } = useTranslation();

    const setLocale = useCallback((lang: string) => {
        if (!locale.supported.find(item => item.value === lang)) return;
        i18n.changeLanguage(lang);
    }, []);

    return {
        t,
        locale: i18n.resolvedLanguage ?? locale.default.value,
        setLocale,
    };
}
