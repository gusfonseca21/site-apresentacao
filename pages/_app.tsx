import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gustavo Fonseca | Dev</title>
        <meta
          name="description"
          content="Site de apresentação de Gustavo Fonseca de Araújo, desenvolvedor Web Front-End, focado em React, JS, TS, HTML, CSS e Next.js"
        />
        <meta
          name="keywords"
          content="Gustavo Fonseca de Araújo, desenvolvedor, Front-End, JavaScript, TypeScript, CSS, HTML, React, Nextjs"
        />
        <meta name="author" content="Gustavo Fonseca de Araújo" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,  user-scalable=0"
        />

        <link rel="icon" href="/icons/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
