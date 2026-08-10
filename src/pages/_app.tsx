import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TOTC — Virtual Class for Zoom</title>
        <meta
          name="description"
          content="TOTC is a platform that allows educators to create online classes, store course materials, manage assignments and exams, and grade results all in one place."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
