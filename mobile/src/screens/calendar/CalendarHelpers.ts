import { QuickSelect } from "./CalendarScreen";
import {
  startOfDay,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  addDays,
  addMonths,
} from "date-fns";

const takeWeek = (start = new Date()) => {
  let date = startOfWeek(startOfDay(start));

  return () => {
    const week = [...Array(7)].map((_, i) => addDays(date, i));

    date = addDays(week[6], 1);
    return week;
  };
};

const takeMonth = (start = new Date()) => {
  let month = [];
  let date = start;

  const lastDayOfRange = range => {
    return range[range.length - 1][6];
  };

  return () => {
    const weekGenerator = takeWeek(startOfMonth(date));
    const endDate = startOfDay(endOfWeek(endOfMonth(date)));

    month.push(weekGenerator());

    while (lastDayOfRange(month) < endDate) {
      month.push(weekGenerator());
    }

    const range = month;
    month = [];
    date = addDays(lastDayOfRange(range), 1);

    return range;
  };
};

const iterateEnum = (enumerable: any) => {
  let enumMembers = Object.keys(enumerable).map(key => enumerable[key]);

  let enumValues: number[] = enumMembers.filter(v => typeof v === "string");

  return enumValues;
};

export { takeWeek, takeMonth, iterateEnum };
