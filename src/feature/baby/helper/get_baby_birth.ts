import type { Baby } from '../data/entity/baby';

export function getBabyBirth(baby: Baby): Date {
    return new Date(baby.year, baby.month - 1, baby.date);
}
