export const convertToDate = (str: string) => {
  const date = new Date(str);
  return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
};

export const getTime = (str: string) => {
  const date = new Date(str);
  let ampm: String = 'AM';
  let hours: Number;
  let minuteStr: string = date.getMinutes().toString();

  if (date.getHours() == 0) {
    hours = 12;
  } else {
    if (date.getHours() > 12) {
      ampm = 'PM';
      hours = date.getHours() - 12;
    } else {
      hours = date.getHours();
    }
  }

  if (date.getMinutes() < 10) {
    minuteStr = '0' + date.getMinutes();
  }

  return hours + ':' + minuteStr + ' ' + ampm;
};

/**
 * Fetch data in given route
 * @param route Route name
 * @returns a Promise that resolves with the parsed JSON response data from the server
 */
export const fetchData = async (route: string) => {
  const res = await fetch(route);
  if (!res.ok) {
    throw new Error('An error has occurred while fetching: ' + res.statusText);
  }
  return await res.json();
};

/**
 * auto-format inputted phone number
 * adapted from https://tomduffytech.com/how-to-format-phone-number-in-react/
 * @param value inputted phone number
 * @returns phone number in the form of (xxx) xxx-xxxx
 */
export const formatPhoneNumber = (value: string) => {
  // if no input, return
  if (!value) return value;

  // phone number only has numbers
  const phoneNumber: string = value.replace(/[^\d]/g, '');

  // length of phone number
  const phoneNumberLength: number = phoneNumber.length;

  // auto-format based on length of numbers inputted
  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

/**
 * auto-format inputted birthday
 * @param value inputted birthday
 * @returns birthday in the form of MM-DD-YYYY
 */
export const formatBirthday = (value: string) => {
  if (!value) return value;

  const birthday: string = value.replace(/[^\d]/g, '');

  const birthdayLength: number = birthday.length;

  if (birthdayLength < 3) return birthday;

  if (birthdayLength < 5) {
    return `${birthday.slice(0, 2)}-${birthday.slice(2)}`;
  }

  return `${birthday.slice(0, 2)}-${birthday.slice(2, 4)}-${birthday.slice(
    4,
    8
  )}`;
};

/**
 * validate inputted birthday in the format
 * adapted from https://bobbyhadz.com/blog/javascript-check-if-date-is-valid#validate-a-date-formatted-as-ddmmyyyy-in-javascript
 * @param dateStr inputted birthday MM-DD-YYYY
 * @returns true if input is a valid birthday
 */
export const dateIsValid = (dateStr: string) => {
  const regex = /^\d{2}\-\d{2}\-\d{4}$/;

  if (dateStr.match(regex) === null) {
    return false;
  }

  // only changed the order of destructuring assignment
  const [month, day, year] = dateStr.split('-');

  // format Date string as `yyyy-mm-dd`
  const isoFormattedStr = `${year}-${month}-${day}`;

  const date = new Date(isoFormattedStr);

  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(isoFormattedStr);
};
