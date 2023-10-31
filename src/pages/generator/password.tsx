import Description from "@/components/common/Description";
import SeoArticle from "@/components/common/SeoArticle";
import SeoHead from "@/components/common/SeoHead";
import Title from "@/components/common/Title";
import PasswordGeneratorFunction from "@/components/generator/password/PasswordGeneratorFunction";


export default function PasswordGeneratorPage() {
  const title = '랜덤 비밀번호 생성기';
  const description = '';
  return (
    <>
      <SeoHead title={title} description={description}/>
      <Title title={title}/>
      <Description content={description} />
      <PasswordGeneratorFunction />
      <SeoArticle list={[]}/>
    </>
  );
}
