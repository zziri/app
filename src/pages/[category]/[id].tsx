// pages/[category]/[id].js

// 데이터를 가져오는 가상의 함수입니다. 실제로는 API 요청을 할 수도 있고,
// 파일 시스템에서 읽어올 수도 있습니다.
async function fetchData(category: string, id: number) {
  // 여기에 데이터를 가져오는 로직을 구현합니다.
  return {
    title: `${category}/${id} title`,
    content: `${category}/${id} contents`
  }
}

export async function getStaticPaths() {
  // 가능한 모든 카테고리와 ID의 조합을 가져옵니다.
  // 이 부분은 실제 데이터에 기반하여 구현해야 합니다.
  const paths = [
    { params: { category: 'category1', id: '1' } },
    { params: { category: 'category1', id: '2' } },
    // 더 많은 경로...
  ];

  return {
    paths,
    fallback: false, // 이 경로에 매치되지 않는 페이지는 404 페이지를 반환합니다.
  };
}

export async function getStaticProps({ params }: any) {
  // params.category와 params.id를 사용하여 필요한 데이터를 가져옵니다.
  const data = await fetchData(params.category, params.id);

  return {
    props: { data },
  };
}

export default function CategoryPage({ data }: any) {
  // 페이지의 UI를 렌더링합니다. data는 위에서 fetch한 데이터입니다.
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.content}</p>
    </div>
  );
}
