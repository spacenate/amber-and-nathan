import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Html lang="en">
      <Head>{basePath && <base href={basePath} />}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
