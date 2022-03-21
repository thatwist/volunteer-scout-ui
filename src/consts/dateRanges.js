import { getUnixTime, addDays, addWeeks, startOfDay } from 'date-fns';

const currentDate = new Date();

export const DATE_RANGES = [
  {
    label: 'Last 1h',
    start: getUnixTime(startOfDay(addDays(currentDate, -1))),
  },
  {
    label: 'Last 24h',
    start: getUnixTime(startOfDay(addDays(currentDate, -1))),
  },
  {
    label: 'Last 3d',
    start: getUnixTime(startOfDay(addDays(currentDate, -3))),
  },
  {
    label: 'Past week',
    start: getUnixTime(startOfDay(addWeeks(currentDate, -1))),
  },
];
