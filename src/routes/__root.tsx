import { createRootRouteWithContext } from '@tanstack/react-router';
import type { QueryClient } from '@tanstack/react-query';

import RootLayout from '@/feature/root/layout';

interface Context {
    client: QueryClient;
}

export const Route = createRootRouteWithContext<Context>()({
    component: RootLayout,
});
