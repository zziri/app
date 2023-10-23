import { atom } from "recoil";

const diffDayTargetDateState = atom<Date>({
  key: 'diffDayTargetDateState',
  default: new Date()
});

export { diffDayTargetDateState };