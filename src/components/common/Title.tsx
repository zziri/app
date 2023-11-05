
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
          font-size: 2rem;
          margin: 0;
          font-weight: bold;
        }
        div {
          padding: 1.25rem 0;
        }
      `}</style>
    </>
  );
}