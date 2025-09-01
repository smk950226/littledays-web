import { createFileRoute } from '@tanstack/react-router';

import Invite from '@/feature/root/screen/invite/invite';
import CheckBabyCode from '@/feature/baby/repository/check_baby_code';

export const Route = createFileRoute('/invite/$code/')({
    component: Invite,
    loader: async ({ context, params }) => {
        try {
            const { baby } = await context.client.fetchQuery({
                queryKey: CheckBabyCode.key,
                queryFn: () => CheckBabyCode.fetch({ code: params.code }),
            });
            return {
                baby,
            };
        } catch {
            return {};
        }
    },
});
