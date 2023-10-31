import { ChangeEvent, useEffect, useState } from "react";
import { MouseEvent } from "react";


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
    window.navigator.clipboard.writeText(password);
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
  }, []);

  return (
    <>
      <div className="root">
        <div className="output">
          <label>생성된 비밀번호</label>
          <div className="result">
            <input className="text-input" value={password} readOnly />
            <button onClick={onClickCopy}>복사</button>
            <button onClick={onClickRefresh}>재생성</button>
          </div>
        </div>
        <div className="input">
          <div className="length">
            <div>비밀번호 길이</div>
            <input className="text-input" type="number" value={length} onChange={onChangeLength}/>
          </div>
          <input className="range-input" type="range" value={length} min={0} max={20} onChange={onChangeRange}/>
        </div>
      </div>

      <style jsx>{`
        .root {
          border-top: 0.1rem solid gray;
          border-bottom: 0.1rem solid gray;
          border-width: 0.1rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        .output {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }
        .result {
          display: flex;
          gap: 0.5rem;
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }
        .input {
          padding-top: 0.25rem;
        }
        .text-input {
          border-radius: 0.5rem;
          border-width: 0.1rem;
          padding-left: 1rem;
          width: 12rem;
        }
        input {
          font-size: 1rem;
        }
        .length {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .range-input {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          width: 20rem;
        }
      `}</style>
    </>
  );
}
