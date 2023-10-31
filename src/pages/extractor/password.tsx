import Description from "@/components/common/Description";
import EmptyDiv from "@/components/common/EmptyDiv";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import PasswordExtractorFunction from "@/components/extractor/password/PasswordGeneratorFunction";
import { passwordArticleList } from "@/data/extractor/passwordData";


export default function PasswordGeneratorPage() {
  const title = '랜덤 비밀번호 생성기';
  const description = '무작위로 암호를 생성할 수 있는 패스워드 생성기입니다. Range bar를 움직여서 다양한 길이의 비밀번호를 생성해 보세요.';
  return (
    <>
      <SeoHead title={title} description={description}/>
      <Title title={title}/>
      <Description content={description} />
      <EmptyDiv height={'2rem'}/>
      <PasswordExtractorFunction />
      <SeoArticle list={passwordArticleList}/>
    </>
  );
}
