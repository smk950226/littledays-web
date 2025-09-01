import type { NetworkAsset } from '@/feature/file/data/model/network_asset';
import type { Gender } from '../enum/gender';
import type { BabyBody } from '../model/baby_body';

export type Baby = {
    id: number;
    code: string;
    images: NetworkAsset[];
    name: string;
    year: number;
    month: number;
    date: number;
    gender: Gender;
    body?: BabyBody;
};
