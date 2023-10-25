
interface DescriptionProps {
  content: string;
}

export default function Description({ content }: DescriptionProps) {
  return (
    <>
      <div>
        <p>{content}</p>
      </div>
    </>
  );
}