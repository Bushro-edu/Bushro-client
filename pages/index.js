import Head from "next/head";
import Image from "next/image";
import Informations from "../src/components/Informations/Informations";
import Layout from "../src/components/layout/layout";

export default function Home({ post }) {
  return (
    <>
      <Head>
        <title>Bushro academy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
<<<<<<< HEAD
        <main>
          <Informations />
        </main>
=======
        <main></main>
>>>>>>> 069de2baf6c2d5dd30ab7772fa6fd5d5ca2be972
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
