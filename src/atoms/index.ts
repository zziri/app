import { atom } from "recoil";
import { v1 } from "uuid";

const diffDayTargetDateState = atom<Date>({
  key: `diffDayTargetDateState_${v1()}`,
  default: new Date()
});

export { diffDayTargetDateState };