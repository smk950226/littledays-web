import type { InternalAxiosRequestConfig } from 'axios';

import Env from '@/common/constant/env';
import i18n from '../i18n';
import locale from '../constant/locale';

export default function I18nInterceptor(config: InternalAxiosRequestConfig) {
    config.headers[import.meta.env[Env.api.header.locale]] =
        i18n.resolvedLanguage ?? locale.default.value;
    return config;
}
