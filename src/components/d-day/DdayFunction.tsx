import DiffDayOutput from "@/components/d-day/DiffDayOutput";
import DateInput from "@/pages/calculator/d-day/_components/DateInput";
import ShareButton from "../common/ShareButton";

interface Props {
  readOnly?: boolean;
}

export default function DdayFunction({ readOnly }: Props) {
  return (
    <>
      <div>
        <DiffDayOutput />
        {!readOnly && <DateInput />}
        <ShareButton />
      </div>
    </>
  );
}

