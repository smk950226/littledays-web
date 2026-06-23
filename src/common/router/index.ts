import { createRouter } from '@tanstack/react-router';

import { routeTree } from '@/routeTree.gen';
import Error from '@/feature/root/screen/error';
import Loading from '@/feature/root/screen/loading';
import NotFound from '@/feature/root/screen/not-found';
import { client } from '../repository/query_client';

const router = createRouter({
    routeTree,
    context: {
        client,
    },
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultStructuralSharing: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: Error,
    defaultPendingComponent: Loading,
    defaultNotFoundComponent: NotFound,
});

export default router;
