// App.tsx 또는 다른 부모 컴포넌트
import React, { useState } from 'react';
import Notice from './Notice';

const Test = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen(!open);

  return (
    <div>
      <button onClick={toggleModal}>Toggle Notice</button>
      <Notice
        open={open}
        title="Important Notice"
        content="This is an important message for you."
        onClose={toggleModal} // 모달 닫기 함수
      />
    </div>
  );
}

export default Test;