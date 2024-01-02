import Article from "@/types/Article";
import Image from "next/image";
import styled from 'styled-components';

const ArticleList = styled.div`
  padding: 2rem 0;
`;

const ArticleItem = styled.div`
  position: relative;
`;

const HeaderWrapper = styled.div`
  padding: 0.5rem 0;
`;

const Header = styled.h2`
  margin: 0;
  padding-top: 2rem;
`;

const Contents = styled.div`
  line-height: 150%;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.div`
  position: relative;
  width: 17rem;
  height: 17rem;
`;

interface SeoArticleProps {
  list: Array<Article>
}

export default function SeoArticle({ list }: SeoArticleProps) {
  return (
    <ArticleList>
      {list.map((article, index) => (
        <ArticleItem key={index}>
          <HeaderWrapper>
            <Header>{article.subtitle}</Header>
          </HeaderWrapper>
          <Contents>
            {article.contents}
          </Contents>
          <ImageBox>
            {article.imageSrc && article.imageAlt && (
              <StyledImage>
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  layout="fill"
                  objectFit="cover"
                />
              </StyledImage>
            )}
          </ImageBox>
        </ArticleItem>
      ))}
    </ArticleList>
  );
}
