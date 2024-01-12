import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Article {
  subtitle: string;
  contents: ReactNode;  // <article></article> 형태로
  imageSrc?: StaticImageData | string | null;
  imageAlt?: string | null;
}

export default Article;