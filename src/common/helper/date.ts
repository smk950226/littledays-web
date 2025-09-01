import i18n from '../i18n/i18n';

export function toLocalYYYYMMDD(date: Date) {
    return `${date.getFullYear()}${i18n.t('year')}${date.getMonth() + 1}${i18n.t('month')}${date.getDate()}${i18n.t('date')}`;
}
