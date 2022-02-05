import { getAuth } from 'firebase/auth';

/*
 * Constants
 */

const auth = getAuth();

const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const email = auth.currentUser?.email;
const emailWithoutDomain = email ? email.substring(0, email.indexOf('@')) : '';

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

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizedEmailWithoutDomain =
  capitalizeFirstLetter(emailWithoutDomain);
