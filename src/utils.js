import { formatDistanceToNow } from 'date-fns';

import ukLocale from './uk-locale-decorator';

export function formatNumber(value) {
  return Number(value).toLocaleString();
}

export function formatDate(date) {
  return formatDistanceToNow(date, { addSuffix: true, locale: ukLocale });
}

export function getPlatformTitle(platform) {
  switch (platform) {
    case 'tg-channel':
      return 'telegram';
    default:
      return '';
  }
}
