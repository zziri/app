import { getYear } from "date-fns";

const current = new Date();
const currentYear = getYear(current);

export {
  current,
  currentYear,
};