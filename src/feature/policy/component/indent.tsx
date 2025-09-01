import Row from '@/common/component/layout/grid/row';
import Body2 from '@/common/component/layout/typography/body2';

import type { Children } from '@/common/data/type/component';

type Props = Children & {
    prefix?: string;
    depth?: number;
};

export default function Indent({ children, prefix, depth = 1 }: Props) {
    return (
        <Row style={{ marginLeft: 30 * depth }}>
            {!!prefix && <Body2 style={{ marginRight: 10 }}>{prefix}</Body2>}
            <Body2>{children}</Body2>
        </Row>
    );
}
