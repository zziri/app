import Description from "@/components/common/Description";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import Body from "./_components/Body";
import salaryArticleList from "./_data/articleList";

const title = '연봉 실수령액표';
const description = `
간단하게 연봉 실수령액을 확인할 수 있는 연봉 실수령액표입니다.
연봉을 알고 있다면, 대략적인 월 실수령액과 세금 및 보험료를 알 수 있습니다.
`;

const SalaryTable = () => {
  return (
    <>
      <SeoHead
        title={title}
        description={description} />
      <Title title={title} />
      <Description content={description} />
      <Body />
      <SeoArticle list={salaryArticleList} />
    </>
  );
}

export default SalaryTable;
