
interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>

      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
    </>
  );
}