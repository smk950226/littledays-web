import type { FileType } from '../enum/file_type';

export type AssetInfo = {
    type: FileType;
    url: string;
    duration?: number;
};
