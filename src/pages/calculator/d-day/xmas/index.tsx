import XmasDdayPage from "@/components/d-day/XmasDdayPage";
import { currentYear } from "@/data/common/commonData";

export default function XmasDdayPageHome() {
  return (
    <>
      <XmasDdayPage year={currentYear} />
    </>
  );
}