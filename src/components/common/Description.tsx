
interface DescriptionProps {
  content: string;
}

export default function Description({ content }: DescriptionProps) {
  return (
    <>
      <div>
        <article>{content}</article>
      </div>

      <style jsx>{`
        article {
          line-height: 150%;
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
}