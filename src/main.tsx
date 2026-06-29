import './common/theme/css/global.css';
import './common/i18n/i18n.ts';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import ThemeProvider from './common/theme/provider.tsx';
import router from './common/router/index.ts';
import RepositoryProvider from './common/repository/provider.tsx';
import Env from './common/constant/env.ts';

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const firebaseConfig = {
    apiKey: import.meta.env[Env.firebase.apiKey],
    authDomain: import.meta.env[Env.firebase.authDomain],
    projectId: import.meta.env[Env.firebase.projectId],
    storageBucket: import.meta.env[Env.firebase.storageBucket],
    messagingSenderId: import.meta.env[Env.firebase.messagingSenderId],
    appId: import.meta.env[Env.firebase.appId],
    measurementId: import.meta.env[Env.firebase.measurementId],
};

getAnalytics(initializeApp(firebaseConfig));

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
