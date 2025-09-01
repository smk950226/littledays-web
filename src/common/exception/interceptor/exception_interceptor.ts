import { toast } from 'sonner';

import type { AxiosError } from 'axios';

import t from '@/common/i18n/helper/t';
import ExecutionExceptionMessage from '@/common/exception/message/execution_exception';

import type { ErrorResponse } from '@/common/data/type/error_response';

export default function ExceptionInterceptor({
    response,
    status = 500,
}: AxiosError<ErrorResponse>) {
    if (!response) {
        toast(t(ExecutionExceptionMessage.unknown));
        return Promise.reject<ErrorResponse>({
            code: `${status}`,
            message: t(ExecutionExceptionMessage.unknown),
        });
    }
    toast(response.data.message);
    return Promise.reject<ErrorResponse>(response.data);
}
