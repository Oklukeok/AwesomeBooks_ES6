import { timeAndDate } from './modules/variables.js';
import { DateTime } from './modules/luxon.js';

export default function dateAndTimeNow () {
  setInterval(() => {
    const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    timeAndDate.innerHTML = date;
  }, 0);
}