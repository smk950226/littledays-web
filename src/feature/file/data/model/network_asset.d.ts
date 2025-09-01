import type { AssetInfo } from './asset_info';

export type NetworkAsset = {
    id: string;
    thumbnail: AssetInfo;
    original: AssetInfo;
    converted?: AssetInfo;
};
