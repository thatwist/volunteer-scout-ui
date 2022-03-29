import { formatDistanceToNow } from 'date-fns';
import ukLocale from 'date-fns/locale/uk';

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
