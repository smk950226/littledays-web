import { createFileRoute } from '@tanstack/react-router';

import PolicyPrivacy from '@/feature/policy/screen/privacy';

export const Route = createFileRoute('/policy/privacy/')({
    component: PolicyPrivacy,
});
