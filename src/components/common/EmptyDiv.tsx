
interface EmptyDivProps {
  height: string;
}

export default function EmptyDiv({ height }: EmptyDivProps) {
  return (
    <>
      <div></div>
      <style jsx>{`
        div {
          height: ${height};
        }
      `}</style>
    </>
  );
}
