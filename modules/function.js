import timeAndDate from './variables.js';
import { DateTime } from './luxon.js';

const dateAndTimeNow = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  timeAndDate.innerHTML = date;
};

export default dateAndTimeNow;