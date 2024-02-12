import DiffDayOutput from "@/components/d-day/DiffDayOutput";
import DateInput from "@/pages/calculator/d-day/_components/DateInput";
import BasicButton from "../common/BasicButton";

interface Props {
  readOnly?: boolean;
}

export default function DdayFunction({ readOnly }: Props) {
  return (
    <>
      <div>
        <DiffDayOutput />
        {!readOnly && <DateInput />}
        <BasicButton text="공유하기" />
      </div>
    </>
  );
}

