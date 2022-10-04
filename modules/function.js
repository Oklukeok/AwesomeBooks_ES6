import timeAndDate from './variables.js';
import { DateTime } from './luxon.js';

export default function dateAndTimeNow() {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  timeAndDate.innerHTML = date;
}