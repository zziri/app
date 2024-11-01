import copy from "copy-to-clipboard";
import { ChangeEvent, useEffect, useState } from "react";
import { MouseEvent } from "react";
import styled from 'styled-components';

const Root = styled.div`
  border-top: 0.1rem solid gray;
  border-bottom: 0.1rem solid gray;
  border-width: 0.1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Output = styled.div`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const Result = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const Input = styled.div`
  padding-top: 0.25rem;
`;

const Length = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const TextInput = styled.input`
  border-radius: 0.5rem;
  border-width: 0.1rem;
  padding-left: 1rem;
  width: 12rem;
  font-size: 1rem;
`;

const RangeInput = styled.input`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 20rem;
`;

function getRandomString(num: number) {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export default function PasswordExtractorFunction() {
  const [password, setPassword] = useState<string>('');
  const [length, setLength] = useState<number>(10);

  function refreshPassword(len: number) {
    const randomString = getRandomString(len);
    setPassword(randomString);
  }

  function onClickRefresh(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    refreshPassword(length);
  }

  function onClickCopy(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    copy(password);
  }

  function onChangeRange(e: ChangeEvent<HTMLInputElement>) {
    const newLen = Number(e.target.value);
    setLength(newLen);
    refreshPassword(newLen);
  }

  function onChangeLength(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    onChangeRange(e);
  }

  useEffect(() => {
    refreshPassword(length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Root>
      <Output>
        <label>생성된 비밀번호</label>
        <Result>
          <TextInput value={password} readOnly />
          <button onClick={onClickCopy}>복사</button>
          <button onClick={onClickRefresh}>재생성</button>
        </Result>
      </Output>
      <Input>
        <Length>
          <label>비밀번호 길이</label>
          <TextInput type="number" value={length} onChange={onChangeLength}/>
        </Length>
        <RangeInput type="range" value={length} min={0} max={20} onChange={onChangeRange}/>
      </Input>
    </Root>
  );
}
