import Article from "@/types/Article";
import Image from "next/image";

interface SeoArticleProps {
  list: Array<Article>
}

export default function SeoArticle({ list }: SeoArticleProps) {
  return (
    <>
      <div className="article-list">
        {list.map((article, index) => {
          return (
            <div key={index} className="article">
              <div className="subtitle">
                <h2>{article.subtitle}</h2>
              </div>
              <div className="contents">
                {article.contents}
              </div>
              <div className="image-box">
                {article.imageSrc && article.imageAlt && (
                  <div className="image">
                    <Image
                      src={article.imageSrc}
                      alt={article.imageAlt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>)}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .subtitle h2 {
          margin: 0;
        }
        .article {
          position: relative;
        }
        .article-list {
          padding: 2rem 0;
        }
        .article div {
          {/* border: solid; */}
          padding: 0.5rem 0;
        }
        .contents {
          line-height: 150%;
        }
        .image {
          position: relative;
          width: 10rem;
          height: 10rem;
        }
        .image-box {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
