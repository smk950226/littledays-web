import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { Children } from '@/common/data/type/component';

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

export default function RepositoryProvider({ children }: Children) {
    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools buttonPosition={'bottom-right'} />
        </QueryClientProvider>
    );
}
