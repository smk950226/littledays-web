import { QueryClient } from '@tanstack/react-query';

export const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            staleTime: 1000 * 60,
            retry: false,
            throwOnError: false,
        },
        mutations: {
            retry: false,
            throwOnError: false,
        },
    },
});
