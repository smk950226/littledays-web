import i18n from '../i18n/i18n';

export function toLocalYYYYMMDD(date: Date) {
    return `${i18n.t('YYYYMMDD', {
        year: i18n.t('year', {
            year: date.getFullYear(),
        }),
        month: i18n.t(`month${date.getMonth() + 1}`),
        date: i18n.t('date', {
            date: date.getDate(),
        }),
    })}`;
}
