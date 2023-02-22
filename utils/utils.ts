export const convertToDate = (date: Date) => {
  return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
};

export const getTime = (date: Date) => {
  var ampm: String = 'AM';
  var hours: Number;

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

  return hours + ':' + date.getMinutes().toString() + ' ' + ampm;
};
