import Head from "next/head";

interface Props {
  title: string,
  description: string
}

export default function SeoHead({ title, description }: Props) {
  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4184579550762583"
        crossOrigin="anonymous"></script>
    </Head>
  </>;
}

