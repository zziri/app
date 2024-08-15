import Description from "@/components/common/Description";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import Body from "./_components/Body";
import salaryArticleList from "./_data/articleList";

const title = '연봉 실수령액표';
const description = `
연봉 실수령액표입니다. 연봉에 따른 월실수령액을 간편하게 확인할 수 있습니다.
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
