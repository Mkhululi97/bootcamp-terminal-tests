const weekdays = "Monday,Tuesday,Wednesday,Thursday,Friday";
export default function isWeekday(weekday) {
  return weekdays.includes(weekday);
}
