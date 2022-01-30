/*
 * Constants
 */

const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/*
 * Helpers
 */

export const getCurrentDate = () => {
  const weekday = WEEKDAYS[new Date().getDay()];
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  return `${weekday} ${day}/${month}/${year}`;
};
