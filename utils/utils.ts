export const convertToDate = (str: string) => {
  const date = new Date(str);
  return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
};

export const getTime = (str: string) => {
  const date = new Date(str);
  let ampm: String = 'AM';
  let hours: Number;
  let minuteStr: String = '';

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
