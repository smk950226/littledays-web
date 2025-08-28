import type { Size } from '../../data/type/size';

export function calculateWidth(size: Size, height: number): number {
    return (size.width * height) / size.height;
}

export function calculatetHeight(size: Size, width: number): number {
    return (size.height * width) / size.width;
}
