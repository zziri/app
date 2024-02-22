// hooks/useNotice.js
import { noticeState } from '@/atoms';
import { useSetRecoilState } from 'recoil';

const useNotice = () => {
  const setNotice = useSetRecoilState(noticeState);

  const notice = ({ title = '', content = '', titleColor = 'darkblue', contentColor = 'darkgreen' }) => {
    setNotice({
      open: true,
      title,
      content,
      titleColor,
      contentColor,
    });
  };

  return notice;
};


export {
  useNotice,
};
