import { createFileRoute } from '@tanstack/react-router';

import Home from '../feature/root/screen/home';

export const Route = createFileRoute('/')({
    component: Home,
});
