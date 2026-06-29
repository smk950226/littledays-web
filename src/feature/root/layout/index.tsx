import { HeadContent, Outlet } from '@tanstack/react-router';
import { useEffect } from 'react';

import useTheme from '@/common/theme/hook/use_theme';
import Sizing from '@/common/theme/sizing';
import useI18n from '@/common/i18n/hook/use_i18n';

export default function RootLayout() {
    const { theme } = useTheme();
    const { t, locale } = useI18n();

    useEffect(() => {
        document.title = t('title');
    }, [locale]);

    return (
        <>
            <HeadContent />
            <div
                style={{
                    backgroundColor: theme.background.default,
                    minWidth: Sizing.layout.width.min,
                }}
            >
                <main
                    style={{
                        maxWidth: Sizing.layout.width.max,
                        minHeight: '100dvh',
                        margin: '0 auto',
                    }}
                >
                    <Outlet />
                </main>
            </div>
        </>
    );
}
