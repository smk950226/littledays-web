import './common/theme/css/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import ThemeProvider from './common/theme/provider.tsx';
import router from './common/router/index.ts';

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
            <TanStackRouterDevtools router={router} />
        </ThemeProvider>
    </StrictMode>,
);
