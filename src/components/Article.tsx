
interface ArticleProps {
  content: string;
}

export default function Article({ content }: ArticleProps) {
  return (
    <>
      <div>
        <p>{content}</p>
      </div>
    </>
  );
}