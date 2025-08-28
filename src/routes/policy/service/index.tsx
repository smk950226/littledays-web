import { createFileRoute } from '@tanstack/react-router';

import PolicyService from '../../../feature/policy/screen/service';

export const Route = createFileRoute('/policy/service/')({
    component: PolicyService,
});
