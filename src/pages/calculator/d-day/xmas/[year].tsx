import XmasDdayPage from "@/components/d-day/XmasDdayPage";
import { currentYear } from "@/data/common/commonData";
import { range, toString } from "lodash-es";
import { GetStaticPaths, GetStaticPropsContext, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = async function () {
  const serviceYearList = range(currentYear - 1, currentYear + 2);
  const paths = serviceYearList.map(year => ({ params: { year: toString(year) } }));

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  return {
    props: { params },
  }
}

interface Params {
  year: string;
}

interface Props {
  params: Params;
}

const XmasDdayPageRouter: NextPage<Props> = ({ params }) => {
  const yearStr = params.year;

  return (
    <>
      <XmasDdayPage year={Number(yearStr)} />
    </>
  );
}

export default XmasDdayPageRouter;
