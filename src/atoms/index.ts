import { atom } from "recoil";
import { v1 } from "uuid";

const diffDayTargetDateState = atom<Date>({
  key: `diffDayTargetDateState_${v1()}`,
  default: new Date()
});

const noticeState = atom({
  key: `noticeState_${v1()}`,
  default: {
    open: false,
    title: '',
    content: '',
    titleColor: 'darkblue',
    contentColor: 'darkgreen',
  },
});

export {
  diffDayTargetDateState,
  noticeState,
};
