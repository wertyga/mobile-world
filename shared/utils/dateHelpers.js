import { getNoun } from './stringHelpers';

const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const dateNounTypes = {
  day: ['день', 'дня', 'дней'],
  hours: ['час', 'часа', 'часов'],
  minutes: ['минута', 'минуты', 'минут'],
};

const defaultOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
};
const iso8601 = /^(\d{4})-(\d{1,2})-(\d{1,2})([T ](\d{1,2}):(\d{1,2}):(\d{1,2})(\.\d+)?(Z|([+-])(\d{1,2})(:(\d{1,2}))?)?)?$/;

const getDays = seconds => Math.floor(seconds / (60 * 60 * 24));
const getHours = seconds => Math.floor(seconds / (60 * 60));
const getMinutes = seconds => Math.floor(seconds / 60);

const getNounDate = (type) => {

}

const parseISO8601 = (datestring) => {
  const [
    ,
    sYear,
    sMonth,
    sDay,
    sTime,
    sHour,
    sMinute,
    sSecond,
    sFraction,
    sTimezone,
    sOffsetSign,
    sOffsetHour,
    sHasOffsetMinute,
    sOffsetMinute,
  ] = datestring.match(iso8601) || [];
  if (!sTime) {
    return new Date(sYear - 0, sMonth - 1, sDay - 0);
  }
  let date;
  if (sFraction) {
    date = new Date(sYear - 0, sMonth - 1, sDay - 0, sHour - 0, sMinute - 0, sSecond - 0, `0${sFraction}000` * 1000);
  } else {
    date = new Date(sYear - 0, sMonth - 1, sDay - 0, sHour - 0, sMinute - 0, sSecond - 0);
  }
  if (sTimezone) {
    let time = date.getTime();
    const multiplier = Number(`${sOffsetSign}1`);
    if (sOffsetHour) {
      time += multiplier * sOffsetHour * 60 * 60 * 1000;
    }
    if (sHasOffsetMinute) {
      time += multiplier * sOffsetMinute * 60 * 1000;
    }
    return new Date(time);
  }
  return date;
};

export const parseDate = (datestring) => {
  const date = parseISO8601(datestring.replace(/\//g, '-'));
  if (date === 'Invalid Date') {
    return 'Дата не определена';
  }

  return date;
};

export const beautifyDateServer = (datestring) => {
  const date = parseDate(datestring);
  if (typeof date !== 'object') return date;
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};


export const beautifyDate = (datestring, options = defaultOptions) => {
  return parseDate(datestring).toLocaleString('ru', options);
};

export const getMonthBefore = () => {
  const now = new Date();
  const year = `20${now.getYear().toString().slice(1)}`; // Get 20... year
  return  new Date(year, now.getMonth() - 1, now.getDate())
};

export const getTimePassFromNow = (date) => {
  const nowDate = new Date();
  const prevDate = new Date(date);
  const differenceTime = (nowDate.getTime() - prevDate.getTime()) / 1000;

  const days = getDays(differenceTime);
  const hours = getHours(differenceTime - (days * 24 * 60 * 60));
  const minutes = getHours(differenceTime - (days * 24 * 60 * 60) - (hours * 60));

  if (!!+days) {
    const noun = getNoun(days, dateNounTypes.day[0], dateNounTypes.day[1], dateNounTypes.day[2]);
    return `${days} ${noun} назад`
  }
  if (!!+hours) {
    const noun = getNoun(hours, dateNounTypes.hours[0], dateNounTypes.hours[1], dateNounTypes.hours[2]);
    return `${hours} ${noun} назад`;
  }
  if (!!+minutes) {
    const noun = getNoun(minutes, dateNounTypes.minutes[0], dateNounTypes.minutes[1], dateNounTypes.minutes[2]);
    return `${minutes} ${noun} назад`;
  }

  return 'Только что';
}