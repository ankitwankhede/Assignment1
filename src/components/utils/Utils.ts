export const getDayFromDate = (date: string): string => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const d = new Date(date);
  let day = weekday[d.getDay()];
  return day.slice(0, 3);
};

export const getMonthDateFromDate = (date: string): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const d = new Date(date);
  return `${months[d.getMonth()].slice(0, 3)} ${d.getDate()}`;
};

export const getNewDate = (daysToAdd: number): string => {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + daysToAdd);

  const options = {month: 'long', day: 'numeric'};

  return futureDate.toLocaleDateString('en-US', options);
};
