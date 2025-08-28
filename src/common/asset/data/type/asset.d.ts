import type { FunctionComponent } from 'react';

import type { Size } from '@/common/data/type/size';

export type Asset = Size & {
    src: FunctionComponent;
};
