
export default function RandomExtractorFunction() {
  return (
    <>
      <div>
        <div>
          <div className="input">
            <div>
              <span title="숫자 범위 (Range)">숫자 범위</span>: <input type="number" size={6} id="startNUM" value="1" title="시작 값 (Begin)"/> ~ <input type="number" size={6} id="endNUM" value="45" title="끝 값 (End)" />
            </div>
          </div>
        </div>
        <div className="input">
          <div>
            <span title="추출 숫자의 갯수 (Count)">추출 숫자의 갯수</span>: <input type="number" size={6} id="selectNum" value="6" title="추출 숫자가 너무 큰 경우 오래 기다려야 할 수 있습니다."/>&nbsp;<input type="submit" id="calcButton" value="추첨하기" title="누르면 추첨합니다. (Submit)" />
          </div>
        </div>
        <div>결과</div>
      </div>
      <style jsx>{`
        div {
          {/* border: solid; */}
        }
        .input {
          padding: 1rem;
        }
      `}</style>
    </>
  );
}