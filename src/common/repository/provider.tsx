import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { Children } from '@/common/data/type/component';

import { client } from './query_client';

export default function RepositoryProvider({ children }: Children) {
    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools buttonPosition={'bottom-right'} />
        </QueryClientProvider>
    );
}
