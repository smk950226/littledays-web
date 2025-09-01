import { createRootRouteWithContext } from '@tanstack/react-router';

import RootLayout from '@/feature/root/layout';

interface Context {}

export const Route = createRootRouteWithContext<Context>()({
    component: RootLayout,
});
