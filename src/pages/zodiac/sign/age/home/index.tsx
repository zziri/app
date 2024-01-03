import ZodiacSignAgeHomePage from "../_components/ZodiacSignAgeHomePage";
import { currentYear } from "@/data/common/commonData";
import { toString } from "lodash-es";

export default function ZodiacSignAgeHomePageIndex() {
  return (
    <>
      <ZodiacSignAgeHomePage year={toString(currentYear)} />
    </>
  );
}
