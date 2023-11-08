import ZodiacSignAgePage from "@/components/zodiac/sign/age/ZodiacSignAgePage";
import { zodiacSignList } from "@/data/zodiac/sign/zodiacSignData";
import { getYear } from "date-fns";
import { flatMap, range, toString } from "lodash-es";
import { GetStaticPaths, GetStaticPropsContext, NextPage } from "next/types";

const now = new Date();
const currentYear = getYear(now);
const serviceYearList = range(currentYear - 1, currentYear + 2);

export const getStaticPaths: GetStaticPaths = async function () {
  const paths = flatMap(serviceYearList, (year) => {
    return zodiacSignList.map(sign => {
      return { params: { year: toString(year), sign } };
    })
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const data = params;

  return {
    props: { data },
  }
}

interface Data {
  year: string;
  sign: string;
}

interface Props {
  data: Data;
}

const ZodiacSignAgePageRouter: NextPage<Props> = ({ data }) => {
  return (
    <>
      <ZodiacSignAgePage year={Number(data.year)} sign={data.sign} />
    </>
  );
}

export default ZodiacSignAgePageRouter;
