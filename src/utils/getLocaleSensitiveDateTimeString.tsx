import { memoize } from 'lodash-es';

const getUserIntlDateTimeFormat = memoize(() => {
  const lang = window.navigator.language;
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };

  try {
    return new Intl.DateTimeFormat(lang, options);
  } catch {
    return new Intl.DateTimeFormat('en', options);
  }
});

/**
 * Returns a locale appropriate formatted timestamp
 *
 * @param day 1-31
 * @param month 1-12
 * @param year YYYY
 */
function getLocaleSensitiveDateTimeString(day: number, month: number, year: number): string {
  const jsDate = new Date(year, month + 1, day);
  const formatter = getUserIntlDateTimeFormat();
  return formatter.format(jsDate);
}

export { getLocaleSensitiveDateTimeString };
