import ZodiacSignAgePage from "@/components/zodiac/sign/age/ZodiacSignAgePage";
import { GetStaticPaths, GetStaticPropsContext, NextPage } from "next/types";

export const getStaticPaths: GetStaticPaths = async function () {
  const paths = [
    {
      params: { year: '2024', sign: 'dragon' }
    },
  ];

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
