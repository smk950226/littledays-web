import { Outlet } from '@tanstack/react-router';

import useTheme from '@/common/theme/hook/use_theme';
import Sizing from '@/common/theme/sizing';

export default function RootLayout() {
    const { theme } = useTheme();

    return (
        <>
            <div
                style={{
                    backgroundColor: theme.background.default,
                }}
            >
                <main
                    style={{
                        minWidth: Sizing.layout.width.min,
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
