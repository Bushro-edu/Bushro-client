import Head from "next/head";
import Image from "next/image";
import Informations from "../src/components/Informations/Informatiomns";
import Layout from "../src/components/layout/layout";

export default function Home({ post }) {
  return (
    <>
      <Layout>
        <main>
<<<<<<< HEAD
          <Informations />
=======
          <h1>Main Murod</h1>
>>>>>>> 1b6f923cb5283bb1322c0b42f839de98daa0e3b9
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
