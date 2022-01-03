import Head from "next/head";
import Image from "next/image";
import Informations from "../src/components/Informations/Informations";
import Layout from "../src/components/layout/layout";

export default function Home({ post }) {
  return (
    <>
      <Layout>
        <main>
          <Informations />
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
