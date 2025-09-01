import './common/theme/css/global.css';
import './common/i18n/i18n.ts';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import ThemeProvider from './common/theme/provider.tsx';
import router from './common/router/index.ts';
import RepositoryProvider from './common/repository/provider.tsx';

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <RepositoryProvider>
                <RouterProvider router={router} />
                <TanStackRouterDevtools router={router} />
            </RepositoryProvider>
        </ThemeProvider>
    </StrictMode>,
);
