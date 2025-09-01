import { get } from '@/common/repository/repository';
import type { BabyOutput } from '../data/dto/baby';
import type { CheckBabyCodeInput } from '../data/dto/check_baby_code';

export default abstract class CheckBabyCode {
    static key = ['baby'];

    static async fetch(data: CheckBabyCodeInput): Promise<BabyOutput> {
        return get<BabyOutput>(`/baby/check/${data.code}`);
    }
}
