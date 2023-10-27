import DiffDayOutput from "@/components/d-day/DiffDayOutput";
import SelectDate from "@/components/d-day/SelectDate";

interface Props {
  readOnly?: boolean;
}

export default function CountDownDaysFunction({ readOnly }: Props) {
  return (
    <>
      <div>
        <DiffDayOutput />
        {!readOnly && <SelectDate />}
      </div>
    </>
  );
}

