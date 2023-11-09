import ZodiacSignAgeHomePage from "@/components/zodiac/sign/age/ZodiacSignAgeHomePage";
import { serviceYearList } from "@/data/zodiac/sign/zodiacSignData";
import { toString } from "lodash-es";
import { GetStaticPaths, GetStaticPropsContext, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = async function () {
  const paths = serviceYearList.map(year => {
    return {
      params: { year: toString(year) }
    }
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
}

interface Props {
  data: Data;
}

const ZodiacSignAgeYearPageRouter: NextPage<Props> = ({ data }) => {
  return (
    <>
      <ZodiacSignAgeHomePage year={data.year}/>
    </>
  );
}

export default ZodiacSignAgeYearPageRouter;