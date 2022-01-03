import Head from "next/head";
import Image from "next/image";
import Informations from "../src/components/Informations/Informations";
import PassTests from "../src/components/PassTests/PassTests";
import Layout from "../src/components/layout/layout";
import Counter from "../src/components/Counter/Counter";

export default function Home({ post }) {
  return (
    <>
      <Head>
        <title>Bushro academy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <main>
          <Counter />
          <Informations />
          <PassTests />
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  /*
    All Fetchs
  */

  return {
    props: {
      post: {},
    },
  };
}
