import DiffDayOutput from "@/components/d-day/DiffDayOutput";
import SelectDate from "@/components/d-day/SelectDate";
import DateInput from "@/pages/calculator/d-day/_components/DateInput";

interface Props {
  readOnly?: boolean;
}

export default function DdayFunction({ readOnly }: Props) {
  return (
    <>
      <div>
        <DiffDayOutput />
        {!readOnly && <DateInput />}
      </div>
    </>
  );
}

