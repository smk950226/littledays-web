import { createFileRoute } from '@tanstack/react-router';

import PolicyCSAE from '@/feature/policy/screen/csae.tsx';

export const Route = createFileRoute('/policy/csae/')({
    component: PolicyCSAE,
});
