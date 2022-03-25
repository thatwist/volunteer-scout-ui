import { format } from 'date-fns';

export function formatNumber(value) {
  return Number(value).toLocaleString();
}

export function formatDate(date) {
  return format(date, 'dd.MM HH:mm');
}

export function getPlatformTitle(platform) {
  switch (platform) {
    case 'tg-channel':
      return 'telegram';
    default:
      return '';
  }
}
