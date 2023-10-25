import { ReactNode } from "react";

interface Article {
  subtitle: string;
  contents: ReactNode;  // <article></article> 형태로
  imageSrc: string | null;
  imageAlt: string | null;
}

export default Article;