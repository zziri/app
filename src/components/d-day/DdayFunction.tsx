import DiffDayOutput from "@/components/d-day/DiffDayOutput";
import DateInput from "@/pages/calculator/d-day/_components/DateInput";
import ShareButton from "../common/ShareButton";
import { useRecoilValue } from "recoil";
import { diffDayTargetDateState } from "@/atoms";
import { format } from "date-fns";
import { useEffect, useState } from "react";

interface Props {
  readOnly?: boolean;
}

export default function DdayFunction({ readOnly }: Props) {
  const targetDate = useRecoilValue(diffDayTargetDateState);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fullUrl = window.location.origin + window.location.pathname + `?date=${format(targetDate, 'yyyy-MM-dd')}`;
    setUrl(fullUrl);
  }, [targetDate]);

  return (
    <>
      <div>
        <DiffDayOutput />
        {!readOnly && <DateInput />}
        <ShareButton url={url}/>
      </div>
    </>
  );
}
