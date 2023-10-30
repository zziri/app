import { isEmpty, range, shuffle, slice } from "lodash-es";
import { ChangeEvent, useState } from "react";

export default function RandomExtractorFunction() {
  const [start, setStart] = useState<number>(1);
  const [end, setEnd] = useState<number>(45);
  const [count, setCount] = useState<number>(6);
  const [list, setList] = useState<Array<number>>([]);

  function onChangeStart(e: ChangeEvent<HTMLInputElement>) {
    setStart(Number(e.target.value));
  }

  function onChangeEnd(e: ChangeEvent<HTMLInputElement>) {
    setEnd(Number(e.target.value));
  }

  function onClickExtract(e: any) {
    e.preventDefault();

    const rangeList = range(start, end + 1);
    const shuffled = shuffle(rangeList);
    const sliced = slice(shuffled, 0, count);
    setList(sliced);
  }

  function onChangeCount(e: any) {
    setCount(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="input range">
          <span>숫자 범위: </span>
          <input type="number" onChange={onChangeStart} value={start} />
          <span> ~ </span>
          <input type="number" onChange={onChangeEnd} value={end} />
        </div>
        <div className="input count">
            <span>갯수:</span>
            <input type="number" value={count} onChange={onChangeCount}/>
            <button onClick={onClickExtract}>뽑기</button>
        </div>
        <div className="result">
          <span>
            {!isEmpty(list) && list.map((value, index) => {
              const suffix = (list.length - 1 === index) ? '' : ', ';
              return `${value}${suffix}`;
            })}
          </span>
        </div>
      </div>
      <style jsx>{`
        .container * {
          font-size: 1rem;
        }
        div {
          {/* border: solid; */}
        }
        .input {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 1rem;
          gap: 0.5rem;
        }
        .result {
          padding: 1rem;
        }
        .result span {
          font-size: 2rem;
          font-weight: bold;
        }
        input {
          max-width: 3.5rem;
          height: 1rem;
          border-radius: 0.5rem;
          border-width: 0.1rem;
          padding-left: 1rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        button {
          border-radius: 0.75rem;
          padding: 0.5rem;
          text-align: center;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}